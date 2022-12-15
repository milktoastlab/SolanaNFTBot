import {
  Connection,
  ParsedConfirmedTransaction,
  ParsedConfirmedTransactionMeta,
  ParsedInnerInstruction,
  ParsedInstruction,
  ParsedMessageAccount,
  TokenBalance,
} from "@solana/web3.js";
import { Marketplace, NFTSale, SaleMethod, Transfer } from "./types";
import { LamportPerSOL } from "../solana";
import { fetchNFTData } from "../solana/NFTData";
import solanart from "./solanart";
import logger from "lib/logger";

export function getTransfersFromInnerInstructions(
  innerInstructions: any
): Transfer[] {

  if (!innerInstructions) {
    return [];
  }
  const instructions = innerInstructions.instructions as ParsedInstruction[];
  if (!instructions[0]?.parsed) {
    return [];
  }

  return instructions
    .filter((i: any) => {
      return Boolean(i?.parsed?.info.lamports) && i.parsed.type === "transfer";
    })
    .map<Transfer>((i: any) => {
      const { info } = i.parsed;
      return {
        from: info.source,
        to: info.destination,
        revenue: {
          amount: info.lamports,
          symbol: "lamport",
        },
      };
    });
}

function txContainsLog(
  tx: ParsedConfirmedTransaction,
  values: string[]
): boolean {
  if (!tx.meta?.logMessages) {

    return false;
  }

  return Boolean(
    tx.meta.logMessages.find((msg) => {
      return Boolean(values.find((value) => msg.includes(value)));
    })
  );
}

function getTokenOriginFromTx(
  tx: ParsedConfirmedTransaction
): string | undefined {
  if (!tx.meta?.preTokenBalances?.length) {
    return;
  }

  let balance = tx.meta?.preTokenBalances.find((balance) => {
    if (!balance.uiTokenAmount.uiAmount) {
      return false;
    }
    return balance.uiTokenAmount.uiAmount > 0;
  });
  if (balance) {
    return (balance as TokenBalance & { owner?: string }).owner;
  }

  return;
}

function wasTokenMovedInTx(tx: ParsedConfirmedTransaction): boolean {
  if (!tx.meta?.postTokenBalances?.length) {
    return false;
  }
  if (!tx.meta?.preTokenBalances?.length) {
    return false;
  }

  let originalBalance = tx.meta?.preTokenBalances.find((balance) => {
    if (!balance.uiTokenAmount.uiAmount) {
      return false;
    }
    return balance.uiTokenAmount.uiAmount > 0;
  });

  const balanceWithToken = tx.meta?.postTokenBalances.find((balance) => {
    if (originalBalance?.owner && originalBalance.owner === balance.owner) {
      return false;
    }

    if (!balance.uiTokenAmount.uiAmount) {
      return false;
    }
    return balance.uiTokenAmount.uiAmount > 0;
  });

  return Boolean(balanceWithToken);
}

function getTokenDestinationFromTx(
  tx: ParsedConfirmedTransaction
): string | undefined {
  if (!tx.meta?.postTokenBalances?.length) {
    return;
  }

  let destinationBalance = tx.meta?.postTokenBalances.find((balance) => {
    if (!balance.uiTokenAmount.uiAmount) {
      return false;
    }
    return balance.uiTokenAmount.uiAmount > 0;
  });
  if (destinationBalance) {
    return (destinationBalance as TokenBalance & { owner?: string }).owner;
  }

  return;
}

function getTokenFromMeta(
  meta: ParsedConfirmedTransactionMeta
): string | undefined {

  if (meta.preTokenBalances && meta.preTokenBalances[0]?.mint) {

    return meta.preTokenBalances[0]?.mint;
  }
  if (meta.postTokenBalances && meta.postTokenBalances[0]?.mint) {

    return meta.postTokenBalances[0]?.mint;
  }
  return;
}

function getPriceInLamportForSolanaArt(
  { preBalances, postBalances }: ParsedConfirmedTransactionMeta,
  accountKeys: ParsedMessageAccount[],
  buyer: string
): number {
  const transferValues = accountKeys.reduce(
    (transferValues, current, currentIndex, arr) => {
      const value = Math.abs(
        postBalances[currentIndex] - preBalances[currentIndex]
      );

      if (current.pubkey.toString() === buyer) {
        transferValues.buyerTransfer = value;
      }
      transferValues.highestTransfer = Math.max(
        transferValues.highestTransfer,
        value
      );
      return transferValues;
    },
    {
      highestTransfer: 0,
      buyerTransfer: 0,
    }
  );
  return transferValues.highestTransfer - transferValues.buyerTransfer;
}

/**
 * Guessing the seller from transfers by assuming the seller always get the biggest
 * cut of the revenue from the sale
 */
function guessSellerByTransfers(transfers: Transfer[]): string | undefined {
  if (!transfers.length) {
    return;
  }
  const saleTransfers = [...transfers];
  return saleTransfers.sort((t1, t2) => {
    if (t1.revenue.amount > t2.revenue.amount) {
      return -1;
    }
    if (t1.revenue.amount < t2.revenue.amount) {
      return 1;
    }
    return 0;
  })[0].to;
}

function findLargestInnerInstructionIndex(
  innerInstructions: ParsedInnerInstruction[]
) {

  return innerInstructions.reduce((prevIndex, current, currentIndex) => {
    const prevInstruction = innerInstructions[prevIndex];

    if (current.instructions.length > prevInstruction.instructions.length) {

      return currentIndex;
    }

    return prevIndex;
  }, 0);
}

export async function parseNFTSaleOnTx(
  web3Conn: Connection,
  txResp: ParsedConfirmedTransaction,
  marketplace: Marketplace,
  transferInstructionIndex?: number
): Promise<NFTSale | null> {
  if (!txResp?.blockTime) {

    return null;
  }
  if (!txResp.meta) {

    return null;
  }
  if (txResp.meta.err) {

    return null;
  }

  const signer = txResp.transaction.message.accountKeys.find((k) => {
    return k.signer;
  });
  if (!signer) {

    return null;
  }
  const signerAddress = signer.pubkey.toString();

  // A sale transaction should move the token from one account to another
  if (!wasTokenMovedInTx(txResp)) {

    return null;
  }

  // Setting the signer as the default buyer and direct purchases as the default fallback
  // It's true in most cases
  let buyer = signerAddress;
  let buyMethod = SaleMethod.Direct;

  const tokenDestination = getTokenDestinationFromTx(txResp);
  if (tokenDestination && tokenDestination !== buyer) {
    buyer = tokenDestination;
    buyMethod = SaleMethod.Bid;
  }
  const transactionExecByMarketplaceProgram = txContainsLog(
    txResp,
    marketplace.programId
  );
  if (!transactionExecByMarketplaceProgram) {

    return null;
  }

  const {
    meta: { innerInstructions },
  } = txResp;
  if (!innerInstructions) {

    return null;
  }

  if (typeof transferInstructionIndex == "undefined") {

    transferInstructionIndex =
      findLargestInnerInstructionIndex(innerInstructions);
  }
  if (innerInstructions.length < transferInstructionIndex + 1) {

    return null;
  }

  const token = getTokenFromMeta(txResp.meta);
  if (!token) {

    return null;
  }
  const nftData = await fetchNFTData(web3Conn, token);
  if (!nftData) {

    return null;
  }
  let priceInLamport = 0;
  let transfers = getTransfersFromInnerInstructions(
    innerInstructions[transferInstructionIndex]
  );
  if (!transfers.length) {
    if (marketplace === solanart && txContainsLog(txResp, ["Accept Offer"])) {
      /**
       * Solanart bidding purchase transaction doesn't use transfers to distribute royalties
       * Which is why this method needs a special condition for extracting the price
       */
      priceInLamport = getPriceInLamportForSolanaArt(
        txResp.meta,
        txResp.transaction.message.accountKeys,
        buyer
      );
    }
  }
  else {
    priceInLamport = transfers.reduce<number>((prev, current) => {
      return prev + current.revenue.amount;
    }, 0);
  }
  if (!priceInLamport) {

    return null;
  }

  const seller = guessSellerByTransfers(transfers);

  // There are many cases that lamport stored contains floating points
  // For example: https://explorer.solana.com/tx/5YHfVoe9jSBTa3FWcYV11i6MNtPALTpot1ca6PydLx4nGNyCPc7cghwbz6VXgAyMrxUZDkkp2QoYfot74ckLsUYG
  // Generally, there should be no reason for the last digit of lamport not to be 0
  // Rounding it here ensures we get a more accurate result for sale.
  // That's what the explorers do.
  priceInLamport = Math.round(priceInLamport / 10) * 10;

  return {
    transaction: txResp.transaction.signatures[0],
    buyer,
    seller,
    method: buyMethod,
    transfers,
    token,
    nftData,
    soldAt: new Date(txResp.blockTime * 1000),
    getPriceInLamport(): number {
      return priceInLamport;
    },
    getPriceInSOL() {
      return priceInLamport / LamportPerSOL;
    },
    marketplace,
  };
}

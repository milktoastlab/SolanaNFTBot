import { ParsedInstruction } from "@solana/web3.js";
import { Marketplace, NFTSale, Transfer } from "./types";
import { LamportPerSOL } from "lib/solana";

const magicEden: Marketplace = {
  name: "Magic Eden",
  programId: "MEisE1HzehtrDpAAT8PnLHjpSSkRYakotTuJRPjTpo8",
  itemURL: (token: String) => `https://magiceden.io/item-details/${token}`,
  parseNFTSale(txResp): NFTSale | null {
    if (!txResp.meta?.logMessages) {
      return null;
    }

    if (!txResp.meta.logMessages[0].includes(this.programId)) {
      return null;
    }
    const { innerInstructions } = txResp.meta;
    if (!innerInstructions || !innerInstructions[0]) {
      return null;
    }
    if (!txResp?.blockTime) {
      return null;
    }
    if (!txResp.meta?.preTokenBalances) {
      return null;
    }

    const token = txResp.meta?.preTokenBalances[0]?.mint;
    if (!token) {
      return null;
    }

    const instructions = innerInstructions[0]
      ?.instructions as ParsedInstruction[];
    if (!instructions[0].parsed) {
      return null;
    }

    const transfers = instructions
      .filter((i: any) => {
        return Boolean(i.parsed.info.lamports) && i.parsed.type === 'transfer';
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

    return {
      transaction: txResp.transaction.signatures[0],
      transfers,
      token,
      soldAt: new Date(txResp.blockTime * 1000),
      getPriceInLamport(): number {
        return this.transfers.reduce<number>((prev, current) => {
          return prev + current.revenue.amount;
        }, 0);
      },
      getPriceInSOL() {
        return this.getPriceInLamport() / LamportPerSOL;
      },
      marketplace: this,
    };
  },
};

export default magicEden;

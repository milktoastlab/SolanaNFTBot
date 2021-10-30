import { NFTSale } from "./types";
import marketplaces from "./index";
import { ParsedConfirmedTransaction } from "@solana/web3.js";

export default function parseNFTSaleForAllMarkets(
  tx: ParsedConfirmedTransaction
): NFTSale | null {
  for (let i = 0; i < marketplaces.length; i++) {
    const nftSale = marketplaces[i].parseNFTSale(tx);
    if (nftSale) {
      return nftSale;
    }
  }
  return null;
}

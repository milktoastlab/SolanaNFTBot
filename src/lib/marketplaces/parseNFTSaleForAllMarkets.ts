import { NFTSale } from "./types";
import marketplaces from "./index";
import { Connection, ParsedConfirmedTransaction } from "@solana/web3.js";

export default async function parseNFTSaleForAllMarkets(
  web3Conn: Connection,
  tx: ParsedConfirmedTransaction
): Promise<NFTSale | null> {
  for (let i = 0; i < marketplaces.length; i++) {
    const nftSale = await marketplaces[i].parseNFTSale(web3Conn, tx);
    if (nftSale) {
      return nftSale;
    }
  }
  return null;
}

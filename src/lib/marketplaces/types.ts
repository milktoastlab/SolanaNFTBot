import { ParsedConfirmedTransaction } from "@solana/web3.js";
import NFTData from "lib/solana/NFTData";

export interface Marketplace {
  name: string;
  programId: string;
  itemURL: (token: String) => string;
  parseNFTSale: (tx: ParsedConfirmedTransaction) => NFTSale | null;
}

export interface Transfer {
  from: string;
  to: string;
  revenue: {
    amount: number;
    symbol: string;
  };
}

export interface NFTSale {
  transaction: string;
  token: string;
  transfers: Transfer[];
  soldAt: Date;
  marketplace: Marketplace;
  nftData?: NFTData;
  getPriceInLamport: () => number;
  getPriceInSOL: () => number;
}

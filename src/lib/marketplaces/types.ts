import { Connection, ParsedConfirmedTransaction } from "@solana/web3.js";
import NFTData from "lib/solana/NFTData";

export enum SaleMethod {
  Direct = "direct",
  Bid = "bid",
}

export interface Marketplace {
  name: string;
  programId: string[];
  iconURL: string;
  itemURL: (token: String) => string;
  profileURL: (address: String) => string;
  parseNFTSale: (
    web3Conn: Connection,
    tx: ParsedConfirmedTransaction
  ) => Promise<NFTSale | null>;
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
  buyer: string;
  seller?: string;
  method: SaleMethod;
  token: string;
  transfers: Transfer[];
  soldAt: Date;
  marketplace: Marketplace;
  nftData?: NFTData;
  getPriceInLamport: () => number;
  getPriceInSOL: () => number;
}

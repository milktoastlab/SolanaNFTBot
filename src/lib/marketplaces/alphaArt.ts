import { Marketplace, NFTSale } from "./types";
import { parseNFTSaleOnTx } from "./helper";

const alphaArt: Marketplace = {
  name: "Alpha art",
  iconUrl: "https://alpha.art/favicon.ico",
  programId: ["HZaWndaNWHFDd9Dhk5pqUUtsmoBCqzb1MLu3NAh1VX6B"],
  itemURL: (token: String) => `https://alpha.art/t/${token}`,
  parseNFTSale(web3Conn, txResp): Promise<NFTSale | null> {
    return parseNFTSaleOnTx(web3Conn, txResp, this, 1);
  },
};

export default alphaArt;

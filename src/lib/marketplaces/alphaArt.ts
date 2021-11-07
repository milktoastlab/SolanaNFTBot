import { Marketplace, NFTSale } from "./types";
import { parseNFTSaleOnTx } from "./helper";

const alphaArt: Marketplace = {
  name: "Alpha art",
  programId: "HZaWndaNWHFDd9Dhk5pqUUtsmoBCqzb1MLu3NAh1VX6B",
  itemURL: (token: String) => `https://alpha.art/t/${token}`,
  parseNFTSale(txResp): NFTSale | null {
    return parseNFTSaleOnTx(txResp, this, 1);
  },
};

export default alphaArt;

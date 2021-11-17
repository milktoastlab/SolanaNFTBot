import { Marketplace, NFTSale } from "./types";
import { parseNFTSaleOnTx } from "./helper";

const exchangeArt: Marketplace = {
  name: "Exchange Art",
  programId: "AmK5g2XcyptVLCFESBCJqoSfwV3znGoVYQnqEnaAZKWn",
  itemURL: (token: String) => `https://exchange.art/single/${token}`,
  parseNFTSale(txResp): NFTSale | null {
    return parseNFTSaleOnTx(txResp, this);
  },
};

export default exchangeArt;

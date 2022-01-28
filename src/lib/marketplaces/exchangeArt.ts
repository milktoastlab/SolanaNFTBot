import { Marketplace, NFTSale } from "./types";
import { parseNFTSaleOnTx } from "./helper";

const exchangeArt: Marketplace = {
  name: "Exchange Art",
  iconUrl: "https://cdn.exchange.art/static/apple-meta-logo.png"
  programId: ["AmK5g2XcyptVLCFESBCJqoSfwV3znGoVYQnqEnaAZKWn"],
  itemURL: (token: String) => `https://exchange.art/single/${token}`,
  parseNFTSale(web3Conn, txResp): Promise<NFTSale | null> {
    return parseNFTSaleOnTx(web3Conn, txResp, this);
  },
};

export default exchangeArt;

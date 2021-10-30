import { Marketplace, NFTSale } from "./types";
import { parseNFTSaleOnTx } from "./helper";

const unknown: Marketplace = {
  name: "an unknown marketplace",
  programId: " ",
  itemURL: (token: String) => `https://solscan.io/token/${token}`,
  parseNFTSale(txResp): NFTSale | null {
    return (
      parseNFTSaleOnTx(txResp, this, 0) || parseNFTSaleOnTx(txResp, this, 1)
    );
  },
};

export default unknown;

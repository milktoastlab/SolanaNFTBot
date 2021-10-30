import { Marketplace, NFTSale } from "./types";
import { parseNFTSaleOnTx } from "./helper";

const solanart: Marketplace = {
  name: "Solanart",
  programId: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
  itemURL: (token: String) => `https://solscan.io/token/${token}`,
  parseNFTSale(txResp): NFTSale | null {
    return parseNFTSaleOnTx(txResp, this, 1);
  },
};

export default solanart;

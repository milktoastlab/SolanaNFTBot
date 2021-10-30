import { Marketplace, NFTSale } from "./types";
import { parseNFTSaleOnTx } from "./helper";

const digitalEyes: Marketplace = {
  name: "Digital Eyes",
  programId: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
  itemURL: (token: String) => `https://digitaleyes.market/item/${token}`,
  parseNFTSale(txResp): NFTSale | null {
    return parseNFTSaleOnTx(txResp, this, 1);
  },
};

export default digitalEyes;

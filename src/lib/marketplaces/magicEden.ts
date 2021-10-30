import { Marketplace, NFTSale } from "./types";
import { parseNFTSaleOnTx } from "./helper";

const magicEden: Marketplace = {
  name: "Magic Eden",
  programId: "MEisE1HzehtrDpAAT8PnLHjpSSkRYakotTuJRPjTpo8",
  itemURL: (token: String) => `https://magiceden.io/item-details/${token}`,
  parseNFTSale(txResp): NFTSale | null {
    return parseNFTSaleOnTx(txResp, this, 0);
  },
};

export default magicEden;

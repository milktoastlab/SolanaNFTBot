import { Marketplace, NFTSale } from "./types";
import { parseNFTSaleOnTx } from "./helper";

const magicEden: Marketplace = {
  name: "Magic Eden",
  programId: "MEisE1HzehtrDpAAT8PnLHjpSSkRYakotTuJRPjTpo8",
  itemURL: (token: String) => `https://magiceden.io/item-details/${token}`,
  parseNFTSale(web3Conn, txResp): Promise<NFTSale | null> {
    return parseNFTSaleOnTx(web3Conn, txResp, this, 0);
  },
};

export default magicEden;

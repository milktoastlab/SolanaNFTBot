import { Marketplace, NFTSale } from "./types";
import { parseNFTSaleOnTx } from "./helper";

const magicEden: Marketplace = {
  name: "Magic Eden",
  programId: [
    "MEisE1HzehtrDpAAT8PnLHjpSSkRYakotTuJRPjTpo8",
    "M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K",
  ],
  itemURL: (token: String) => `https://magiceden.io/item-details/${token}`,
  parseNFTSale(web3Conn, txResp): Promise<NFTSale | null> {
    return parseNFTSaleOnTx(web3Conn, txResp, this, 0);
  },
};

export default magicEden;

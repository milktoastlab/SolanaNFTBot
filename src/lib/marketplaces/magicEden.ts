import { Marketplace, NFTSale } from "./types";
import { parseNFTSaleOnTx } from "lib/marketplaces/helper";

const magicEden: Marketplace = {
  name: "Magic Eden",
  programId: [
    "MEisE1HzehtrDpAAT8PnLHjpSSkRYakotTuJRPjTpo8",
    "M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K",
  ],
  iconURL: "https://www.magiceden.io/img/favicon.png",
  itemURL: (token: String) => `https://magiceden.io/item-details/${token}`,
  profileURL: (address: String) => `https://magiceden.io/u/${address}`,
  // Deprecated MagicEden doesn't work with the existing ways of parsing NFT sales
  // Detecting MagicEden now happens via their API
  parseNFTSale(web3Conn, txResp): Promise<NFTSale | null> {
    return parseNFTSaleOnTx(web3Conn, txResp, this);
  },
};

export default magicEden;

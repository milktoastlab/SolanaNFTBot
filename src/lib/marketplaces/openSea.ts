import { Marketplace, NFTSale } from "./types";
import { parseNFTSaleOnTx } from "./helper";

const openSea: Marketplace = {
  name: "OpenSea",
  programId: ["hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk"],
  iconURL:
    "https://storage.googleapis.com/opensea-static/Logomark/Logomark-Blue.png",
  itemURL: (token: String) => `https://opensea.io/assets/solana/${token}`,
  profileURL: (address: String) => `https://opensea.io/${address}`,
  parseNFTSale(web3Conn, txResp): Promise<NFTSale | null> {
    return parseNFTSaleOnTx(web3Conn, txResp, this);
  },
};

export default openSea;

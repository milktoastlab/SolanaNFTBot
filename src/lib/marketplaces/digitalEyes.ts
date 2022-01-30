import { Marketplace, NFTSale } from "./types";
import { parseNFTSaleOnTx } from "./helper";

const digitalEyes: Marketplace = {
  name: "Digital Eyes",
  programId: ["A7p8451ktDCHq5yYaHczeLMYsjRsAkzc3hCXcSrwYHU7"],
  iconURL: "https://digitaleyes.market/apple-touch-icon.png",
  itemURL: (token: String) => `https://digitaleyes.market/item/${token}`,
  parseNFTSale(web3Conn, txResp): Promise<NFTSale | null> {
    return parseNFTSaleOnTx(web3Conn, txResp, this, 1);
  },
};

export default digitalEyes;

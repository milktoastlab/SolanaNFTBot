import { Marketplace, NFTSale } from "./types";
import { parseNFTSaleOnTx } from "./helper";

const solanart: Marketplace = {
  name: "Solanart",
  programId: ["CJsLwbP1iu5DuUikHEJnLfANgKy6stB2uFgvBBHoyxwz"],
  itemURL: (token: String) => `https://solanart.io/search/?token=${token}`,
  parseNFTSale(web3Conn, txResp): Promise<NFTSale | null> {
    return parseNFTSaleOnTx(web3Conn, txResp, this);
  },
};

export default solanart;

import { parseNFTSaleOnTx } from "./helper";
import solanartSalesTxWithFloatingLamport from "./__fixtures__/solanartSalesTxWithFloatingLamport";
import solanart from "./solanart";

describe("helper", () => {
  describe("parseNFTSaleOnTx", () => {
    test("getPriceInLamport", () => {
      const nftSale = parseNFTSaleOnTx(
        solanartSalesTxWithFloatingLamport,
        solanart,
        1
      );
      expect(nftSale).toBeTruthy();
      expect(nftSale.getPriceInSOL()).toEqual(0.06);
    });
  });
});

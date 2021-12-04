import solsea from "./solsea";
import solseaSaleTx from "./__fixtures__/solseaSaleTx";

describe("solsea", () => {
  test("itemUrl", () => {
    expect(solsea.itemURL("xxx1")).toEqual("https://solsea.io/nft/xxx1");
  });

  describe("parseNFTSale", () => {
    test("sale transaction should return NFTSale", () => {
      const sale = solsea.parseNFTSale(solseaSaleTx);
      if (!sale) {
        fail("did not return NFTSale");
      }
      expect(sale.transaction).toEqual(
        "4XuN4e8nDz6jpCB6YXEBP7i3EFaoN9hVGkxMRTJeuu2i9dMZ7rJKCwU9A5zN8DoPw9dm5zbVrJwSfw5xctyJ82GU"
      );
      expect(sale.token).toEqual(
        "8gaYezSKFxJu4Q7F7xLWTbFBLAEsKefqq9i8stML7B6S"
      );
      expect(sale.soldAt).toEqual(new Date(1638570298 * 1000));
      expect(sale.marketplace).toEqual(solsea);
      expect(sale.getPriceInLamport()).toEqual(3000000000);
      expect(sale.getPriceInSOL()).toEqual(3);
    });
    test("non-sale transaction should return null", () => {
      const invalidSaleTx = {
        ...solseaSaleTx,
        meta: {
          ...solseaSaleTx.meta,
          preTokenBalances: [],
        },
      };
      expect(solsea.parseNFTSale(invalidSaleTx)).toBe(null);
    });
    test("non Solsea transaction", () => {
      const invalidSaleTx = {
        ...solseaSaleTx,
      };
      invalidSaleTx.meta.logMessages = ["Program xxx invoke [1]"];
      expect(solsea.parseNFTSale(invalidSaleTx)).toBe(null);
    });
  });
});

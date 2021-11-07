import alphaArt from "./alphaArt";
import alphaArtSaleTx from "./__fixtures__/alphaArtSaleTx";

describe("alphaArt", () => {
  test("itemUrl", () => {
    expect(alphaArt.itemURL("xxx1")).toEqual("https://alpha.art/t/xxx1");
  });

  describe("parseNFTSale", () => {
    test("sale transaction should return NFTSale", () => {
      const sale = alphaArt.parseNFTSale(alphaArtSaleTx);
      expect(sale.transaction).toEqual(
        "4CwUFDv1JoaK4iN2chARePZZjAPrXdcX2VwDC2Snt4gNgdmFfqtiUR6HkniFNfLwh35rQzTjqhpDkgzWw69e6Svc"
      );
      expect(sale.token).toEqual(
        "14Cc7DA6MwpNdAZZYdLxK6WQ9meMaeLX1WsCyLRf5nqw"
      );
      expect(sale.soldAt).toEqual(new Date(1636257741 * 1000));
      expect(sale.marketplace).toEqual(alphaArt);
      expect(sale.getPriceInLamport()).toEqual(780000000);
      expect(sale.getPriceInSOL()).toEqual(0.78);
    });
    test("non-sale transaction should return null", () => {
      const invalidSaleTx = {
        ...alphaArtSaleTx,
        meta: {
          ...alphaArtSaleTx.meta,
          preTokenBalances: [],
        },
      };
      expect(alphaArt.parseNFTSale(invalidSaleTx)).toBe(null);
    });
    test("non Alpha art transaction", () => {
      const nonAlphaArtSaleTx = {
        ...alphaArtSaleTx,
      };
      nonAlphaArtSaleTx.meta.logMessages = ["Program xxx invoke [1]"];
      expect(alphaArt.parseNFTSale(nonAlphaArtSaleTx)).toBe(null);
    });
  });
});

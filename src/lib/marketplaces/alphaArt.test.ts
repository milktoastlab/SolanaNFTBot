import alphaArt from "./alphaArt";
import alphaArtSaleTx from "./__fixtures__/alphaArtSaleTx";
import { Connection } from "@solana/web3.js";

jest.mock("lib/solana/NFTData", () => {
  return {
    fetchNFTData: () => {
      return {};
    },
  };
});

describe("alphaArt", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const conn = new Connection("https://test/");

  test("itemUrl", () => {
    expect(alphaArt.itemURL("xxx1")).toEqual("https://alpha.art/t/xxx1");
  });

  describe("parseNFTSale", () => {
    test("sale transaction should return NFTSale", async () => {
      const sale = await alphaArt.parseNFTSale(conn, alphaArtSaleTx);
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
      expect(sale.buyer).toEqual(
        "CScUB4iBTfCWaFkj5gRpXx42HVpAgDvPJgbQxtETRXi1"
      );
    });
    test("non-sale transaction should return null", async () => {
      const invalidSaleTx = {
        ...alphaArtSaleTx,
        meta: {
          ...alphaArtSaleTx.meta,
          preTokenBalances: [],
          postTokenBalances: [],
        },
      };
      expect(await alphaArt.parseNFTSale(conn, invalidSaleTx)).toBe(null);
    });
    test("non Alpha art transaction", async () => {
      const nonAlphaArtSaleTx = {
        ...alphaArtSaleTx,
      };
      nonAlphaArtSaleTx.meta.logMessages = ["Program xxx invoke [1]"];
      expect(await alphaArt.parseNFTSale(conn, nonAlphaArtSaleTx)).toBe(null);
    });
  });
});

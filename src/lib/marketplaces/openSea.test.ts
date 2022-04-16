import openSea from "./openSea";
import openSeaSaleTx from "./__fixtures__/openSeaSaleTx";
import openSeaBidTx from "./__fixtures__/openSeaBidTx";
import { Connection } from "@solana/web3.js";

jest.mock("lib/solana/NFTData", () => {
  return {
    fetchNFTData: () => {
      return {};
    },
  };
});

describe("openSea", () => {
  const conn = new Connection("https://test/");

  test("itemUrl", () => {
    expect(openSea.itemURL("xxx1")).toEqual("https://opensea.io/assets/solana/xxx1");
  });

  describe("parseNFTSale", () => {
    test("sale transaction should return NFTSale", async () => {
      const sale = await openSea.parseNFTSale(conn, openSeaSaleTx);
      if (!sale) {
        fail("did not return NFTSale");
      }
      expect(sale.transaction).toEqual(
        "3uCUHGPcXJGA4c1fwwY2hn4pdfLYqUuqACqGHaWhPjCqt8YJrZ63QQrPqFn56qe3QEoL7BJtvQA8VuTCV4QPrEA2"
      );
      expect(sale.token).toEqual(
        "CL8vqe2dL8Khh1fZtzSZL6DcXweSkdzGVS4t8LbmBh14"
      );
      expect(sale.soldAt).toEqual(new Date(1649206880 * 1000));
      expect(sale.marketplace).toEqual(openSea);
      expect(sale.getPriceInLamport()).toEqual(94000000000);
      expect(sale.getPriceInSOL()).toEqual(94);
    });
    test("non-sale transaction should return null", async () => {
      const invalidSaleTx = {
        ...openSeaSaleTx,
        meta: {
          ...openSeaSaleTx.meta,
          preTokenBalances: [],
          postTokenBalances: [],
        },
      };
      expect(await openSea.parseNFTSale(conn, invalidSaleTx)).toBe(null);
    });
    test("bidding transaction should return null", async () => {
      expect(await openSea.parseNFTSale(conn, openSeaBidTx)).toBe(null);
    });
    test("non OpenSea transaction", async () => {
      const invalidSaleTx = {
        ...openSeaSaleTx,
      };
      invalidSaleTx.meta.logMessages = ["Program xxx invoke [1]"];
      expect(await openSea.parseNFTSale(conn, invalidSaleTx)).toBe(null);
    });
  });
});

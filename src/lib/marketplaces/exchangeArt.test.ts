import exchangeArt from "./exchangeArt";
import exchangeArtSaleTx from "./__fixtures__/exchangeArtSaleTx";
import exchangeArtSaleTxV2 from "./__fixtures__/exchangeArtSaleTxV2";
import { Connection } from "@solana/web3.js";

jest.mock("lib/solana/NFTData", () => {
  return {
    fetchNFTData: () => {
      return {};
    },
  };
});

describe("exchangeArt", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const conn = new Connection("https://test/");

  test("itemUrl", () => {
    expect(exchangeArt.itemURL("xxx1")).toEqual(
      "https://exchange.art/single/xxx1"
    );
  });

  describe("parseNFTSale", () => {
    test("sale transaction should return NFTSale", async () => {
      const sale = await exchangeArt.parseNFTSale(conn, exchangeArtSaleTx);
      expect(sale.transaction).toEqual(
        "4WniSeFvZHsnZEDueeWhP18dUC9bGwZjoQ19RQq14796GCdb7WVRsTjK8AZCLLhL136p4J96minzfZcKVjY3fNAY"
      );
      expect(sale.token).toEqual(
        "GSG2UXwfv5EE1Ad62bCc3pWcgJy5NRdFYof9JyyFZDMS"
      );
      expect(sale.soldAt).toEqual(new Date(1636465965 * 1000));
      expect(sale.marketplace).toEqual(exchangeArt);
      expect(sale.getPriceInLamport()).toEqual(1990000000);
      expect(sale.getPriceInSOL()).toEqual(1.99);
      expect(sale.buyer).toEqual(
        "8WX1T8ofK91YxcPHp9t1wnQanHfcu4Nzy3fwQqMNGecJ"
      );

      const expectedTransfers = [
        {
          to: "6482e33zrerYfhKAjPR2ncMSrH2tbTy5LDjdhB5PXzxd",
          revenue: { amount: 49750000, symbol: "lamport" },
          from: "8WX1T8ofK91YxcPHp9t1wnQanHfcu4Nzy3fwQqMNGecJ",
        },
        {
          to: "4QJzmvKWpneEgHDa99QCb4hWtAhxA6qfFNtYWAb8Cw93",
          revenue: { amount: 99500000, symbol: "lamport" },
          from: "8WX1T8ofK91YxcPHp9t1wnQanHfcu4Nzy3fwQqMNGecJ",
        },
        {
          to: "7ZvteCjTjt5HxYbmxyzo9xMavDEXkNLUG6r6pJJXijvj",
          revenue: { amount: 99500000, symbol: "lamport" },
          from: "8WX1T8ofK91YxcPHp9t1wnQanHfcu4Nzy3fwQqMNGecJ",
        },
        {
          to: "7A6AV8pMznyt9eBXGbnkcgbuKhStz3vDQvWcRBoYWV5R",
          revenue: { amount: 1741250000, symbol: "lamport" },
          from: "8WX1T8ofK91YxcPHp9t1wnQanHfcu4Nzy3fwQqMNGecJ",
        },
      ];
      expect(sale.transfers.length).toEqual(expectedTransfers.length);
      expectedTransfers.forEach((expectedTransfer, index) => {
        const transfer = sale.transfers[index];
        expect(transfer.from).toEqual(expectedTransfer.from);
        expect(transfer.to).toEqual(expectedTransfer.to);
        expect(transfer.revenue).toEqual(expectedTransfer.revenue);
      });
    });
    test("sale transaction v2 should return NFTSale", async () => {
      const sale = await exchangeArt.parseNFTSale(conn, exchangeArtSaleTxV2);
      expect(sale.marketplace).toEqual(exchangeArt);
      expect(sale.getPriceInLamport()).toEqual(200000000);
      expect(sale.getPriceInSOL()).toEqual(0.2);
      expect(sale.buyer).toEqual(
        "FR4xWcvhxA2dLTDda5cmD1zUxz9gnzrVhhLq4owcAzt3"
      );

      const expectedTransfers = [
        {
          to: "6482e33zrerYfhKAjPR2ncMSrH2tbTy5LDjdhB5PXzxd",
          revenue: { amount: 5000000, symbol: "lamport" },
          from: "FR4xWcvhxA2dLTDda5cmD1zUxz9gnzrVhhLq4owcAzt3",
        },
        {
          to: "8pJyixptCqPPLSkT9qqjMmJjAELdP8YiGsL1ihNmSsaE",
          revenue: { amount: 100000000, symbol: "lamport" },
          from: "FR4xWcvhxA2dLTDda5cmD1zUxz9gnzrVhhLq4owcAzt3",
        },
        {
          to: "3Z6T94rMaTKjfdQb9ShunvMJ6C9LqDqEkfKBBeGArpzp",
          revenue: { amount: 95000000, symbol: "lamport" },
          from: "FR4xWcvhxA2dLTDda5cmD1zUxz9gnzrVhhLq4owcAzt3",
        },
      ];
      expect(sale.transfers.length).toEqual(expectedTransfers.length);
      expectedTransfers.forEach((expectedTransfer, index) => {
        const transfer = sale.transfers[index];
        expect(transfer.from).toEqual(expectedTransfer.from);
        expect(transfer.to).toEqual(expectedTransfer.to);
        expect(transfer.revenue).toEqual(expectedTransfer.revenue);
      });
    });
    test("non-sale transaction should return null", async () => {
      const invalidSaleTx = {
        ...exchangeArtSaleTx,
        meta: {
          ...exchangeArtSaleTx.meta,
          preTokenBalances: [],
          postTokenBalances: [],
        },
      };
      expect(await exchangeArt.parseNFTSale(conn, invalidSaleTx)).toBe(null);
    });
    test("non exchange art transaction", async () => {
      const invalidSaleTx = {
        ...exchangeArtSaleTx,
      };
      invalidSaleTx.meta.logMessages = ["Program xxx invoke [1]"];
      expect(await exchangeArt.parseNFTSale(conn, invalidSaleTx)).toBe(null);
    });
  });
});

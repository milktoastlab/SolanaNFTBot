import solanart from "./solanart";
import solanartSaleTx from "./__fixtures__/solanartSaleTx";
import solanartSaleFromBidTx from "./__fixtures__/solanartSaleFromBidTx";
import { SaleMethod } from "./types";
import { Connection } from "@solana/web3.js";

jest.mock("lib/solana/NFTData", () => {
  return {
    fetchNFTData: () => {
      return {};
    },
  };
});

describe("solanart", () => {
  const conn = new Connection("https://test/");

  test("itemUrl", () => {
    expect(solanart.itemURL("xxx1")).toEqual("https://solscan.io/token/xxx1");
  });

  describe("parseNFTSale", () => {
    test("sale transaction should return NFTSale", async () => {
      const sale = await solanart.parseNFTSale(conn, solanartSaleTx);
      expect(sale.transaction).toEqual(
        "3qmi5w4ZJsf1PJED21bNVpwgobcMFxUeb6coKJNA32F1fW5WELDXAxnjLzsfnxGnKQfKLuwVBk3xD6zbcjvA9GTX"
      );
      expect(sale.token).toEqual(
        "2se1H9trBxHVTeiCpuk4manbaq1b4iio2MYWcLCnLMFa"
      );
      expect(sale.soldAt).toEqual(new Date(1635558562 * 1000));
      expect(sale.marketplace).toEqual(solanart);
      expect(sale.getPriceInLamport()).toEqual(19700000000);
      expect(sale.getPriceInSOL()).toEqual(19.7);

      const expectedTransfers = [
        {
          to: "8Kag8CqNdCX55s4A5W4iraS71h6mv6uTHqsJbexdrrZm",
          from: "93ccg27u1tHK1FzqoyRtaUVh3kRwbvYNJcz4NbWWSt1P",
          revenue: { amount: 640250000, symbol: "lamport" },
        },
        {
          to: "aury7LJUae7a92PBo35vVbP61GX8VbyxFKausvUtBrt",
          from: "93ccg27u1tHK1FzqoyRtaUVh3kRwbvYNJcz4NbWWSt1P",
          revenue: { amount: 344750000, symbol: "lamport" },
        },
        {
          to: "E6dkaYhqbZN3a1pDrdbajJ9D8xA66LBBcjWi6dDNAuJH",
          from: "93ccg27u1tHK1FzqoyRtaUVh3kRwbvYNJcz4NbWWSt1P",
          revenue: { amount: 591000000, symbol: "lamport" },
        },
        {
          to: "H9Yi8cfwvwKJvpLMPTLftPdVkvmzkN7BamcAT5hyEh8j",
          from: "93ccg27u1tHK1FzqoyRtaUVh3kRwbvYNJcz4NbWWSt1P",
          revenue: { amount: 18124000000, symbol: "lamport" },
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
    test("bidding sale transaction should return NFTSale", async () => {
      const sale = await solanart.parseNFTSale(conn, solanartSaleFromBidTx);
      expect(sale.transaction).toEqual(
        "56QWjtsUykb2cxytM1jwJQmuLjtgZjs7jCZMARYBiCRCy8mEwVXqBFgBhvraDSzA27dUFRxX7Zi5VB4mxvjofXqR"
      );
      expect(sale.token).toEqual(
        "HRGYe4hDNjNVCjmwhmnEiiZtbjzShCwazC1JEyERXRUo"
      );
      expect(sale.method).toEqual(SaleMethod.Bid);
      expect(sale.buyer).toEqual(
        "6bPDVYs5Ewutp8jqurwqfWkL3UeUAGouZg5RJxNY2yAM"
      );
    });
    test("non-sale transaction should return null", async () => {
      const invalidSaleTx = {
        ...solanartSaleTx,
        meta: {
          ...solanartSaleTx.meta,
          preTokenBalances: [],
          postTokenBalances: [],
        },
      };
      expect(await solanart.parseNFTSale(conn, invalidSaleTx)).toBe(null);
    });
    test("non Solanart transaction", async () => {
      const invalidSaleTx = {
        ...solanartSaleTx,
      };
      invalidSaleTx.meta.logMessages = ["Program xxx invoke [1]"];
      expect(await solanart.parseNFTSale(conn, invalidSaleTx)).toBe(null);
    });
  });
});

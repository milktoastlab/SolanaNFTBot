import digitalEyes from "./digitalEyes";
import digitalEyesSaleTx from "./__fixtures__/digitalEyesSaleTx";

describe("digitalEyes", () => {
  test("itemUrl", () => {
    expect(digitalEyes.itemURL("xxx1")).toEqual(
      "https://digitaleyes.market/item/xxx1"
    );
  });

  describe("parseNFTSale", () => {
    test("sale transaction should return NFTSale", () => {
      const sale = digitalEyes.parseNFTSale(digitalEyesSaleTx);
      expect(sale.transaction).toEqual(
        "5DqZaNrvEKLLUupRTbt56eYG4f8U25uxYH4wCw5UevbEttkBLDJuF9927yacw7J74kTtWKC1xuyA1QBQRakh3cd1"
      );
      expect(sale.token).toEqual(
        "ECoNeXqLJofE7WZZzkntyTr3kqgrELmcLiY4HN9qb2ae"
      );
      expect(sale.soldAt).toEqual(new Date(1635551628 * 1000));
      expect(sale.marketplace).toEqual(digitalEyes);
      expect(sale.getPriceInLamport()).toEqual(30000000);
      expect(sale.getPriceInSOL()).toEqual(0.03);

      const expectedTransfers = [
        {
          to: "3iYf9hHQPciwgJ1TCjpRUp1A3QW4AfaK7J6vCmETRMuu",
          from: "59uZhxZov3UeBG3QQWg8rKLm4MHGA89V3XLBRUxbqXaV",
          revenue: { amount: 750000, symbol: "lamport" },
        },
        {
          to: "6EjCH2MQBucbfCXZbrUpP3jTkYLJi3r87rdyptrrNAXJ",
          from: "59uZhxZov3UeBG3QQWg8rKLm4MHGA89V3XLBRUxbqXaV",
          revenue: { amount: 29250000, symbol: "lamport" },
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
    test("non-sale transaction should return null", () => {
      const invalidSaleTx = {
        ...digitalEyesSaleTx,
        meta: {
          ...digitalEyesSaleTx.meta,
          preTokenBalances: [],
        },
      };
      expect(digitalEyes.parseNFTSale(invalidSaleTx)).toBe(null);
    });
    test("non Solanart transaction", () => {
      const invalidSaleTx = {
        ...digitalEyesSaleTx,
      };
      invalidSaleTx.meta.logMessages = ["Program xxx invoke [1]"];
      expect(digitalEyes.parseNFTSale(invalidSaleTx)).toBe(null);
    });
  });
});

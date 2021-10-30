import solanart from "./solanart";
import solanartSaleTx from "./__fixtures__/solanartSaleTx";

describe("solanart", () => {
  test("itemUrl", () => {
    expect(solanart.itemURL("xxx1")).toEqual("https://solscan.io/token/xxx1");
  });

  describe("parseNFTSale", () => {
    test("sale transaction should return NFTSale", () => {
      const sale = solanart.parseNFTSale(solanartSaleTx);
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
    test("non-sale transaction should return null", () => {
      const invalidSaleTx = {
        ...solanartSaleTx,
        meta: {
          ...solanartSaleTx.meta,
          preTokenBalances: [],
        },
      };
      expect(solanart.parseNFTSale(invalidSaleTx)).toBe(null);
    });
    test("non Solanart transaction", () => {
      const nonMagicEdenSaleTx = {
        ...solanartSaleTx,
      };
      nonMagicEdenSaleTx.meta.logMessages[0] = "Program xxx invoke [1]";
      expect(solanart.parseNFTSale(nonMagicEdenSaleTx)).toBe(null);
    });
  });
});

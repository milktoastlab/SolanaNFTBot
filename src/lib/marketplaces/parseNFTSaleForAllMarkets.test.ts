import magicEdenSaleTx from "./__fixtures__/magicEdenSaleTx";
import parseNFTSaleForAllMarkets from "./parseNFTSaleForAllMarkets";
import alphaArtSaleTx from "./__fixtures__/alphaArtSaleTx";
import solanartSaleTx from "./__fixtures__/solanartSaleTx";
import digitalEyeSaleTx from "./__fixtures__/digitalEyesSaleTx";
import exchangeArtSaleTx from "./__fixtures__/exchangeArtSaleTx";
import solseaSaleTx from "./__fixtures__/solseaSaleTx";

describe("parseNFTSale", () => {
  test("sale transaction should return NFTSale", () => {
    [
      magicEdenSaleTx,
      digitalEyeSaleTx,
      solanartSaleTx,
      alphaArtSaleTx,
      exchangeArtSaleTx,
      solseaSaleTx,
    ].forEach((tx) => {
      const sale = parseNFTSaleForAllMarkets(tx);
      expect(sale?.transaction).toEqual(tx.transaction.signatures[0]);
    });
  });

  test("non-sale transaction should return null", () => {
    const invalidSaleTx = {
      ...magicEdenSaleTx,
      meta: {
        ...magicEdenSaleTx.meta,
        preTokenBalances: [],
        postTokenBalances: [],
      },
    };
    expect(parseNFTSaleForAllMarkets(invalidSaleTx)).toBe(null);
  });
});

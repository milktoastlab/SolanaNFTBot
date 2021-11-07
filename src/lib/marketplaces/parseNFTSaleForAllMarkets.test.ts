import magicEdenSaleTx from "./__fixtures__/magicEdenSaleTx";
import parseNFTSaleForAllMarkets from "./parseNFTSaleForAllMarkets";
import alphaArtSaleTx from "./__fixtures__/alphaArtSaleTx";
import solanartSaleTx from "./__fixtures__/solanartSaleTx";
import digitalEyeSaleTx from "./__fixtures__/digitalEyesSaleTx";

describe("parseNFTSale", () => {
  test("sale transaction should return NFTSale", () => {
    [magicEdenSaleTx, digitalEyeSaleTx, solanartSaleTx, alphaArtSaleTx].forEach(
      (tx) => {
        const sale = parseNFTSaleForAllMarkets(tx);
        expect(sale?.transaction).toEqual(tx.transaction.signatures[0]);
      }
    );
  });

  test("non-sale transaction should return null", () => {
    const invalidSaleTx = {
      ...magicEdenSaleTx,
      meta: {
        ...magicEdenSaleTx.meta,
        preTokenBalances: [],
      },
    };
    expect(parseNFTSaleForAllMarkets(invalidSaleTx)).toBe(null);
  });
});

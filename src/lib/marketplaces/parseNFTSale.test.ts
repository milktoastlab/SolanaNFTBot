import magicEdenSaleTx from "./__fixtures__/magicEdenSaleTx";
import parseNFTSale from "./parseNFTSale";

describe("parseNFTSale", () => {
  test("sale transaction should return NFTSale", () => {
    const sale = parseNFTSale(magicEdenSaleTx);
    expect(sale?.transaction).toEqual(
      "626EgwuS6dbUKrkZujQCFjHiRsz92ALR5gNAEg2eMpZzEo88Cci6HifpDFcvgYR8j88nXUq1nRUA7UDRdvB7Y6WD"
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
    expect(parseNFTSale(invalidSaleTx)).toBe(null);
  });
});

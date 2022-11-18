import magicEdenSaleTx from "./__fixtures__/magicEdenSaleTx";
import magicEdenSaleTxV2 from "./__fixtures__/magicEdenSaleTxV2";
import parseNFTSaleForAllMarkets from "./parseNFTSaleForAllMarkets";
import alphaArtSaleTx from "./__fixtures__/alphaArtSaleTx";
import solanartSaleTx from "./__fixtures__/solanartSaleTx";
import digitalEyeSaleTx from "./__fixtures__/digitalEyesSaleTx";
import exchangeArtSaleTx from "./__fixtures__/exchangeArtSaleTx";
import solseaSaleTx from "./__fixtures__/solseaSaleTx";
import { Connection } from "@solana/web3.js";
import openSeaSaleTx from "./__fixtures__/openSeaSaleTx";

jest.mock("lib/solana/NFTData", () => {
  return {
    fetchNFTData: () => {
      return {};
    },
  };
});

describe("parseNFTSale", () => {
  const conn = new Connection("https://test/");

  test("sale transaction should return NFTSale", async () => {
    const tests = [
      digitalEyeSaleTx,
      solanartSaleTx,
      alphaArtSaleTx,
      exchangeArtSaleTx,
      solseaSaleTx,
      openSeaSaleTx,
    ].map(async (tx) => {
      const sale = await parseNFTSaleForAllMarkets(conn, tx);
      expect(sale?.transaction).toEqual(tx.transaction.signatures[0]);
    });

    return Promise.all(tests);
  });

  test("non-sale transaction should return null", async () => {
    const invalidSaleTx = {
      ...magicEdenSaleTx,
      meta: {
        ...magicEdenSaleTx.meta,
        preTokenBalances: [],
        postTokenBalances: [],
      },
    };
    expect(await parseNFTSaleForAllMarkets(conn, invalidSaleTx)).toBe(null);
  });
});

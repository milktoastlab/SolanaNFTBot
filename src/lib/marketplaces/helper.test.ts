import { parseNFTSaleOnTx } from "./helper";
import solanartSalesTxWithFloatingLamport from "./__fixtures__/solanartSalesTxWithFloatingLamport";
import solanart from "./solanart";
import magicEdenSaleTx from "./__fixtures__/magicEdenSaleTx";
import digitalEyeSaleTx from "./__fixtures__/digitalEyesSaleTx";
import solanartSaleTx from "./__fixtures__/solanartSaleTx";
import alphaArtSaleTx from "./__fixtures__/alphaArtSaleTx";
import exchangeArtSaleTx from "./__fixtures__/exchangeArtSaleTx";
import exchangeArtSaleTxV2 from "./__fixtures__/exchangeArtSaleTxV2";
import solseaSaleTx from "./__fixtures__/solseaSaleTx";
import magicEden from "./magicEden";
import digitalEyes from "./digitalEyes";
import alphaArt from "./alphaArt";
import exchangeArt from "./exchangeArt";
import solsea from "./solsea";
import { Connection } from "@solana/web3.js";
import magicEdenFailedTx from "./__fixtures__/magicEdenFailedTx";

jest.mock("lib/solana/NFTData", () => {
  return {
    fetchNFTData: () => {
      return {};
    },
  };
});

describe("helper", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const conn = new Connection("https://test/");

  describe("parseNFTSaleOnTx", () => {
    test("getPriceInLamport", async () => {
      const nftSale = await parseNFTSaleOnTx(
        conn,
        solanartSalesTxWithFloatingLamport,
        solanart,
        1
      );
      expect(nftSale).toBeTruthy();
      expect(nftSale.getPriceInSOL()).toEqual(0.06);
    });

    test("should parse nft sales", async () => {
      const sale = await parseNFTSaleOnTx(conn, magicEdenSaleTx, magicEden);
      expect(sale.transaction).toEqual(
        "626EgwuS6dbUKrkZujQCFjHiRsz92ALR5gNAEg2eMpZzEo88Cci6HifpDFcvgYR8j88nXUq1nRUA7UDRdvB7Y6WD"
      );
      expect(sale.token).toEqual(
        "8pwYVy61QiSTJGPc8yYfkVPLBBr8r17WkpUFRhNK6cjK"
      );
      expect(sale.soldAt).toEqual(new Date(1635141315000));
      expect(sale.marketplace).toEqual(magicEden);
      expect(sale.getPriceInLamport()).toEqual(3720000000);
      expect(sale.getPriceInSOL()).toEqual(3.72);
      expect(sale.seller).toEqual(
        "HihC794BdNCetkizxdFjVD2KiKWirGYbm2ojvRYXQd6H"
      );

      const expectedTransfers = [
        {
          to: "2NZukH2TXpcuZP4htiuT8CFxcaQSWzkkR6kepSWnZ24Q",
          from: "U7ZkJtaAwvBHt9Tw5BK8sdp2wLrEe7p1g3kFxB9WJCu",
          revenue: {
            amount: 74400000,
            symbol: "lamport",
          },
        },
        {
          to: "4eQwMqAA4c2VUD51rqfAke7kqeFLAxcxSB67rtFjDyZA",
          from: "U7ZkJtaAwvBHt9Tw5BK8sdp2wLrEe7p1g3kFxB9WJCu",
          revenue: {
            amount: 74400000,
            symbol: "lamport",
          },
        },
        {
          to: "Dz9kwoBVVzF11cHeKotQpA7t4aeCQsgRpVw4dg8zkntg",
          from: "U7ZkJtaAwvBHt9Tw5BK8sdp2wLrEe7p1g3kFxB9WJCu",
          revenue: {
            amount: 74400000,
            symbol: "lamport",
          },
        },
        {
          to: "4xHEEswq2T2E5uNoa1uw34RNKzPerayBHxX3P4SaR7cD",
          from: "U7ZkJtaAwvBHt9Tw5BK8sdp2wLrEe7p1g3kFxB9WJCu",
          revenue: {
            amount: 74400000,
            symbol: "lamport",
          },
        },
        {
          to: "33CJriD17bUScYW7eKFjM6BPfkFWPerHfdpvtw3a8JdN",
          from: "U7ZkJtaAwvBHt9Tw5BK8sdp2wLrEe7p1g3kFxB9WJCu",
          revenue: {
            amount: 74400000,
            symbol: "lamport",
          },
        },
        {
          to: "HWZybKNqMa93EmHK2ESL2v1XShcnt4ma4nFf14497jNS",
          from: "U7ZkJtaAwvBHt9Tw5BK8sdp2wLrEe7p1g3kFxB9WJCu",
          revenue: {
            amount: 74400000,
            symbol: "lamport",
          },
        },
        {
          to: "HihC794BdNCetkizxdFjVD2KiKWirGYbm2ojvRYXQd6H",
          from: "U7ZkJtaAwvBHt9Tw5BK8sdp2wLrEe7p1g3kFxB9WJCu",
          revenue: {
            amount: 3273600000,
            symbol: "lamport",
          },
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

    test("should parse all marketplace purchases", async () => {
      const invalidTx = {
        ...magicEdenSaleTx,
        meta: {
          ...magicEdenSaleTx.meta,
          preTokenBalances: [],
          postTokenBalances: [],
        },
      };

      const tests = [
        { tx: magicEdenSaleTx, martketplace: magicEden, shouldParsed: true },
        { tx: invalidTx, martketplace: magicEden, shouldParsed: false },
        { tx: magicEdenSaleTx, martketplace: digitalEyes, shouldParsed: false },
        { tx: digitalEyeSaleTx, martketplace: digitalEyes, shouldParsed: true },
        { tx: digitalEyeSaleTx, martketplace: solanart, shouldParsed: false },
        { tx: solanartSaleTx, martketplace: solanart, shouldParsed: true },
        { tx: solanartSaleTx, martketplace: digitalEyes, shouldParsed: false },
        { tx: alphaArtSaleTx, martketplace: alphaArt, shouldParsed: true },
        { tx: solseaSaleTx, martketplace: solsea, shouldParsed: true },
        { tx: magicEdenFailedTx, martketplace: magicEden, shouldParsed: false },
        {
          tx: exchangeArtSaleTx,
          martketplace: exchangeArt,
          shouldParsed: true,
        },
        {
          tx: exchangeArtSaleTxV2,
          martketplace: exchangeArt,
          shouldParsed: true,
        },
      ].map(async (testCase) => {
        const nftSale = await parseNFTSaleOnTx(
          conn,
          testCase.tx,
          testCase.martketplace
        );
        expect(Boolean(nftSale)).toEqual(testCase.shouldParsed);
      });

      return Promise.all(tests);
    });
  });
});

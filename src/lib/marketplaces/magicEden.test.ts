import magicEden from "./magicEden";
import magicEdenSaleTx from "./__fixtures__/magicEdenSaleTx";

describe("magicEden", () => {
  test('itemUrl', () => {
    expect(magicEden.itemURL('xxx1')).toEqual('https://magiceden.io/item-details/xxx1');
  });

  describe("parseNFTSale", () => {
    test("sale transaction should return NFTSale", () => {
      const sale = magicEden.parseNFTSale(magicEdenSaleTx);
      expect(sale.transaction).toEqual('626EgwuS6dbUKrkZujQCFjHiRsz92ALR5gNAEg2eMpZzEo88Cci6HifpDFcvgYR8j88nXUq1nRUA7UDRdvB7Y6WD');
      expect(sale.token).toEqual('8pwYVy61QiSTJGPc8yYfkVPLBBr8r17WkpUFRhNK6cjK');
      expect(sale.soldAt).toEqual(new Date(1635141315000));
      expect(sale.marketplace).toEqual(magicEden);
      expect(sale.getPriceInLamport()).toEqual(3720000000);
      expect(sale.getPriceInSOL()).toEqual(3.72);

      const expectedTransfers = [
        {
          to: "2NZukH2TXpcuZP4htiuT8CFxcaQSWzkkR6kepSWnZ24Q",
          from: "U7ZkJtaAwvBHt9Tw5BK8sdp2wLrEe7p1g3kFxB9WJCu",
          revenue: {
            amount: 74400000,
            symbol: "lamport",
          }
        },
        {
          to: "4eQwMqAA4c2VUD51rqfAke7kqeFLAxcxSB67rtFjDyZA",
          from: "U7ZkJtaAwvBHt9Tw5BK8sdp2wLrEe7p1g3kFxB9WJCu",
          revenue: {
            amount: 74400000,
            symbol: "lamport",
          }
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
          }
        },
        {
          to: "33CJriD17bUScYW7eKFjM6BPfkFWPerHfdpvtw3a8JdN",
          from: "U7ZkJtaAwvBHt9Tw5BK8sdp2wLrEe7p1g3kFxB9WJCu",
          revenue: {
            amount: 74400000,
            symbol: "lamport",
          }
        },
        {
          to: "HWZybKNqMa93EmHK2ESL2v1XShcnt4ma4nFf14497jNS",
          from: "U7ZkJtaAwvBHt9Tw5BK8sdp2wLrEe7p1g3kFxB9WJCu",
          revenue: {
            amount: 74400000,
            symbol: "lamport",
          }
        },
        {
          to: "HihC794BdNCetkizxdFjVD2KiKWirGYbm2ojvRYXQd6H",
          from: "U7ZkJtaAwvBHt9Tw5BK8sdp2wLrEe7p1g3kFxB9WJCu",
          revenue: {
            amount: 3273600000,
            symbol: 'lamport',
          }
        }
      ];
      expect(sale.transfers.length).toEqual(expectedTransfers.length);
      expectedTransfers.forEach((expectedTransfer, index) => {
        const transfer = sale.transfers[index];
        expect(transfer.from).toEqual(expectedTransfer.from);
        expect(transfer.to).toEqual(expectedTransfer.to);
        expect(transfer.revenue).toEqual(expectedTransfer.revenue);
      })
    });
    test("non-sale transaction should return null", () => {
      const invalidSaleTx = {
        ...magicEdenSaleTx,
        meta: {
          ...magicEdenSaleTx.meta,
          preTokenBalances: []
        },
      }
      expect(magicEden.parseNFTSale(invalidSaleTx)).toBe(null);
    });
    test("non magic eden transaction", () => {
      const nonMagicEdenSaleTx = {
        ...magicEdenSaleTx,
      };
      nonMagicEdenSaleTx.meta.logMessages[0] = 'Program xxx invoke [1]';
      expect(magicEden.parseNFTSale(nonMagicEdenSaleTx)).toBe(null);
    });
  });

});

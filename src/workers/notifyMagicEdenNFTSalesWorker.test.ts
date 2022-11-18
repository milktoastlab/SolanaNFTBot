import { NotificationType } from "lib/notifier";
import { MagicEdenConfig } from "config";
import { CollectionActivity } from "lib/marketplaces";

jest.mock("lib/solana/NFTData", () => {
  return {
    fetchNFTData: () => {
      return {};
    },
  };
});

jest.mock("axios", () => {
  return {
    get: () => {
      return {
        data: [
          {
            type: "buyNow",
            blockTime: 96292000003,
            tokenMint: "tokenxxx2",
            signature: "signature-2",
            source: "xxx",
            collection: "mlk",
            buyer: "buyer-2",
            seller: "seller-2",
            price: 0.2,
          },
          {
            type: "buyNow",
            blockTime: 96292000001,
            tokenMint: "tokenxxx1",
            signature: "signature-1",
            source: "xxx",
            collection: "mlk",
            buyer: "buyer-1",
            seller: "seller-1",
            price: 0.2,
          },
        ] as CollectionActivity[],
      };
    },
  };
});

import newWorker from "./notifyMagicEdenNFTSalesWorker";
import { Connection } from "@solana/web3.js";

describe("notifyMagicEdenNFTSalesWorker", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe("execute", () => {
    const notifier = {
      notify: jest.fn(),
    };

    const conn = new Connection("https://test/");

    test("on sale activity", async () => {
      const config: MagicEdenConfig = {
        url: "https://magiceden.io",
        collection: "mlk",
        discordChannelId: "",
      };

      const worker = newWorker(notifier, conn, config);

      await worker.execute();

      expect(notifier.notify.mock.calls.length).toEqual(2);
      const expectedArgs = notifier.notify.mock.calls[0];
      expect(expectedArgs[0]).toEqual(NotificationType.Sale);
      expect(expectedArgs[1].buyer).toEqual("buyer-1"); // Should fires the earliest sale first

      await worker.execute();

      expect(notifier.notify.mock.calls.length).toEqual(2);
    });
  });
});

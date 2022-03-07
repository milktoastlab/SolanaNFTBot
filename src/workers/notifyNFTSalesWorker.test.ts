import {NotificationType} from "lib/notifier";

jest.mock("lib/solana/NFTData", () => {
  return {
    fetchNFTData: () => {
      return {};
    },
  };
});

import newWorker, { Project } from "./notifyNFTSalesWorker";
import { ConfirmedSignatureInfo, Connection } from "@solana/web3.js";
import solanartSaleTx from "lib/marketplaces/__fixtures__/solanartSaleTx";

describe("notifyNFTSalesWorker", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe("execute", () => {
    const notifier = {
      notify: jest.fn(),
    };

    const conn = new Connection("https://test/");
    jest
      .spyOn(conn, "getConfirmedSignaturesForAddress2")
      .mockImplementation(async () => {
        return [
          {
            signature: "33CJriD17bUScYW7eKFjM6BPfkFWPerHfdpvtw3a8JdN",
            slot: 1,
          } as ConfirmedSignatureInfo,
          {
            signature: "33CJriD17bUScYW7eKFjM6BPfkFWPerHfdpvtw3a8JdN",
            slot: 1,
          } as ConfirmedSignatureInfo,
        ];
      });
    jest
      .spyOn(conn, "getParsedConfirmedTransaction")
      .mockImplementation(async () => {
        return {
          ...solanartSaleTx,
          blockTime: Date.now() + 1000000,
        };
      });

    test("on solanart tx", async () => {
      const project: Project = {
        mintAddress: "A7p8451ktDCHq5yYaHczeLMYsjRsAkzc3hCXcSrwYHU7",
        discordChannelId: "",
      };

      const worker = newWorker(notifier, conn, project);

      await worker.execute();
      await worker.execute();

      expect(notifier.notify.mock.calls.length).toEqual(1);
      const expectedArgs = notifier.notify.mock.calls[0];
      expect(expectedArgs[0]).toEqual(NotificationType.Sale);
      expect(expectedArgs[1].buyer).toEqual('93ccg27u1tHK1FzqoyRtaUVh3kRwbvYNJcz4NbWWSt1P');
    });

    test("sale tx signed by the same mint address ", async () => {
      const project: Project = {
        mintAddress: "33CJriD17bUScYW7eKFjM6BPfkFWPerHfdpvtw3a8JdN",
        discordChannelId: "",
      };

      const worker = newWorker(notifier, conn, project);

      await worker.execute();

      expect(notifier.notify.mock.calls.length).toEqual(1);
      const expectedArgs = notifier.notify.mock.calls[0];
      expect(expectedArgs[0]).toEqual(NotificationType.Sale);
      expect(expectedArgs[1].buyer).toEqual('93ccg27u1tHK1FzqoyRtaUVh3kRwbvYNJcz4NbWWSt1P');
    });
  });
});

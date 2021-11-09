jest.mock("lib/discord/notifyDiscordSale", () => {
  return jest.fn();
});
import notifyDiscordSale from "lib/discord/notifyDiscordSale";

jest.mock("lib/solana/NFTData", () => {
  return {
    fetchNFTData: () => {
      return {};
    },
  };
});

import newWorker, { Project } from "./notifyNFTSalesWorker";
import { newConnection } from "lib/solana";
import Discord, { TextChannel } from "discord.js";
import { ConfirmedSignatureInfo, Connection } from "@solana/web3.js";
import solanartSaleTx from "lib/marketplaces/__fixtures__/solanartSaleTx";

describe("notifyNFTSalesWorker", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe("execute", () => {
    const discordClient = new Discord.Client({ intents: [] });
    jest.spyOn(discordClient, "isReady").mockImplementation(() => true);
    jest.spyOn(discordClient.channels, "fetch").mockImplementation(async () => {
      return { send() {} } as unknown as TextChannel;
    });

    const conn = new Connection("https://test/");
    jest
      .spyOn(conn, "getConfirmedSignaturesForAddress2")
      .mockImplementation(async () => {
        return [
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

      const worker = newWorker(discordClient, conn, project);

      await worker.execute();

      expect(notifyDiscordSale.mock.calls.length).toEqual(1);
    });

    test("sale tx signed by the same mint address ", async () => {
      const project: Project = {
        mintAddress: "33CJriD17bUScYW7eKFjM6BPfkFWPerHfdpvtw3a8JdN",
        discordChannelId: "",
      };

      const worker = newWorker(discordClient, conn, project);

      await worker.execute();

      expect(notifyDiscordSale.mock.calls.length).toEqual(1);
    });
  });
});

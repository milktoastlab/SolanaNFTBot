import Discord, { TextChannel } from "discord.js";
import { Worker } from "./types";
import { Connection } from "@solana/web3.js";
import { fetchWeb3Transactions } from "lib/solana/connection";
import { parseNFTSale } from "lib/marketplaces";
import { fetchNFTData } from "lib/solana/NFTData";
import notifyDiscordSale from "lib/discord/notifyDiscordSale";

interface Project {
  mintAddress: string;
  discordChannelId: string;
}

export default function newWorker(
  discordClient: Discord.Client,
  web3Conn: Connection,
  project: Project
): Worker {
  // track the time so we only notify new transactions
  let notifyAfter = new Date(Date.now() - 1000 * 60 * 60);

  return {
    async execute() {
      if (!discordClient.isReady()) {
        return;
      }

      const channel = (await discordClient.channels.fetch(
        project.discordChannelId
      )) as TextChannel;
      if (!channel) {
        console.warn("Can't see channel");
        return;
      }
      if (!channel.send) {
        console.warn("Channel must be a TextChannel");
        return;
      }

      let lastSoldAt: Date;

      await fetchWeb3Transactions(web3Conn, project.mintAddress, {
        limit: 50,
        async onTransaction(tx) {
          const nftSale = parseNFTSale(tx);
          if (!nftSale) {
            return;
          }
          if (nftSale.soldAt <= notifyAfter) {
            // ignore transactions before the last notify or last online time
            return false;
          }
          if (!lastSoldAt) {
            lastSoldAt = nftSale.soldAt;
          }
          if (lastSoldAt < nftSale.soldAt) {
            lastSoldAt = nftSale.soldAt;
          }

          const nftData = await fetchNFTData(web3Conn, nftSale.token);
          if (!nftData) {
            return;
          }

          nftSale.nftData = nftData;

          await notifyDiscordSale(discordClient, channel, nftSale);

          // only notify one
          return false;
        },
      });

      // @ts-ignore
      if (lastSoldAt) {
        notifyAfter = lastSoldAt;
      }
    },
  };
}

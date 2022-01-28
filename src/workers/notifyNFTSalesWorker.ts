import Discord, { TextChannel } from "discord.js";
import TwitterAPI from "twitter-api-v2";
import queue from "queue";
import { Worker } from "./types";
import { Connection, ParsedConfirmedTransaction } from "@solana/web3.js";
import { fetchWeb3Transactions } from "lib/solana/connection";
import { parseNFTSale } from "lib/marketplaces";
import { fetchNFTData } from "lib/solana/NFTData";
import notifyDiscordSale from "lib/discord/notifyDiscordSale";
import { fetchDiscordChannel } from "../lib/discord";
import notifyTwitter from "lib/twitter/notifyTwitter";

const twitterNotifQueue = queue({
  concurrency: 1,
  autostart: true
});

export interface Project {
  mintAddress: string;
  discordChannelId: string;
}

function getSignatureFromTx(
  tx?: ParsedConfirmedTransaction
): string | undefined {
  if (tx) {
    return tx.transaction.signatures[0];
  }
  return undefined;
}

export default function newWorker(
  discordClient: Discord.Client,
  twitterClient: TwitterAPI | null,
  web3Conn: Connection,
  project: Project
): Worker {
  const timestamp = Date.now();
  let notifyAfter = new Date(timestamp);

  /**
   * This var keeps track of the latest tx so we can optimize the rpc call
   */
  let latestParsedTx: ParsedConfirmedTransaction | undefined;

  return {
    async execute() {
      const channel = await getDiscordChannel(discordClient, project.discordChannelId);
      if (!twitterClient && !channel) {
        return;
      }
      await fetchWeb3Transactions(web3Conn, project.mintAddress, {
        limit: 50,
        until: getSignatureFromTx(latestParsedTx),
        async onTransaction(tx) {
          latestParsedTx = tx;

          const txCreatedAt = new Date((tx.blockTime || 0) * 1000);
          if (notifyAfter > txCreatedAt) {
            return;
          }

          const nftSale = await parseNFTSale(web3Conn, tx);
          if (!nftSale) {
            return;
          }
          // Don't notify purchases by the project's own account
          if (nftSale.buyer === project.mintAddress) {
            return;
          }
          if (channel) {
            await notifyDiscordSale(discordClient, channel, nftSale)
              .catch(err => catchError(err, "Discord"));
          }
          if (twitterClient) {
            const cb = () => notifyTwitter(twitterClient, nftSale)
            .catch(err => catchError(err, "Twitter"));
            twitterNotifQueue.push(cb);
          }

          notifyAfter = nftSale.soldAt;
        },
      });
    },
  };
}

function catchError(err: Error, platform: string) {
  console.error(`Error occurred when notifying ${platform}`, err);
}

async function getDiscordChannel(discordClient: Discord.Client, discordChannelId: string) {
  if (!discordClient.isReady()) {
    return null;
  }
  return fetchDiscordChannel(
    discordClient,
    discordChannelId
  );
}

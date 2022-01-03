import Discord, { TextChannel } from "discord.js";
import { Worker } from "./types";
import { Connection, ParsedConfirmedTransaction } from "@solana/web3.js";
import { fetchWeb3Transactions } from "lib/solana/connection";
import { parseNFTSale } from "lib/marketplaces";
import { fetchNFTData } from "lib/solana/NFTData";
import notifyDiscordSale from "lib/discord/notifyDiscordSale";
import { fetchDiscordChannel } from "../lib/discord";

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
      if (!discordClient.isReady()) {
        return;
      }

      const channel = await fetchDiscordChannel(
        discordClient,
        project.discordChannelId
      );
      if (!channel) {
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

          const nftSale = parseNFTSale(tx);
          if (!nftSale) {
            return;
          }
          // Don't notify purchases by the project's own account
          if (nftSale.buyer === project.mintAddress) {
            return;
          }

          const nftData = await fetchNFTData(web3Conn, nftSale.token);
          if (!nftData) {
            return;
          }

          nftSale.nftData = nftData;

          await notifyDiscordSale(discordClient, channel, nftSale);

          notifyAfter = nftSale.soldAt;
        },
      });
    },
  };
}

import Discord from "discord.js";
import { Worker } from "./types";
import notifyNFTSalesWorker from "./notifyNFTSalesWorker";
import { Connection } from "@solana/web3.js";

const defaultInterval = 1000 * 60; // 1 minutes

export default function initWorkers(
  discordClient: Discord.Client,
  web3Conn: Connection,
  interval: number = defaultInterval
) {
  if (!process.env.MINT_ADDRESS) {
    console.log("MINT_ADDRESS env not set");
    return;
  }
  if (!process.env.DISCORD_CHANNEL_ID) {
    console.log("DISCORD_CHANNEL_ID env not set");
    return;
  }

  const workers: Worker[] = [
    notifyNFTSalesWorker(discordClient, web3Conn, {
      mintAddress: process.env.MINT_ADDRESS,
      discordChannelId: process.env.DISCORD_CHANNEL_ID,
    }),
    // TODO
    // notifyOffers,
    // notifyAuctionBids,
  ];

  console.log("starting workers...");

  const runWorkers = () => {
    try {
      workers.forEach((w) => {
        w.execute();
      });
    } catch (e) {
      console.warn(e);
    }
  };

  runWorkers();
  setInterval(runWorkers, interval);
}

import Discord from "discord.js";
import { Worker } from "./types";
import notifyNFTSalesWorker from "./notifyNFTSalesWorker";
import { Connection } from "@solana/web3.js";
import { MutableConfig } from "../config";

const defaultInterval = 1000 * 60; // 1 minutes

export default function initWorkers(
  discordClient: Discord.Client,
  web3Conn: Connection,
  config: MutableConfig,
  interval: number = defaultInterval
) {
  const workers: Worker[] = config.subscriptions.map((s) => {
    return notifyNFTSalesWorker(discordClient, web3Conn, {
      discordChannelId: s.discordChannelId,
      mintAddress: s.mintAddress,
    });
  });

  console.log(`starting ${workers.length} worker(s)...`);

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

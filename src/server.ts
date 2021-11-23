import express, { Request, Response } from "express";
import { initClient as initDiscordClient } from "lib/discord";
import initWorkers from "workers/initWorkers";
import { newConnection } from "lib/solana/connection";
import dotenv from "dotenv";
import { getStatus } from "lib/discord/notifyDiscordSale";
import { loadConfig } from "config";
import { Worker } from "workers/types";
import notifyNFTSalesWorker from "workers/notifyNFTSalesWorker";

const port = process.env.PORT || 4000;

(async () => {
  try {
    const result = dotenv.config();
    if (result.error) {
      throw result.error;
    }
    const config = loadConfig();

    const server = express();
    server.get("/", (req, res) => {
      const { totalNotified, lastNotified } = getStatus();
      res.send(`
      ${config.subscriptions.map(
        (s) =>
          `Watching the address ${s.mintAddress} at discord channel #${s.discordChannelId} for NFT sales.<br/>`
      )}
      Total notifications sent: ${totalNotified}<br/>
      ${
        lastNotified
          ? `Last notified at: ${lastNotified.toISOString()}<br/>`
          : ""
      }
      ${`Current UTC time: ${new Date().toISOString()}`}
      `);
    });

    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(
        `> Ready on http://localhost:${port} - env ${process.env.NODE_ENV}`
      );
    });

    const discordClient = await initDiscordClient();
    const web3Conn = newConnection();

    const workers: Worker[] = config.subscriptions.map((s) => {
      return notifyNFTSalesWorker(discordClient, web3Conn, {
        discordChannelId: s.discordChannelId,
        mintAddress: s.mintAddress,
      });
    });

    initWorkers(workers);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();

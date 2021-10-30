import express, { Request, Response } from "express";
import { initClient as initDiscordClient } from "lib/discord";
import initWorkers from "./workers";
import { newConnection } from "lib/solana/connection";
import dotenv from "dotenv";
import { getStatus } from "lib/discord/notifyDiscordSale";
import { loadConfig } from "./config";

const port = process.env.PORT || 3000;

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
      Total notifications sent: ${totalNotified}<br/>
      ${config.subscriptions.map(
        (s) =>
          `Watching the address ${s.mintAddress} at discord channel #${s.discordChannelId} for NFT sales.<br/>`
      )}
      ${lastNotified ? `Last notified at: ${lastNotified.toISOString()}` : ""}
      `);
    });

    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);
    });

    const discordClient = await initDiscordClient();
    const web3Conn = newConnection();
    initWorkers(discordClient, web3Conn, config);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();

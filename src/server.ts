import express, { Request, Response } from "express";
import {
  fetchDiscordChannel,
  initClient as initDiscordClient,
} from "lib/discord";
import initWorkers from "workers/initWorkers";
import { newConnection } from "lib/solana/connection";
import dotenv from "dotenv";
import notifyDiscordSale, { getStatus } from "lib/discord/notifyDiscordSale";
import { loadConfig } from "config";
import { Worker } from "workers/types";
import notifyNFTSalesWorker from "workers/notifyNFTSalesWorker";
import { parseNFTSale } from "./lib/marketplaces";
import { ParsedConfirmedTransaction } from "@solana/web3.js";

const port = process.env.PORT || 4000;

(async () => {
  try {
    const result = dotenv.config();
    if (result.error) {
      throw result.error;
    }
    const config = loadConfig();

    const web3Conn = newConnection();
    const discordClient = await initDiscordClient();

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

    server.get("/test-sale-tx", async (req, res) => {
      const signature = (req.query["signature"] as string) || "";
      if (!signature) {
        res.send(`no signature in query param`);
        return;
      }

      let tx: ParsedConfirmedTransaction | null = null;
      try {
        tx = await web3Conn.getParsedConfirmedTransaction(signature);
      } catch (e) {
        console.log(e);
        res.send(`Get transaction failed, check logs for error.`);
        return;
      }
      if (!tx) {
        res.send(`No transaction found for ${signature}`);
        return;
      }
      const nftSale = parseNFTSale(tx);
      if (!nftSale) {
        res.send(
          `No NFT Sale detected for tx: ${signature}\n${JSON.stringify(tx)}`
        );
        return;
      }

      const channelId = (req.query["channelId"] as string) || "";

      if (channelId) {
        const channel = await fetchDiscordChannel(discordClient, channelId);
        if (channel) {
          await notifyDiscordSale(discordClient, channel, nftSale);
        }
      }

      res.send(`NFT Sales parsed: \n${JSON.stringify(nftSale)}`);
    });

    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(
        `> Ready on http://localhost:${port} - env ${process.env.NODE_ENV}`
      );
    });

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

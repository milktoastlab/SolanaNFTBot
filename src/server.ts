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
import { parseNFTSale } from "lib/marketplaces";
import { ParsedConfirmedTransaction } from "@solana/web3.js";
import notifyTwitter from "lib/twitter/notifyTwitter";
import logger from "lib/logger";
import { newNotifierFactory } from "lib/notifier";
import initTwitterClient from "lib/twitter";
import queue from "queue";

(async () => {
  try {
    const result = dotenv.config();
    if (result.error) {
      throw result.error;
    }
    const config = loadConfig();
    const port = process.env.PORT || 4000;

    const web3Conn = newConnection();

    const nQueue = queue({
      concurrency: config.queueConcurrency,
      autostart: true,
    });

    const notifierFactory = await newNotifierFactory(config, nQueue);

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
        logger.log(e);
        res.send(`Get transaction failed, check logs for error.`);
        return;
      }
      if (!tx) {
        res.send(`No transaction found for ${signature}`);
        return;
      }
      const nftSale = await parseNFTSale(web3Conn, tx);
      if (!nftSale) {
        res.send(
          `No NFT Sale detected for tx: ${signature}\n${JSON.stringify(tx)}`
        );
        return;
      }
      if (config.discordBotToken) {
        const discordClient = await initDiscordClient(config.discordBotToken);
        if (discordClient) {
          const channelId = (req.query["channelId"] as string) || "";
          await notifyDiscordSale(discordClient, channelId, nftSale);
        }
      }

      const twitterClient = await initTwitterClient(config.twitter);
      const sendTweet = (req.query["tweet"] as string) || "";
      if (sendTweet && twitterClient) {
        await notifyTwitter(twitterClient, nftSale).catch((err) => {
          logger.error("Error occurred when notifying twitter", err);
        });
      }

      res.send(`NFT Sales parsed: \n${JSON.stringify(nftSale)}`);
    });

    server.listen(port, (err?: any) => {
      if (err) throw err;
      logger.log(`Ready on http://localhost:${port}`);
    });

    const workers: Worker[] = config.subscriptions.map((s) => {
      const project = {
        discordChannelId: s.discordChannelId,
        mintAddress: s.mintAddress,
      };
      const notifier = notifierFactory.create(project);
      return notifyNFTSalesWorker(notifier, web3Conn, project);
    });

    const _ = initWorkers(workers);
  } catch (e) {
    logger.error(e);
    process.exit(1);
  }
})();

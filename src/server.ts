import express, { Request, Response } from "express";
import { initClient as initDiscordClient } from "lib/discord";
import initWorkers from "./workers";
import { newConnection } from "lib/solana/connection";
import dotenv from "dotenv";

const port = process.env.PORT || 3000;

(async () => {
  try {
    const result = dotenv.config();
    if (result.error) {
      throw result.error;
    }

    const server = express();
    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);
    });

    const discordClient = await initDiscordClient();
    const web3Conn = newConnection();

    initWorkers(discordClient, web3Conn);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();

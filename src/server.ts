import { Worker } from "@/workers/types";
import notifyNFTSalesWorker from '@/workers/notifyNFTSalesWorker';
import {
    initClient as initDiscordClient,
  } from '@/lib/discord';
import { loadConfig } from "@/config/config";
import initWorkers from "@/workers/initWorkers";

(async () => {
  console.log("Trying to run")  
  try {
  
      const config = loadConfig();

      const discordClient = await initDiscordClient();
      console.log("discord client created, now looking at workers");  

      const workers: Worker[] = config.subscriptions.map((s) => {
          return notifyNFTSalesWorker(discordClient, {
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
  
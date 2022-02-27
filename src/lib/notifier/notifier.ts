import { MutableConfig } from "lib/../config";
import { initClient as initDiscordClient } from "lib/discord";
import initTwitterClient from "lib/twitter";
import notifyDiscordSale from "lib/discord/notifyDiscordSale";
import notifyTwitter from "lib/twitter/notifyTwitter";
import { Project } from "workers/notifyNFTSalesWorker";
import logger from "lib/logger";
import queue from "queue";

export enum NotificationType {
  Sale,
}

export interface Notifier {
  notify: (nType: NotificationType, data: any) => Promise<void>;
}

export enum Platform {
  Twitter = "Twitter",
  Discord = "Discord",
  Webhook = "Webhook",
}

function queueNotification(
  nQueue: queue,
  platform: Platform,
  callback: () => Promise<void>
) {
  nQueue.push(() => {
    try {
      return callback();
    } catch (err) {
      logNotificationError(err, platform);
    }
  });
}

export async function newNotifierFactory(config: MutableConfig) {
  const nQueue = queue({
    concurrency: 2,
    autostart: true,
  });

  const discordClient = await initDiscordClient(config.discordBotToken);
  const twitterClient = await initTwitterClient(config.twitter);

  return {
    create(project: Project): Notifier {
      async function notifySale(data: any) {
        if (discordClient) {
          queueNotification(nQueue, Platform.Discord, async () => {
            await notifyDiscordSale(
              discordClient,
              project.discordChannelId,
              data
            );
          });
        }

        if (twitterClient) {
          queueNotification(nQueue, Platform.Twitter, async () => {
            await notifyTwitter(twitterClient, data);
          });
        }
      }

      return {
        async notify(nType: NotificationType, data: any) {
          if (nType === NotificationType.Sale) {
            await notifySale(data);
            return;
          }
        },
      };
    },
  };
}

function logNotificationError(err: unknown, platform: string) {
  logger.error(`Error occurred when notifying ${platform}`, err);
}

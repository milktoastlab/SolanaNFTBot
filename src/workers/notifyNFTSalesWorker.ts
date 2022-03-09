import { Worker } from "./types";
import { Connection, ParsedConfirmedTransaction } from "@solana/web3.js";
import { fetchWeb3Transactions } from "lib/solana/connection";
import { parseNFTSale } from "lib/marketplaces";
import logger from "lib/logger";
import { NotificationType, Notifier } from "lib/notifier";

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

function newNotificationsTracker(limit: number = 50) {
  let notifiedTxs: string[] = [];

  return {
    alreadyNotified(tx: string) {
      return notifiedTxs.includes(tx);
    },
    trackNotifiedTx(tx: string) {
      notifiedTxs = [tx, ...notifiedTxs];
      if (notifiedTxs.length > limit) {
        notifiedTxs.pop();
      }
    },
  };
}

export default function newWorker(
  notifier: Notifier,
  web3Conn: Connection,
  project: Project
): Worker {
  const timestamp = Date.now();
  let notifyAfter = new Date(timestamp);

  /**
   * This var keeps track of the latest tx so we can optimize the rpc call
   */
  let latestParsedTx: ParsedConfirmedTransaction | undefined;

  /**
   * Keep track of the latest notifications, so we don't notify them again
   */
  const latestNotifications = newNotificationsTracker();

  return {
    async execute() {
      await fetchWeb3Transactions(web3Conn, project.mintAddress, {
        limit: 50,
        until: getSignatureFromTx(latestParsedTx),
        async onTransaction(tx) {
          latestParsedTx = tx;

          const txCreatedAt = new Date((tx.blockTime || 0) * 1000);
          if (notifyAfter > txCreatedAt) {
            return;
          }

          const nftSale = await parseNFTSale(web3Conn, tx);
          if (!nftSale) {
            return;
          }

          // Don't notify if transaction was previously notified.
          if (latestNotifications.alreadyNotified(nftSale.transaction)) {
            logger.warn(`Duplicate tx ignored: ${nftSale.transaction}`);
            return;
          }

          // Don't notify purchases by the project's own account
          if (nftSale.buyer === project.mintAddress) {
            return;
          }

          await notifier.notify(NotificationType.Sale, nftSale);

          latestNotifications.trackNotifiedTx(nftSale.transaction);
          notifyAfter = nftSale.soldAt;
        },
      });
    },
  };
}

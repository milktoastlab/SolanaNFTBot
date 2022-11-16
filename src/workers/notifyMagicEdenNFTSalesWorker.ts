import axios from "axios";
import { MagicEdenConfig } from "config";
import { NFTSale, SaleMethod } from "lib/marketplaces";
import MagicEden from "lib/marketplaces/magicEden";
import { fetchNFTData } from "lib/solana/NFTData";
import { Worker } from "./types";
import { Connection } from "@solana/web3.js";
import logger from "lib/logger";
import { NotificationType, Notifier } from "lib/notifier";

export interface CollectionActivity {
  signature: string;
  type: string;
  source: string;
  tokenMint: string;
  collection: string;
  slot: number;
  blockTime: number;
  buyer: string;
  buyerReferral: string;
  seller?: any;
  sellerReferral: string;
  price: number;
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
  config: MagicEdenConfig
): Worker {
  const timestamp = Date.now();
  let notifyAfter = new Date(timestamp);

  /**
   * Keep track of the latest notifications, so we don't notify them again
   */
  const latestNotifications = newNotificationsTracker();

  return {
    async execute() {
      let activities: CollectionActivity[] = [];
      try {
        // Reference: https://api.magiceden.dev/#95fed531-fd1f-4cbb-8137-30e0f2294cd7
        const res = await axios.get(
          `${config.url}/collections/${config.collection}/activities?offset=0&limit=100`
        );
        activities = res.data as CollectionActivity[];
      } catch (e) {
        logger.error(e);
        return;
      }

      const sortByEarliest = activities.sort(
        (a: CollectionActivity, b: CollectionActivity) => {
          return a.blockTime - b.blockTime;
        }
      );

      for (let i = 0; i < sortByEarliest.length; i++) {
        const activity = sortByEarliest[i];
        if (activity.type !== "buyNow") {
          continue;
        }

        const nftData = await fetchNFTData(web3Conn, activity.tokenMint);
        if (!nftData) {
          return;
        }
        const nftSale: NFTSale = {
          transaction: activity.signature,
          soldAt: new Date((activity.blockTime || 0) * 1000),
          seller: activity.seller,
          buyer: activity.buyer,
          token: activity.tokenMint,
          method: SaleMethod.Direct,
          marketplace: MagicEden,
          transfers: [],
          nftData,
          getPriceInLamport() {
            return activity.price / 1000000;
          },
          getPriceInSOL() {
            return activity.price;
          },
        };

        if (notifyAfter > nftSale.soldAt) {
          return;
        }

        // Don't notify if transaction was previously notified.
        if (latestNotifications.alreadyNotified(nftSale.transaction)) {
          logger.warn(`Duplicate tx ignored: ${nftSale.transaction}`);
          return;
        }

        await notifier.notify(NotificationType.Sale, nftSale);

        latestNotifications.trackNotifiedTx(nftSale.transaction);
        notifyAfter = nftSale.soldAt;
      }
    },
  };
}

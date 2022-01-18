export interface Subscription {
  discordChannelId: string;
  type: "NFTSale";
  mintAddress: string;
}

import {DEFAULTS} from '@/globals'
export interface Config {
  subscriptions: Subscription[];
}

export interface MutableConfig extends Config {
  setSubscriptions(subscriptions: Subscription[]): Promise<void>;
  addSubscription(subscription: Subscription): Promise<void>;
}

const config: Config = {
  subscriptions: [],
};

export default config;

export function loadConfig(): MutableConfig {
  /**
   * Load config from permanent storage
   */

  config.subscriptions.push({
    type: "NFTSale",
    discordChannelId: DEFAULTS.SUBSCRIPTION_DISCORD_CHANNEL_ID,
    mintAddress: DEFAULTS.AUTHORITY
  });

  return {
    ...config,
    async setSubscriptions(subscriptions: Subscription[]): Promise<void> {
      this.subscriptions = subscriptions;
    },
    async addSubscription(subscription: Subscription): Promise<void> {
      this.subscriptions.push(subscription);
    },
  };
}
export interface Subscription {
  discordChannelId: string;
  type: "NFTSale";
  mintAddress: string;
}
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

  if (
    process.env.SUBSCRIPTION_MINT_ADDRESS &&
    process.env.SUBSCRIPTION_DISCORD_CHANNEL_ID
  ) {
    config.subscriptions.push({
      type: "NFTSale",
      discordChannelId: process.env.SUBSCRIPTION_DISCORD_CHANNEL_ID,
      mintAddress: process.env.SUBSCRIPTION_MINT_ADDRESS,
    });
  }

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

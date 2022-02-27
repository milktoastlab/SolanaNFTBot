export interface Subscription {
  discordChannelId: string;
  type: "NFTSale";
  mintAddress: string;
}

interface TwitterConfig {
  appKey: string;
  appSecret: string;
  accessToken: string;
  accessSecret: string;
}

export interface Config {
  twitter: TwitterConfig;
  discordBotToken: string;
  subscriptions: Subscription[];
}

export interface MutableConfig extends Config {
  setSubscriptions(subscriptions: Subscription[]): Promise<void>;
  addSubscription(subscription: Subscription): Promise<void>;
}

export function loadConfig(): MutableConfig {
  const config: Config = {
    twitter: {
      appKey: process.env.TWITTER_API_KEY || "",
      appSecret: process.env.TWITTER_API_KEY_SECRET || "",
      accessToken: process.env.TWITTER_ACCESS_TOKEN || "",
      accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET || "",
    },
    discordBotToken: process.env.DISCORD_BOT_TOKEN || "",
    subscriptions: [],
  };

  /**
   * Load config from permanent storage
   */

  if (
    process.env.SUBSCRIPTION_MINT_ADDRESS &&
    process.env.SUBSCRIPTION_DISCORD_CHANNEL_ID
  ) {
    config.subscriptions.push({
      type: "NFTSale",
      discordChannelId: process.env.SUBSCRIPTION_DISCORD_CHANNEL_ID || "",
      mintAddress: process.env.SUBSCRIPTION_MINT_ADDRESS || "",
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

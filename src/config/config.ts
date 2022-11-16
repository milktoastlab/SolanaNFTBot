import logger from "lib/logger";

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

export interface MagicEdenConfig {
  url: string;
  collection: string;
  discordChannelId: string;
}

export interface Config {
  twitter: TwitterConfig;
  discordBotToken: string;
  queueConcurrency: number;
  subscriptions: Subscription[];
  magicEdenConfig: MagicEdenConfig;
}

export type Env = { [key: string]: string };

export interface MutableConfig extends Config {
  setSubscriptions(subscriptions: Subscription[]): Promise<void>;

  addSubscription(subscription: Subscription): Promise<void>;
}

function loadSubscriptions(env: Env): Subscription[] {
  if (!env.SUBSCRIPTION_MINT_ADDRESS || !env.SUBSCRIPTION_DISCORD_CHANNEL_ID) {
    return [];
  }
  const addresses = env.SUBSCRIPTION_MINT_ADDRESS.split(",");
  const discordChannels = env.SUBSCRIPTION_DISCORD_CHANNEL_ID.split(",");
  if (
    discordChannels.length != addresses.length &&
    discordChannels.length !== 1
  ) {
    logger.error(
      `Invalid number of discord channel ids: ${discordChannels.length}`
    );
    return [];
  }

  const subscriptions: Subscription[] = [];

  addresses.forEach((address, idx) => {
    if (!address) {
      return;
    }
    const channel = discordChannels[idx] || discordChannels[0];
    if (!channel) {
      return;
    }

    subscriptions.push({
      type: "NFTSale",
      discordChannelId: channel,
      mintAddress: address,
    });
  });

  return subscriptions;
}

export function loadConfig(env: Env): MutableConfig {
  const config: Config = {
    twitter: {
      appKey: env.TWITTER_API_KEY || "",
      appSecret: env.TWITTER_API_KEY_SECRET || "",
      accessToken: env.TWITTER_ACCESS_TOKEN || "",
      accessSecret: env.TWITTER_ACCESS_TOKEN_SECRET || "",
    },
    discordBotToken: env.DISCORD_BOT_TOKEN || "",
    queueConcurrency: parseInt(env.QUEUE_CONCURRENCY || "2", 10),
    subscriptions: loadSubscriptions(env),
    magicEdenConfig: {
      url: env.MAGIC_EDEN_URL || "",
      collection: env.MAGIC_EDEN_COLLECTION || "",
      discordChannelId: env.MAGIC_EDEN_DISCORD_CHANNEL_ID || "",
    },
  };

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

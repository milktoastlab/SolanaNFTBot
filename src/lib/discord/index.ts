import Discord, { Intents, TextChannel } from "discord.js";
import logger from "lib/logger";
const myIntents = new Intents();
myIntents.add(Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILD_MESSAGES);

let client: Discord.Client;

export async function initClient(
  token: string
): Promise<Discord.Client> {
  if (!client) {
    client = new Discord.Client({
      intents: myIntents,
    });
  }
  if (client.isReady()) {
    return client;
  }
  return new Promise<Discord.Client>((resolve) => {
    client.on("ready", () => {
      logger.log(`Logged in as ${client.user?.tag}!`);
      resolve(client);
    });
    client.login(token);
  });
}

export async function fetchDiscordChannel(
  client: Discord.Client,
  channelId: string
): Promise<TextChannel | undefined> {
  if (!client.isReady()) {
    return;
  }

  const channel = (await client.channels.fetch(channelId)) as TextChannel;
  if (!channel) {
    logger.warn("Can't see channel");
    return;
  }
  if (!channel.send) {
    logger.warn("Channel must be a TextChannel");
    return;
  }
  return channel;
}

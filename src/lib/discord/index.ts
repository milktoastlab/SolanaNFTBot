import Discord, { Intents, TextChannel } from "discord.js";
const myIntents = new Intents();
myIntents.add(Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILD_MESSAGES);

let client: Discord.Client;

export async function initClient(): Promise<Discord.Client> {
  if (!client) {
    client = new Discord.Client({
      intents: myIntents,
    });
  }

  return new Promise((resolve) => {
    client.on("ready", () => {
      console.log(`Logged in as ${client.user?.tag}!`);
      resolve(client);
    });

    client.login(process.env.DISCORD_BOT_TOKEN);
  });
}

export async function fetchDiscordChannel(
  client: Discord.Client,
  channelId: string
): Promise<TextChannel | undefined> {
  const channel = (await client.channels.fetch(channelId)) as TextChannel;
  if (!channel) {
    console.warn("Can't see channel");
    return;
  }
  if (!channel.send) {
    console.warn("Channel must be a TextChannel");
    return;
  }
  return channel;
}

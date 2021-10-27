import Discord, { Intents } from "discord.js";
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

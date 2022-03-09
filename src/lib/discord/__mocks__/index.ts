import Discord, {TextChannel} from "discord.js";

export async function initClient(): Promise<Discord.Client> {
  const discordClient = new Discord.Client({ intents: [] });
  jest.spyOn(discordClient, "isReady").mockImplementation(() => true);
  jest.spyOn(discordClient.channels, "fetch").mockImplementation(async () => {
    return { send() {} } as unknown as TextChannel;
  });
  return discordClient;
};

export async function fetchDiscordChannel(
  client: Discord.Client,
  channelId: string
): Promise<TextChannel | undefined> {
  return {} as TextChannel;
}

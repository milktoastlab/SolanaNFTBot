import Discord, { MessageEmbed, TextChannel } from "discord.js";
import { NFTSale } from "lib/marketplaces";

export default async function notifyDiscordSale(
  client: Discord.Client,
  channel: TextChannel,
  nftSale: NFTSale
) {
  if (!client.isReady()) {
    return;
  }
  const description = `Sold for ${nftSale.getPriceInSOL()} SOL at Magic Eden`;
  const embedMsg = new MessageEmbed({
    color: "#0099ff",
    title: nftSale.nftData?.name,
    description,
    url: `https://magiceden.io/item-details/${nftSale.token}`,
    thumbnail: {
      url: nftSale.nftData?.image,
    },
  });
  await channel.send({
    embeds: [embedMsg],
  });
  console.log(
    `Notified discord #${channel.name}: ${nftSale.nftData?.name} - ${description}`
  );
}

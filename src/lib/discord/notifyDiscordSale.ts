import Discord, { MessageEmbed, TextChannel } from "discord.js";
import { NFTSale } from "lib/marketplaces";

const status: {
  totalNotified: number;
  lastNotified?: Date;
} = {
  totalNotified: 0,
};

export function getStatus() {
  return status;
}

export default async function notifyDiscordSale(
  client: Discord.Client,
  channel: TextChannel,
  nftSale: NFTSale
) {
  if (!client.isReady()) {
    return;
  }

  const { marketplace, nftData } = nftSale;
  const description = `Sold for ${nftSale.getPriceInSOL()} SOL at ${
    marketplace.name
  }`;
  const embedMsg = new MessageEmbed({
    color: "#0099ff",
    title: nftData?.name,
    description,
    url: marketplace.itemURL(nftSale.token),
    thumbnail: {
      url: nftData?.image,
    },
  });
  await channel.send({
    embeds: [embedMsg],
  });
  const logMsg = `Notified discord #${channel.name}: ${nftData?.name} - ${description}`;
  console.log(logMsg);

  status.lastNotified = new Date();
  status.totalNotified++;
}

import Discord, { MessageEmbed, TextChannel, MessageActionRow } from "discord.js";
import { NFTSale, SaleMethod } from "lib/marketplaces";

const status: {
  totalNotified: number;
  lastNotified?: Date;
} = {
  totalNotified: 0,
};

export function getStatus() {
  return status;
}

export function truncate(str: String){
  return str.substring(0, 6) + '...' + str.substring(str.length - 6);
};

export default async function notifyDiscordSale(
  client: Discord.Client,
  channel: TextChannel,
  nftSale: NFTSale,
  test?: boolean
) {
  if (!client.isReady()) {
    return;
  }
  const { marketplace, nftData } = nftSale;

  const description = `Sold ${
    nftSale.method === SaleMethod.Bid ? "via bidding " : ""
  }for ${nftSale.getPriceInSOL()} S◎L at ${marketplace.name}`;
  
  const price = `\`${nftSale.getPriceInSOL()} S◎L\` ${
    nftSale.method === SaleMethod.Bid ? "(via bidding) " : ""
  }`;

  // On Solanart Bid, no transaction given
  const seller = (nftSale.transfers.length > 0) ? truncate(nftSale.transfers[nftSale.transfers.length - 1]['to']) : 'null';

  const actionRowMsg = new MessageActionRow({
    type: 1,
    components: [
      {
        style: 5,
        label: `View Transaction`,
        url: `https://solscan.io/tx/${nftSale.transaction}`,
        disabled: false,
        type: 2
      },
      {
        style: 5,
        label: `View Token`,
        url: `https://solscan.io/token/${nftSale.token}`,
        disabled: false,
        type: 2
      },
    ],
  });

  const embedMsg = new MessageEmbed({
    color: 0x028b3c,
    title: nftData?.name,
    url: marketplace.itemURL(nftSale.token),
    timestamp: `${nftSale?.soldAt}`,
    fields: [
      {
        name: `Price`,
        value: price,
      },
      {
        name: `Buyer`,
        value: `\`${truncate(nftSale.buyer)}\``,
        inline: true
      },
      {
        name: `Seller`,
        value: `\`${seller}\``,
        inline: true
      }
    ],
    image: {
      url: `${nftData?.image}`,
      width: 1069,
      height: 1069
    },
    author: {
      name: marketplace.name,
      url: marketplace.itemURL(nftSale.token),
    },
    footer: {
      text: `Sold on ${marketplace.name}`,
      icon_url: marketplace.iconUrl,
      proxy_icon_url: marketplace.itemURL(nftSale.token),
    },
  });
  await channel.send({
    components: [actionRowMsg],
    embeds: [embedMsg],
  });
  const logMsg = `Notified discord #${channel.name}: ${nftData?.name} - ${description}`;
  console.log(logMsg);

  if (!test) {
    status.lastNotified = new Date();
    status.totalNotified++;
  }
}

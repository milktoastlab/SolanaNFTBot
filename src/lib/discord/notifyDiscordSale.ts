import Discord, {
  MessageActionRow,
  MessageEmbed,
  TextChannel,
} from "discord.js";
import { Marketplace, NFTSale, SaleMethod } from "lib/marketplaces";
import truncateForAddress from "lib/truncateForAddress";
import logger from "lib/logger";
import { fetchDiscordChannel } from "./index";

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
  channelId: string,
  nftSale: NFTSale,
  test?: boolean
) {
  const channel = await fetchDiscordChannel(client, channelId);
  if (!channel) {
    return;
  }

  const { marketplace, nftData } = nftSale;

  if (!nftData) {
    logger.log("missing nft Data for token: ", nftSale.token);
    return;
  }

  const method = `Sold${nftSale.method === SaleMethod.Bid ? " via bidding" : ""
    }`;

  const description = `${method} for ${nftSale.getPriceInSOL()} S◎L on ${marketplace.name
    }`;

  const actionRowMsg = new MessageActionRow({
    type: 1,
    components: [
      {
        style: 5,
        label: `View Transaction`,
        url: `https://solscan.io/tx/${nftSale.transaction}`,
        disabled: false,
        type: 2,
      },
      {
        style: 5,
        label: `View Token`,
        url: `https://solscan.io/token/${nftSale.token}`,
        disabled: false,
        type: 2,
      },
    ],
  });

  const embedMsg = new MessageEmbed({
    color: 0x0099ff,
    title: nftData.name,
    url: marketplace.itemURL(nftSale.token),
    timestamp: `${nftSale.soldAt}`,
    fields: [
      {
        name: "Price",
        value: `${nftSale.getPriceInSOL().toFixed(2)} S◎L ${nftSale.method === SaleMethod.Bid ? "(Via bidding)" : ""
          }`,
        inline: false,
      },
      {
        name: "Buyer",
        value: formatAddress(marketplace, nftSale.buyer),
        inline: true,
      },
      {
        name: "Seller",
        value: nftSale.seller
          ? formatAddress(marketplace, nftSale.seller)
          : "unknown",
        inline: true,
      },
    ],
    image: {
      url: encodeURI(nftData.image),
      width: 600,
      height: 600,
    },
    footer: {
      text: `Sold on ${marketplace.name}`,
      icon_url: marketplace.iconURL,
      proxy_icon_url: marketplace.itemURL(nftSale.token),
    },
  });

  const channelSend = await channel.send({
    components: [actionRowMsg],
    embeds: [embedMsg],
  });
  logger.log(channelSend)
  const logMsg = `Notified discord #${channel.name}: ${nftData.name} - ${description}`;
  logger.log(logMsg);

  if (!test) {
    status.lastNotified = new Date();
    status.totalNotified++;
  }
}

function formatAddress(marketplace: Marketplace, address: string): string {
  if (!address) {
    return "";
  }

  return `[${truncateForAddress(address)}](${marketplace.profileURL(address)})`;
}

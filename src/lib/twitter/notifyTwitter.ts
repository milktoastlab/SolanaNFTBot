import TwitterAPI from "twitter-api-v2";
import { NFTSale, SaleMethod } from "lib/marketplaces";
import axios from "axios";
import logger from "lib/logger";
export default async function notifyTwitter(
  twitterClient: TwitterAPI,
  nftSale: NFTSale
) {
  const nftName = nftSale.nftData?.name;
  const text = `${nftName} has just been sold ${nftSale.method === SaleMethod.Bid ? "via bidding " : ""
    }for ${nftSale.getPriceInSOL()} S◎L at ${nftSale.marketplace.name
    }! #SolanaNFTs #NFTSale`;

  const mediaArr: string[] = [];
  if (Boolean(nftSale.nftData?.image)) {
    const data = await getImageDataFromUrl(nftSale.nftData?.image as string);
    const media = await twitterClient.v1.uploadMedia(data, {
      type: await getDataType(data),
    });
    mediaArr.push(media);
  }
  const tweetResults = twitterClient.v1.tweet(text, {
    media_ids: mediaArr,
  });
  logger.log(tweetResults)
  return tweetResults;
}

async function getDataType(buffer: Buffer) {
  // reason why the import is here: https://github.com/sindresorhus/file-type/issues/525
  const { fromBuffer } = await import("file-type");
  const result = await fromBuffer(buffer);
  return result ? result.ext : undefined;
}

async function getImageDataFromUrl(url: string) {
  const img = await axios.get(url, { responseType: "arraybuffer" });
  return img.data as Buffer;
}

import TwitterAPI from 'twitter-api-v2';
import { NFTSale } from "lib/marketplaces";
import axios from 'axios';

export default async function notifyTwitter(twitterClient: TwitterAPI, nftSale: NFTSale) {
    const hasImage = Boolean(nftSale.nftData?.image);
    const data = hasImage ? await getImageDataFromUrl(nftSale.nftData?.image as string) : null;
    const nftName = nftSale.nftData?.name;
    const text = `${nftName} has just been sold for ${nftSale.getPriceInSOL()} S◎L at ${nftSale.marketplace.name}! #SolanaNFTs #NFTSale`
    const mediaArr: string[] = [];
    if (hasImage) {
        const media = await twitterClient.v1.uploadMedia(data as Buffer, { type: 'gif' });
        mediaArr.push(media);
    }
    return twitterClient.v1.tweet(text, {
        media_ids: mediaArr
    })
}

async function getImageDataFromUrl(url: string) {
    const img = await axios.get(url, {responseType: 'arraybuffer'});
    return img.data as Buffer
  }
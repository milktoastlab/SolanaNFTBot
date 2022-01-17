import TwitterAPI from 'twitter-api-v2';
import { NFTSale } from "lib/marketplaces";
import axios from 'axios';
import { getFromCache, insertIntoCache } from './mediaIdCache';

export default async function notifyTwitter(twitterClient: TwitterAPI, nftSale: NFTSale) {
    const nftName = nftSale.nftData?.name;
    const text = `${nftName} has just been sold for ${nftSale.getPriceInSOL()} S◎L at ${nftSale.marketplace.name}! #SolanaNFTs #NFTSale`
    const mediaArr: string[] = [];
    const imgIdFromCache = getFromCache(nftSale.token);
    if (imgIdFromCache) {
        mediaArr.push(imgIdFromCache);
    } else if (Boolean(nftSale.nftData?.image)) {
        const data = await getImageDataFromUrl(nftSale.nftData?.image as string);
        const media = await twitterClient.v1.uploadMedia(data, { type: getDataType(data), shared: true });
        insertIntoCache(nftSale.token, media);
        mediaArr.push(media);
    }
    return twitterClient.v1.tweet(text, {
        media_ids: mediaArr
    })
}

function getDataType(buffer: Buffer) {
    const magic = [
        ['jpg', 'ffd8ffe0'],
        ['png', '89504e47'],
        ['gif', '47494638'],
    ];
    const first = buffer.toString("hex", 0, 4)
    const arr = magic.find(([_, str]) => first === str);
    return arr && arr[0];
}

async function getImageDataFromUrl(url: string) {
    const img = await axios.get(url, {responseType: 'arraybuffer'});
    return img.data as Buffer
  }
import TwitterAPI from 'twitter-api-v2';
import { NFTSale, SaleMethod } from "lib/marketplaces";
import axios from 'axios';
import CoinGecko from 'coingecko-api';

export default async function notifyTwitter(twitterClient: TwitterAPI, nftSale: NFTSale) {
    const nftName = nftSale.nftData?.name;
    const buyer = truncate(nftSale.buyer);
    const solPrice = await getSolInUSD();
    const priceInUSD = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(nftSale.getPriceInSOL() * solPrice);
    const text = `${nftName} was just purchased on ${nftSale.marketplace.name} ${nftSale.method === SaleMethod.Bid ? "via bidding " : ""}for ${nftSale.getPriceInSOL()} S◎L!\n\n💸 Price: ${nftSale.getPriceInSOL()} S◎L\n\n💵 USD: ${priceInUSD}\n\n🤝 Buyer: ${buyer}\n\n🏬 Market: ${nftSale.marketplace.name}\n\n🕵🏻‍♂️ Proof: https://solscan.io/tx/${nftSale.transaction}\n\n🪙 Token: https://solscan.io/token/${nftSale.token}#trades`
    const mediaArr: string[] = [];
    const taggedUsers: string[] = ["1443234316264345607", `${nftSale.nftData?.symbol === 'DAPE' ? "1408282519095582722" : "1435357525247922180"}`];

    if (Boolean(nftSale.nftData?.image)) {
        const data = await getImageDataFromUrl(nftSale.nftData?.image as string);
        const media = await twitterClient.v1.uploadMedia(data, { type: 'png' });
        mediaArr.push(media);
    }
    return twitterClient.v1.tweet(text, {
        media_ids: mediaArr,
    })
    // return twitterClient.v2.tweet(text, {
    //     media: {
    //         media_ids: mediaArr,
    //         tagged_user_ids: taggedUsers,
    //     }
    // })
}

async function getImageDataFromUrl(url: string) {
    const img = await axios.get(url, {responseType: 'arraybuffer'});
    return img.data as Buffer
}

async function getSolInUSD() {
    const CoinGeckoClient = new CoinGecko();

    return await CoinGeckoClient.simple.price({
        ids: ['solana'],
        vs_currencies: ['usd'],
    }).then(res => res.data.solana.usd);
}

export function truncate(str: String): string {
    return str.substring(0, 6) + '...' + str.substring(str.length - 6);
}

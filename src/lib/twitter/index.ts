import TwitterApi, {TwitterApiTokens} from 'twitter-api-v2';

async function initTwitterClient() {
    if (!process.env.TWITTER_API_KEY ||
        !process.env.TWITTER_API_KEY_SECRET ||
        !process.env.TWITTER_ACCESS_TOKEN ||
        !process.env.TWITTER_ACCESS_TOKEN_SECRET
    ) {
        return null;
    }
    return new TwitterApi({
        appKey: process.env.TWITTER_API_KEY,
        appSecret: process.env.TWITTER_API_KEY_SECRET,
        accessToken: process.env.TWITTER_ACCESS_TOKEN,
        accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    } as TwitterApiTokens);
}

export default initTwitterClient;

import TwitterApi, { TwitterApiTokens } from "twitter-api-v2";

async function initTwitterClient(tokens: TwitterApiTokens) {
  if (
    !tokens.appKey ||
    !tokens.appSecret ||
    !tokens.accessToken ||
    !tokens.accessSecret
  ) {
    return null;
  }
  return new TwitterApi(tokens);
}

export default initTwitterClient;

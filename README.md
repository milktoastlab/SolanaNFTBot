# Solana NFT Bot

Solana NFT bot is a helpful bot for your Solana NFT projects.

## Sponsor
This project is proudly sponsored by [milktoast.world](https://milktoast.world):
An NFT project that aims to spread happiness and cheer. 

<img src="https://user-images.githubusercontent.com/90617759/139604005-addc968d-2193-4e7b-9ac9-86622672391b.png" width=100>

If you find this project useful, please support us by following [Milktoast](https://twitter.com/milktoastnft) and [KryptoJ](https://twitter.com/kryptoj_) on Twitter!  


## Features
- [x] Notify discord channel on each purchase in marketplaces. 
- [x] Send Twitter tweet on each purchase in marketplaces. (Experimental)
- [x] [Support major marketplaces](#marketplace-support) 

<img width="400" alt="Screen Shot 2022-01-30 at 10 34 53 pm" src="https://user-images.githubusercontent.com/90617759/151699155-3cb01555-da85-47dd-ad10-2a9dd97eb360.png">

## Running using docker

### Requirement
* [Docker](https://www.docker.com/products/docker-desktop) >= v20.10
  * If you're new to Docker, we recommend going through their [get started page](https://docs.docker.com/get-started/) to gain a basic understanding of Docker before moving forward.
* A Solana RPC node/server - This is needed so the bot know where to call to fetch solana transactions.
Here are some potential routes to get a node:
  * https://quicknode.com/
  * [Run your own](https://medium.com/@MisterKevin_js/how-to-run-your-own-solana-rpc-endpoint-on-figments-datahub-e9ca881bebb7)



### Instructions

#### Run bot locally using docker in the terminal

If you're new to docker, before starting I recommend 

Run the following command with your own secrets replaced with your own configuration:

```
docker run --name nftbot -d -p 4000:4000 -e SOLANA_RPC=YOURRPCURL -e DISCORD_BOT_TOKEN=YOURDISCORDTOKEN -e SUBSCRIPTION_DISCORD_CHANNEL_ID=YOURCHANNELID -e SUBSCRIPTION_MINT_ADDRESS=YOURMINTADDRESS milktoastlab/solananftbot
```
Note: The command above is tested in linux/unix env only. You may have a different experience in Windows.
Please check the [documentation on how to run docker command in windows](https://docs.microsoft.com/en-us/virtualization/windowscontainers/quick-start/run-your-first-container) if you need any help.

View logs
```
docker logs ntfbot
```

To make sure the bot is working properly, use [/test-sale-tx](src/server.ts#L47) endpoint
```
curl "http://localhost:4000/test-sale-tx?signature={sale_transaction_signature}&channelId={discord_channel_id}"
```

In case of *DiscordAPIError: Missing Access* error, check if the bot has been invited to the channel. Go to the channel, click "Add members or roles" and add your bot account as a member.


Alternatively, you can run it using docker-compose:

Update `.env` with your secret and run
```
docker-compose up -d bot
```

See [here](#configurable-environments) for more details on environment variables

View logs
```
docker-compose logs bot
```

## Running in development
### Requirement
* Node >= 16.6
* Yarn

### Instructions

#### 1. Install dependencies
```
yarn install
```

#### 2. Update .env with your secrets

Follow the instructions [here](#configurable-environments)

#### 3. Run the server
```
yarn dev
```

## Configurable environments

Here are a list of environments you need to configure before running the NFT bot.

```sh
# RPC node url
SOLANA_RPC=
# Discord bot secret
DISCORD_BOT_TOKEN=
# The discord channel to notify
SUBSCRIPTION_DISCORD_CHANNEL_ID=
# Mint address to watch for sales
SUBSCRIPTION_MINT_ADDRESS=
# Twitter secrets
TWITTER_API_KEY=
TWITTER_API_KEY_SECRET=
TWITTER_ACCESS_TOKEN=
TWITTER_ACCESS_TOKEN_SECRET=
```
https://github.com/milktoastlab/SolanaNFTBot/blob/main/.env

### Variable breakdowns

#### DISCORD_BOT_TOKEN
This is your discord bot secret.
If you don't have a discord bot yet, you can create one following the instructions here:
https://discordpy.readthedocs.io/en/stable/discord.html

Make sure your bot has the required permissions:
* View channels
* Read/Send messages
* Send messages
* Embed links

<img width="827" alt="Screen Shot 2021-10-31 at 9 25 31 am" src="https://user-images.githubusercontent.com/90617759/139560537-e0420217-25d7-4538-81cc-d53422c24db9.png">

#### SUBSCRIPTION_DISCORD_CHANNEL_ID
This is the ID of the discord channel you want to send notifications to.
You will need to enable developer mode have access the channel IDs.
Here are the instructions:
https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-

#### SUBSCRIPTION_MINT_ADDRESS
This is the address that you want the Solana NFT bot to watch for notifications.
It needs to be one of the creator addresses:
<img width="324" alt="Screen Shot 2021-11-12 at 6 16 31 pm" src="https://user-images.githubusercontent.com/90617759/141426468-fcf7c522-4480-4a4e-b1e9-c0cbed3f4f10.png">

_Note: Avoid personal addresses because it could detect unwanted sales._

#### Twitter variables

__Experimental:__
We haven't stress test Twitter notification on high volume projects. We recommend you have a good internet connection for your bot if you want to use this feature, because for each notification, the bot will upload the nft image to Twitter for display. 
Create a Github issue to let us know if you encounter any problems.


To post sales notification tweets to Twitter via the API, you will first need Elevated access to the Twitter API.

<img src= https://user-images.githubusercontent.com/50549441/149970878-fc94fb39-8147-4163-a17e-f0552b8e71cc.png>

While logged in to the account you want to use the Twitter API for, apply for Elevated access to the twitter API by clicking the link here and following the steps: 
https://developer.twitter.com/en/portal/petition/essential/basic-info

The approval process may take a while. 

Create a new project, and create a new App under that project.

The API Key and secret will be displayed to you there, which you'll assign to `TWITTER_API_KEY` and `TWITTER_API_KEY_SECRET` respectively.

Then, click on the Keys and tokens tab, and generate the Access Token and Secret. Assign these to `TWITTER_ACCESS_TOKEN` and `TWITTER_ACCESS_TOKEN_SECRET` respectively.

<img src= https://user-images.githubusercontent.com/50549441/149973388-58f3a303-91f4-4e1b-ab7f-dfc2a22aa5da.png>

## Production deployment

The solana nft bot is containerized, you can deploy it on any hosting service that supports docker. 

Here are some options: 

* [Akash Network](https://akash.network), a decentralized cloud compute marketplace. [Click here for the step by step guide.](https://medium.com/@kryptoj/how-to-host-a-solana-nft-bot-on-the-akash-network-no-code-ccbeb9ce35d1)
* https://www.ibm.com/cloud/code-engine
* [Digital Ocean](https://www.digitalocean.com/products/droplets)

## Marketplace support

- [x] [Magic Eden](https://magiceden.io/)
- [x] [Solanart](http://solanart.io/)
- [x] [Digital Eyes](https://digitaleyes.market/)
- [x] [Alpha Art](https://alpha.art/)
- [x] [Exchange Art](https://exchange.art/)
- [x] [Solsea](https://solsea.io/)

### Adding new marketplace

SolanaNFTBot aim to support as many marketplaces are possible. 
Here is the instruction on how you can add support to other marketplaces.

#### 1. Add a new marketplace config
Use `src/lib/marketplaces/solsea.ts` as example

#### 2. Write a test for the marketplace
Use `src/lib/marketplaces/solsea.test.ts` as example

#### 3. Add the new marketplace to the existing list 
`src/lib/marketplaces/marketplaces.ts`

## Support

If you have any questions or feedback, feel free to jump into our discord #dev-talk channel and have a chat.
https://discord.com/invite/GYxur2tvzP

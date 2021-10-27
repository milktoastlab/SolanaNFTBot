# SOLNFTBot

A bot for notify Solana NFT sale events

# Requirement
* Node >= 16.6
* Yarn

# Getting started
1. Install dependencies
```
yarn install
```

2. Update .env with your secrets
```sh
# Replace this with your RPC
SOLANA_RPC=https://explorer-api.mainnet-beta.solana.com/
# Discord bot secret
DISCORD_BOT_TOKEN=
# The discord channel to notify
DISCORD_CHANNEL_ID=
# Mint address to watch for sales
MINT_ADDRESS=
```

3. Run the server 
```
yarn dev
```

import events from 'events';

export const EE = new events.EventEmitter.EventEmitter();

// --------------------------------------- errors

export const ERR_NO_NFTS = new Error('No NFTs Found:( Are you on the right network?');

// ---------------------------------------  defaults

export const DEFAULTS = {

  // OWNER: '',
  // CREATOR: '',
  // MINT: '',
  // URI: '',
  // MAX_SUPPLY: null,
  // MASTER_MINT: '',
  // UPDATE_AUTHORITY: null,
  // NFT_MINT: '',
  // METADATA: null,
  // PRIMARY_SALE: null,
  // METADATA_PROGRAM_ID: '',

  AUTHORITY: 'FILL IN',

  // Discord bot secret
  DISCORD_BOT_TOKEN: 'FILL IN',
  
  // The discord channel to notify
  SUBSCRIPTION_DISCORD_CHANNEL_ID: 'FILL IN',

  PINATA_API_KEY: 'FILL IN',

  PINATA_API_SECRET: 'FILL IN'

};

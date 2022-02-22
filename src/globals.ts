
// ---------------------------------------  defaults

// COMMENT OUT FOR HEROKU
// import dotenv from "dotenv";
// const result = require('dotenv').config({silent: true});
// if (result.error) {
//   throw result.error;
// }

export const DEFAULTS = {

  AUTHORITY: process.env.AUTHORITY,

  // Discord bot secret
  DISCORD_BOT_TOKEN: process.env.DISCORD_BOT_TOKEN,
  
  // The discord channel to notify
  SUBSCRIPTION_DISCORD_CHANNEL_ID: process.env.SUBSCRIPTION_DISCORD_CHANNEL_ID,

  PINATA_API_KEY: process.env.PINATA_API_KEY,

  PINATA_API_SECRET: process.env.PINATA_API_SECRET,

  APP_URL: process.env.VUE_APP_APP_URL ? process.env.VUE_APP_APP_URL:"https://gmnh.vercel.app/"

};

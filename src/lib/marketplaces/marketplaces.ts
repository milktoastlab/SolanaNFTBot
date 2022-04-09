import { Marketplace } from "./types";
import magicEden from "./magicEden";
import digitalEyes from "./digitalEyes";
import solanart from "./solanart";
import alphaArt from "./alphaArt";
import exchangeArt from "./exchangeArt";
import solsea from "./solsea";
import openSea from "./openSea";

/**
 * These are the list of marketplaces that we check for notifications
 */
const marketplaces: Marketplace[] = [
  magicEden,
  digitalEyes,
  solanart,
  alphaArt,
  exchangeArt,
  solsea,
  openSea,
];

export default marketplaces;

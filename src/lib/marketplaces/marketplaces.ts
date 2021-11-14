import { Marketplace } from "./types";
import magicEden from "./magicEden";
import digitalEyes from "./digitalEyes";
import solanart from "./solanart";
import alphaArt from "./alphaArt";
import solSea from "./solsea";

/**
 * These are the list of marketplaces that we check for notifications
 */
const marketplaces: Marketplace[] = [
  magicEden,
  digitalEyes,
  solanart,
  alphaArt,
  solSea
];

export default marketplaces;

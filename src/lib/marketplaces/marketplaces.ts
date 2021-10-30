import { Marketplace } from "./types";
import magicEden from "./magicEden";
import digitalEyes from "./digitalEyes";
import solanart from "./solanart";
import unknown from "./unknown";

/**
 * These are the list of marketplaces that we check for notifications
 */
const marketplaces: Marketplace[] = [magicEden, digitalEyes, solanart, unknown];

export default marketplaces;

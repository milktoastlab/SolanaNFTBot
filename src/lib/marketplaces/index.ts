import { Marketplace } from "./types";
import magicEden from "./magicEden";
import digitalEyes from "./digitalEyes";
import solanart from "./solanart";
import unknown from "./unknown";
export * from "./types";
export { default as parseNFTSale } from "./parseNFTSaleForAllMarkets";
const marketplaces: Marketplace[] = [magicEden, digitalEyes, solanart, unknown];

export default marketplaces;

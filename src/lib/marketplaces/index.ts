import { Marketplace } from "./types";
import magicEden from "./magicEden";
export * from "./types";
export { default as parseNFTSale } from "./parseNFTSaleForAllMarkets";
const marketplaces: Marketplace[] = [magicEden];

export default marketplaces;

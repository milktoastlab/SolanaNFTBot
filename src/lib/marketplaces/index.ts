import { Marketplace } from "./types";
import magicEden from "./magicEden";
export * from "./types";
export { default as parseNFTSale } from "./parseNFTSale";
const marketplaces: Marketplace[] = [magicEden];

export default marketplaces;

import { CHAIN_IDS, Network } from "./chains";
import { Token } from "./entities";

export const WRAPPED_NATIVE_CURRENCY = {
  [CHAIN_IDS[Network.POLYGON]]: new Token(
    CHAIN_IDS[Network.POLYGON],
    "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
    18,
    "WMATIC",
    "Wrapped MATIC",
    undefined,
    "/images/chain_images/polygon_chain.webp",
    "matic-network",
  ),
  [CHAIN_IDS[Network.POLYGON_AMOY]]: new Token(
    CHAIN_IDS[Network.POLYGON_AMOY],
    "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889",
    18,
    "WMATIC",
    "Wrapped MATIC",
    undefined,
    "/images/chain_images/polygon_chain.webp",
    "matic-network",
  ),
};

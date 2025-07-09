import invariant from "tiny-invariant";
import { SUPPORTED_POLYGON_CHAIN_ID } from "./chains";
import { Currency, NativeCurrency, Token } from "./entities";
import { WRAPPED_NATIVE_CURRENCY } from "./wrapped-native-currencies";

export function isMatic(chainId: number) {
  return chainId === SUPPORTED_POLYGON_CHAIN_ID;
}

class MaticNativeCurrency extends NativeCurrency {
  equals(other: Currency) {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped() {
    if (!isMatic(this.chainId)) {
      throw new Error("Not matic");
    }
    const wrapped = WRAPPED_NATIVE_CURRENCY[this.chainId];
    invariant(wrapped instanceof Token);
    return wrapped;
  }

  public constructor(chainId: number) {
    if (!isMatic(chainId)) {
      throw new Error("Not matic");
    }
    super(chainId, 18, "MATIC", "Polygon Matic", "/images/chain_images/polygon_chain.webp", "matic-network");
  }
}

const cachedNativeCurrency: { [chainId: number]: NativeCurrency } = {};

export const nativeOnChain = (chainId: number) => {
  if (cachedNativeCurrency[chainId]) return cachedNativeCurrency[chainId];

  let nativeCurrency: NativeCurrency;

  if (isMatic(chainId)) {
    nativeCurrency = new MaticNativeCurrency(chainId);
  } else {
    nativeCurrency = new MaticNativeCurrency(chainId);
  }

  return (cachedNativeCurrency[chainId] = nativeCurrency);
};

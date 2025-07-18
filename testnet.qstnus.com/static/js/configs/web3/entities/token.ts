import invariant from "tiny-invariant";
import { checkValidAddress, validateAndParseAddress } from "../utils";
import { BaseCurrency } from "./base-currency";
import { Currency } from "./currency";

/**
 * Represents an ERC20 token with a unique address and some metadata.
 */
export class Token extends BaseCurrency {
  public readonly isNative = false;
  public readonly isToken = true;

  /**
   * The contract address on the chain on which this token lives
   */
  public readonly address: string;

  /**
   *
   * @param chainId {@link BaseCurrency#chainId}
   * @param address The contract address on the chain on which this token lives
   * @param decimals {@link BaseCurrency#decimals}
   * @param symbol {@link BaseCurrency#symbol}
   * @param name {@link BaseCurrency#name}
   * @param bypassChecksum If true it only checks for length === 42, startsWith 0x and contains only hex characters
   * @param logoURI  {@link BaseCurrency#logoURI}
   * @param coingeckoId  {@link BaseCurrency#coingeckoId}
   *
   */
  public constructor(
    chainId: number,
    address: string,
    decimals: number,
    symbol?: string,
    name?: string,
    bypassChecksum?: boolean,
    logoURI?: string,
    coingeckoId?: string,
  ) {
    super(chainId, decimals, symbol, name, logoURI, coingeckoId);
    if (bypassChecksum) {
      this.address = checkValidAddress(address);
    } else {
      this.address = validateAndParseAddress(address);
    }
  }

  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */
  public equals(other: Currency): boolean {
    return (
      other.isToken && this.chainId === other.chainId && this.address.toLowerCase() === other.address.toLowerCase()
    );
  }

  /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   * @throws if the tokens are on different chains
   */
  public sortsBefore(other: Token): boolean {
    invariant(this.chainId === other.chainId, "CHAIN_IDS");
    invariant(this.address.toLowerCase() !== other.address.toLowerCase(), "ADDRESSES");
    return this.address.toLowerCase() < other.address.toLowerCase();
  }

  /**
   * Return this token, which does not need to be wrapped
   */
  public get wrapped(): Token {
    return this;
  }
}

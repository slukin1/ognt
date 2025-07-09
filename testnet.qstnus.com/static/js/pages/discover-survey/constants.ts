import { SHORT_CHAIN_NAMES, NATIVE_CURRENCIES_NAMES, WORK_CHAIN_IDS, Network } from "configs/web3";
import { removeArraysNullAndUndefined } from "utils";

const currencyArray = Object.keys(WORK_CHAIN_IDS).map(chainId => {
  const chainIdTyped = chainId as unknown as Network;
  if (NATIVE_CURRENCIES_NAMES[chainIdTyped]) {
    return {
      key: NATIVE_CURRENCIES_NAMES[chainIdTyped],
      value: NATIVE_CURRENCIES_NAMES[chainIdTyped],
    };
  }
});

export const sortFilter = [
  { key: "asc", value: "Ascending" },
  { key: "desc", value: "Descending" },
];

export const membershipFilter = [
  { key: "all", value: "All" },
  { key: "premium", value: "Premium" },
  { key: "free", value: "Free" },
];

export const platformFilter = [
  {
    key: "all",
    value: "All",
  },
  {
    key: "virtual",
    value: "QSTN",
  },
  {
    key: "stripe",
    value: "Stripe",
  },
  ...Object.values(WORK_CHAIN_IDS).map(chainId => {
    return {
      key: chainId.toString(),
      value: SHORT_CHAIN_NAMES[chainId],
    };
  }),
];

export const currencyFilter = [
  {
    key: "all",
    value: "All",
  },
  {
    key: "NFT",
    value: "NFT",
  },
  {
    key: "USD",
    value: "USD",
  },
  ...removeArraysNullAndUndefined(currencyArray),
];

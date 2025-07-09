import { Bundler, BiconomyPaymaster } from "@biconomy/account";

import { SUPPORTED_POLYGON_CHAIN_ID } from "configs/web3/chains";

export const bundler = new Bundler({
  bundlerUrl: `https://bundler.biconomy.io/api/v2/${SUPPORTED_POLYGON_CHAIN_ID}/${process.env.REACT_APP_BICONOMY_BUNDLER_KEY}`,
  chainId: SUPPORTED_POLYGON_CHAIN_ID,
});

export const paymaster = new BiconomyPaymaster({
  paymasterUrl: `https://paymaster.biconomy.io/api/v1/${SUPPORTED_POLYGON_CHAIN_ID}/${process.env.REACT_APP_BICONOMY_PAYMASTER_KEY}`,
});

import { JsonRpcProvider } from "@ethersproject/providers";
import { RPC_URLS } from "./chains";

export const getStaticRpcProvider = (chainId: number) => {
  return new JsonRpcProvider(RPC_URLS[chainId]);
};

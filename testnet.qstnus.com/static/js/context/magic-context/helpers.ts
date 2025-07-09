import { ExternalProvider, JsonRpcProvider, Web3Provider } from "@ethersproject/providers";
import { createWalletClient, custom, publicActions } from "viem";

import { CachedProvider, CachedClient, MagicExt, ExtendedWalletClient } from "./types";
import { VIEM_CHAINS } from "configs/web3";
import { getStaticRpcProvider } from "configs/web3/rpc-providers";

let networkCachedProviders: CachedProvider<JsonRpcProvider> = {};
let viemCachedClients: CachedClient<ExtendedWalletClient> = {};
let magicCachedProviders: CachedProvider<Web3Provider> = {};

export function getNetworkProvider(chainId: number) {
  if (networkCachedProviders[chainId]) {
    return networkCachedProviders[chainId];
  }

  const updatedProvider = createNetworkProviderByChain(chainId);

  return updatedProvider[chainId];
}

function createNetworkProviderByChain(chainId: number) {
  if (!(chainId in networkCachedProviders)) {
    networkCachedProviders = { ...networkCachedProviders, [chainId]: getStaticRpcProvider(chainId) };
  }

  return networkCachedProviders;
}

export function getMagicProvider(chainId: number, magic: MagicExt) {
  if (magicCachedProviders[chainId]) {
    return magicCachedProviders[chainId];
  }

  const updatedProvider = createMagicProviderByChain(chainId, magic);

  return updatedProvider[chainId];
}

function createMagicProviderByChain(chainId: number, magic: MagicExt) {
  if (!(chainId in magicCachedProviders)) {
    magicCachedProviders = {
      ...magicCachedProviders,
      [chainId]: new Web3Provider(magic.rpcProvider as unknown as ExternalProvider),
    };
  }

  return magicCachedProviders;
}

export function getViemClient(chainId: number, magic: MagicExt) {
  if (viemCachedClients[chainId]) {
    return viemCachedClients[chainId];
  }

  const updatedClient = createViemClientByChain(chainId, magic);

  return updatedClient[chainId];
}

function createViemClientByChain(chainId: number, magic: MagicExt) {
  if (!(chainId in viemCachedClients)) {
    const client = createWalletClient({
      chain: VIEM_CHAINS[chainId],
      transport: custom(magic.rpcProvider),
    }).extend(publicActions);

    viemCachedClients = {
      ...viemCachedClients,
      [chainId]: client,
    };
  }

  return viemCachedClients;
}

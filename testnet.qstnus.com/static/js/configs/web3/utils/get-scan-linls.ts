import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { SCAN_URLS, BLOCK_EXPLORER_URLS_SOLANA, BLOCK_EXPLORER_URLS_NEAR } from "configs/web3";

export const getScanLink = (
  data: string | number,
  type: "transaction" | "token" | "address" | "block" | "countdown",
  chainId: number,
) => {
  switch (type) {
    case "transaction": {
      return `${SCAN_URLS[chainId]}/tx/${data}`;
    }
    case "token": {
      return `${SCAN_URLS[chainId]}/token/${data}`;
    }
    case "block": {
      return `${SCAN_URLS[chainId]}/block/${data}`;
    }
    case "countdown": {
      return `${SCAN_URLS[chainId]}/block/countdown/${data}`;
    }
    default: {
      return `${SCAN_URLS[chainId]}/address/${data}`;
    }
  }
};

export const getScanLinkSolana = (
  data: string | number,
  type: "transaction" | "token" | "account" | "block" | "address",
  network: WalletAdapterNetwork,
) => {
  const cluster =
    network === WalletAdapterNetwork.Devnet
      ? `?cluster=${WalletAdapterNetwork.Devnet}`
      : `?cluster=${WalletAdapterNetwork.Mainnet}`;

  switch (type) {
    case "transaction": {
      return `${BLOCK_EXPLORER_URLS_SOLANA}/tx/${data}${cluster}`;
    }
    case "token": {
      return `${BLOCK_EXPLORER_URLS_SOLANA}/token/${data}${cluster}`;
    }
    case "account": {
      return `${BLOCK_EXPLORER_URLS_SOLANA}/account/${data}${cluster}`;
    }
    case "block": {
      return `${BLOCK_EXPLORER_URLS_SOLANA}/block/${data}${cluster}`;
    }
    case "address": {
      return `${BLOCK_EXPLORER_URLS_SOLANA}/address/${data}${cluster}`;
    }
  }
};

export const getScanLinkNear = (data: string | number, type: "transaction" | "token" | "address") => {
  switch (type) {
    case "transaction": {
      return `${BLOCK_EXPLORER_URLS_NEAR}/txns/${data}`;
    }
    case "token": {
      return `${BLOCK_EXPLORER_URLS_NEAR}/token/${data}`;
    }
    default: {
      return `${BLOCK_EXPLORER_URLS_NEAR}/address/${data}`;
    }
  }
};

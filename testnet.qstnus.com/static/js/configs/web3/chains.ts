import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

import { polygon, polygonAmoy } from "viem/chains";

export enum Network {
  POLYGON = "polygon",
  POLYGON_AMOY = "amoy",
  TON = "ton",
  TON_TEST = "ton_test",
  NEAR = "near",
  NEAR_TEST = "near_test",
  ROOTSTOCK = "rootstock",
  ROOTSTOCK_TEST = "rootstock_test",
  KAKAROT = "kakarot",
  KAKAROT_TEST = "kakarot_test",
  SOLANA = WalletAdapterNetwork.Mainnet,
  SOLANA_TEST = WalletAdapterNetwork.Devnet,
  BOBA = "boba",
  BOBA_TEST = "boba_test",
  SOMNIA = "somnia",
  SOMNIA_TEST = "somnia_test",
  SKALE = "skale",
  SKALE_TEST = "skale_test",
  VIRTUAL = "virtual",
}

export const MAINNET_CHAIN_IDS = {
  [Network.POLYGON]: 137,
  [Network.ROOTSTOCK]: 30,
  [Network.KAKAROT]: 1802203764,
  [Network.BOBA]: 288,
  [Network.SOMNIA]: 50312,
  [Network.SKALE]: 2046399126,
  [Network.TON]: -239,
  [Network.SOLANA]: WalletAdapterNetwork.Mainnet,
  [Network.NEAR]: "near-mainnet",
};

export const TESTNET_CHAIN_IDS = {
  [Network.POLYGON_AMOY]: 80002,
  [Network.ROOTSTOCK_TEST]: 31,
  [Network.KAKAROT_TEST]: 1802203764,
  [Network.BOBA_TEST]: 28882,
  [Network.SOMNIA_TEST]: 50312,
  [Network.SKALE_TEST]: 1444673419,
  [Network.TON_TEST]: -3,
  [Network.SOLANA_TEST]: WalletAdapterNetwork.Devnet,
  [Network.NEAR_TEST]: "near-testnet",
};

export const CHAIN_IDS = { ...MAINNET_CHAIN_IDS, ...TESTNET_CHAIN_IDS };

export const WORK_CHAIN_IDS = process.env.REACT_APP_ENV === "development" ? TESTNET_CHAIN_IDS : MAINNET_CHAIN_IDS;

// TODO: refactor it in future for mainnet
export const SUPPORTED_POLYGON_CHAIN_ID =
  process.env.REACT_APP_ENV === "development"
    ? TESTNET_CHAIN_IDS[Network.POLYGON_AMOY]
    : MAINNET_CHAIN_IDS[Network.POLYGON];

export const SUPPORTED_ROOTSTOCK_CHAIN_ID =
  process.env.REACT_APP_ENV === "development"
    ? TESTNET_CHAIN_IDS[Network.ROOTSTOCK_TEST]
    : MAINNET_CHAIN_IDS[Network.ROOTSTOCK];

export const SUPPORTED_KAKAROT_CHAIN_ID =
  process.env.REACT_APP_ENV === "development"
    ? TESTNET_CHAIN_IDS[Network.KAKAROT_TEST]
    : MAINNET_CHAIN_IDS[Network.KAKAROT];

export const SUPPORTED_BOBA_CHAIN_ID =
  process.env.REACT_APP_ENV === "development" ? TESTNET_CHAIN_IDS[Network.BOBA_TEST] : MAINNET_CHAIN_IDS[Network.BOBA];

export const SUPPORTED_SOMNIA_CHAIN_ID =
  process.env.REACT_APP_ENV === "development"
    ? TESTNET_CHAIN_IDS[Network.SOMNIA_TEST]
    : MAINNET_CHAIN_IDS[Network.SOMNIA];

export const SUPPORTED_SKALE_CHAIN_ID =
  process.env.REACT_APP_ENV === "development"
    ? TESTNET_CHAIN_IDS[Network.SKALE_TEST]
    : MAINNET_CHAIN_IDS[Network.SKALE];

export const SUPPORTED_TON_CHAIN_ID =
  process.env.REACT_APP_ENV === "development" ? TESTNET_CHAIN_IDS[Network.TON_TEST] : MAINNET_CHAIN_IDS[Network.TON];

export const SUPPORTED_SOLANA_CHAIN_ID =
  process.env.REACT_APP_ENV === "development" ? WalletAdapterNetwork.Devnet : WalletAdapterNetwork.Mainnet;

export const SUPPORTED_NEAR_CHAIN_ID =
  process.env.REACT_APP_ENV === "development" ? TESTNET_CHAIN_IDS[Network.NEAR_TEST] : MAINNET_CHAIN_IDS[Network.NEAR];

export const RPC_URLS = {
  [CHAIN_IDS[Network.POLYGON]]: "https://polygon-rpc.com",
  [CHAIN_IDS[Network.POLYGON_AMOY]]: "https://rpc-amoy.polygon.technology",
  [CHAIN_IDS[Network.KAKAROT]]: "https://sepolia-rpc.kakarot.org",
  [CHAIN_IDS[Network.KAKAROT_TEST]]: "https://sepolia-rpc.kakarot.org",
  [CHAIN_IDS[Network.BOBA]]: "https://mainnet.boba.network",
  [CHAIN_IDS[Network.BOBA_TEST]]: "https://sepolia.boba.network",
  [CHAIN_IDS[Network.SOMNIA]]: "https://dream-rpc.somnia.network",
  [CHAIN_IDS[Network.SOMNIA_TEST]]: "https://dream-rpc.somnia.network",
  [CHAIN_IDS[Network.SKALE]]: "https://mainnet.skalenodes.com/v1/elated-tan-skat",
  [CHAIN_IDS[Network.SKALE_TEST]]: "https://testnet.skalenodes.com/v1/juicy-low-small-testnet",
};

export const VIEM_CHAINS = {
  [CHAIN_IDS[Network.POLYGON]]: polygon,
  [CHAIN_IDS[Network.POLYGON_AMOY]]: polygonAmoy,
};

export const VIEM_CHAINS_IDS = [
  CHAIN_IDS[Network.ROOTSTOCK],
  CHAIN_IDS[Network.ROOTSTOCK_TEST],
  CHAIN_IDS[Network.KAKAROT],
  CHAIN_IDS[Network.KAKAROT_TEST],
  CHAIN_IDS[Network.BOBA],
  CHAIN_IDS[Network.BOBA_TEST],
  CHAIN_IDS[Network.SOMNIA],
  CHAIN_IDS[Network.SOMNIA_TEST],
  CHAIN_IDS[Network.SKALE],
  CHAIN_IDS[Network.SKALE_TEST],
];

export const SCAN_URLS = {
  [CHAIN_IDS[Network.POLYGON]]: "https://polygonscan.com",
  [CHAIN_IDS[Network.POLYGON_AMOY]]: "https://amoy.polygonscan.com",
  [CHAIN_IDS[Network.TON]]: "https://tonscan.org/",
  [CHAIN_IDS[Network.TON_TEST]]: "https://testnet.tonscan.org",
  [CHAIN_IDS[Network.ROOTSTOCK]]: "https://explorer.rootstock.io",
  [CHAIN_IDS[Network.ROOTSTOCK_TEST]]: "https://explorer.testnet.rootstock.io",
  [CHAIN_IDS[Network.KAKAROT]]: "https://sepolia.kakarotscan.org",
  [CHAIN_IDS[Network.KAKAROT_TEST]]: "https://sepolia.kakarotscan.org",
  [CHAIN_IDS[Network.BOBA]]: "https://bobascan.com",
  [CHAIN_IDS[Network.BOBA_TEST]]: "https://testnet.bobascan.com",
  [CHAIN_IDS[Network.SOMNIA]]: "https://shannon-explorer.somnia.network",
  [CHAIN_IDS[Network.SOMNIA_TEST]]: "https://shannon-explorer.somnia.network",
  [CHAIN_IDS[Network.SKALE]]: "https://elated-tan-skat.explorer.mainnet.skalenodes.com",
  [CHAIN_IDS[Network.SKALE_TEST]]: "https://juicy-low-small-testnet.explorer.testnet.skalenodes.com",
};

export const NATIVE_CURRENCIES_NAMES = {
  [Network.POLYGON]: "MATIC",
  [Network.POLYGON_AMOY]: "MATIC",
  [Network.TON]: "TON",
  [Network.TON_TEST]: "TON",
  [Network.SOLANA]: "SOL",
  [Network.SOLANA_TEST]: "SOL",
  [Network.VIRTUAL]: "ANSR",
  [Network.NEAR]: "NEAR",
  [Network.NEAR_TEST]: "NEAR",
  [Network.ROOTSTOCK]: "RBTC",
  [Network.ROOTSTOCK_TEST]: "TRBTC",
  [Network.KAKAROT]: "ETH",
  [Network.KAKAROT_TEST]: "ETH",
  [Network.BOBA]: "ETH",
  [Network.BOBA_TEST]: "ETH",
  [Network.SOMNIA]: "STT",
  [Network.SOMNIA_TEST]: "STT",
  [Network.SKALE]: "USDC",
  [Network.SKALE_TEST]: "USDC",
};

export const NATIVE_CURRENCIES_ICONS = {
  [Network.POLYGON]: "/images/chain_images/polygon_chain.webp",
  [Network.POLYGON_AMOY]: "/images/chain_images/polygon_chain.webp",
  [Network.TON]: "/images/toncoin-icon.webp",
  [Network.TON_TEST]: "/images/toncoin-icon.webp",
  [Network.SOLANA]: "/images/chain_images/SOL.svg",
  [Network.SOLANA_TEST]: "/images/chain_images/SOL.svg",
  [Network.VIRTUAL]: "/images/ansr-logo.webp",
  [Network.NEAR]: "/images/near-coin.svg",
  [Network.NEAR_TEST]: "/images/near-coin.svg",
  [Network.ROOTSTOCK]: "/images/RBTC-logo.webp",
  [Network.ROOTSTOCK_TEST]: "/images/RBTC-logo.webp",
  [Network.KAKAROT]: "/images/eth.svg",
  [Network.KAKAROT_TEST]: "/images/eth.svg",
  [Network.BOBA]: "/images/boba-logo.png",
  [Network.BOBA_TEST]: "/images/boba-logo.png",
  [Network.SOMNIA]: "/images/somnia-logo.svg",
  [Network.SOMNIA_TEST]: "/images/somnia-logo.svg",
  [Network.SKALE]: "/images/usdc-logo.svg",
  [Network.SKALE_TEST]: "/images/usdc-logo.svg",
};

export const SHORT_CHAIN_NAMES = {
  [CHAIN_IDS[Network.POLYGON]]: "Polygon",
  [CHAIN_IDS[Network.POLYGON_AMOY]]: "Polygon Amoy",
  [CHAIN_IDS[Network.TON]]: "Ton",
  [CHAIN_IDS[Network.TON_TEST]]: "Ton Testnet",
  [CHAIN_IDS[Network.SOLANA]]: "Solana",
  [CHAIN_IDS[Network.SOLANA_TEST]]: "Solana",
  [CHAIN_IDS[Network.NEAR]]: "Near",
  [CHAIN_IDS[Network.NEAR_TEST]]: "Near Testnet",
  [CHAIN_IDS[Network.ROOTSTOCK]]: "Rootstock",
  [CHAIN_IDS[Network.ROOTSTOCK_TEST]]: "Rootstock Testnet",
  [CHAIN_IDS[Network.KAKAROT]]: "Kakarot",
  [CHAIN_IDS[Network.KAKAROT_TEST]]: "Kakarot Testnet",
  [CHAIN_IDS[Network.BOBA]]: "Boba",
  [CHAIN_IDS[Network.BOBA_TEST]]: "Boba Testnet",
  [CHAIN_IDS[Network.SOMNIA]]: "Somnia",
  [CHAIN_IDS[Network.SOMNIA_TEST]]: "Somnia Testnet",
  [CHAIN_IDS[Network.SKALE]]: "SKALE",
  [CHAIN_IDS[Network.SKALE_TEST]]: "SKALE Testnet",
};

export const MIN_MAX_AMOUNTS = {
  [CHAIN_IDS[Network.POLYGON]]: {
    min: 0.01,
    max: 100,
  },
  [CHAIN_IDS[Network.POLYGON_AMOY]]: {
    min: 0.01,
    max: 100,
  },
  [CHAIN_IDS[Network.TON]]: {
    min: 0.1,
    max: 100,
  },
  [CHAIN_IDS[Network.TON_TEST]]: {
    min: 0.1,
    max: 100,
  },
  [CHAIN_IDS[Network.SOLANA]]: {
    min: 0.01,
    max: 100,
  },
  [CHAIN_IDS[Network.SOLANA_TEST]]: {
    min: 0.01,
    max: 100,
  },
  [CHAIN_IDS[Network.NEAR]]: {
    min: 0.01,
    max: 100,
  },
  [CHAIN_IDS[Network.NEAR_TEST]]: {
    min: 0.01,
    max: 100,
  },
  [CHAIN_IDS[Network.ROOTSTOCK]]: {
    min: 0.000001,
    max: 1,
  },
  [CHAIN_IDS[Network.ROOTSTOCK_TEST]]: {
    min: 0.000001,
    max: 1,
  },
  [CHAIN_IDS[Network.KAKAROT]]: {
    min: 0.000001,
    max: 1,
  },
  [CHAIN_IDS[Network.KAKAROT_TEST]]: {
    min: 0.000001,
    max: 1,
  },
  [CHAIN_IDS[Network.BOBA]]: {
    min: 0.000001,
    max: 1,
  },
  [CHAIN_IDS[Network.BOBA_TEST]]: {
    min: 0.000001,
    max: 1,
  },
  [CHAIN_IDS[Network.SOMNIA]]: {
    min: 0.01,
    max: 100,
  },
  [CHAIN_IDS[Network.SOMNIA_TEST]]: {
    min: 0.01,
    max: 100,
  },
  [CHAIN_IDS[Network.SKALE]]: {
    min: 0.01,
    max: 100,
  },
  [CHAIN_IDS[Network.SKALE_TEST]]: {
    min: 0.01,
    max: 100,
  },
};

export const SUPPORT_SOLANA_NETWORK =
  process.env.REACT_APP_ENV === "development" ? Network.SOLANA_TEST : Network.SOLANA;

export const SUPPORT_ROOTSTOCK_NETWORK =
  process.env.REACT_APP_ENV === "development" ? Network.ROOTSTOCK_TEST : Network.ROOTSTOCK;

export const SUPPORT_KAKAROT_NETWORK =
  process.env.REACT_APP_ENV === "development" ? Network.KAKAROT_TEST : Network.KAKAROT;

export const SUPPORT_BOBA_NETWORK = process.env.REACT_APP_ENV === "development" ? Network.BOBA_TEST : Network.BOBA;

export const SUPPORT_SOMNIA_NETWORK =
  process.env.REACT_APP_ENV === "development" ? Network.SOMNIA_TEST : Network.SOMNIA;

export const SUPPORT_SKALE_NETWORK = process.env.REACT_APP_ENV === "development" ? Network.SKALE_TEST : Network.SKALE;

export const SUPPORTED_POLYGON_NETWORK =
  process.env.REACT_APP_ENV === "development" ? Network.POLYGON_AMOY : Network.POLYGON;

export const SUPPORTED_NEAR_NETWORK = process.env.REACT_APP_ENV === "development" ? Network.NEAR_TEST : Network.NEAR;

export const SUPPORTED_TON_NETWORK = process.env.REACT_APP_ENV === "development" ? Network.TON_TEST : Network.TON;

export const BLOCK_EXPLORER_URLS_SOLANA = "https://explorer.solana.com";

export const BLOCK_EXPLORER_URLS_NEAR =
  process.env.REACT_APP_ENV === "development" ? "https://testnet.nearblocks.io" : "https://nearblocks.io/";

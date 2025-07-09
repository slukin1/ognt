import { defineChain } from "viem";
import {
  rootstockTestnet,
  rootstock,
  kakarotSepolia,
  boba,
  bobaSepolia,
  skaleEuropa,
  skaleEuropaTestnet,
} from "wagmi/chains";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { bellecourChain } from "./web3-mail-chain";

export const somniaTestnet = /*#__PURE__*/ defineChain({
  id: 50312,
  name: "Somnia Testnet",
  nativeCurrency: { name: "STT", symbol: "STT", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://dream-rpc.somnia.network"],
    },
  },
  blockExplorers: {
    default: {
      name: "Somnia Testnet Explorer",
      url: "https://somnia-testnet.socialscan.io",
      apiUrl: "https://shannon-explorer.somnia.network/api",
    },
  },
  testnet: true,
});

export const wagmiConfig =
  process.env.REACT_APP_ENV === "development"
    ? getDefaultConfig({
        appName: "QSTN",
        projectId: process.env.REACT_APP_WAGMI_PROJECT_ID ?? "",
        chains: [rootstockTestnet, bellecourChain, kakarotSepolia, bobaSepolia, skaleEuropaTestnet, somniaTestnet],
        ssr: true,
      })
    : getDefaultConfig({
        appName: "QSTN",
        projectId: process.env.REACT_APP_WAGMI_PROJECT_ID ?? "",
        chains: [rootstock, bellecourChain, kakarotSepolia, boba, skaleEuropa, somniaTestnet],
        ssr: true,
      });

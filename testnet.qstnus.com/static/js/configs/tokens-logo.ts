import { SurveyReward } from "store/discover-survey/types";
import { SurveyReward as SurveyReward2 } from "store/user/survey/types";
import { SurveyResponseReward } from "store/business/campaigns/types";
import { CHAIN_IDS, Network, NATIVE_CURRENCIES_ICONS } from "configs/web3";

const tokensLogoObj = {
  MATIC: "/images/chain_images/polygon_chain.webp",
  ANSR: "/images/ansr-logo.webp",
  TON: "/images/toncoin-icon.webp",
  NFT: "/images/NFT.svg",
  SOL: "/images/chain_images/SOL.svg",
  RBTC: "/images/RBTC-logo.webp",
  NEAR: "/images/near-coin.svg",
  ETH: "/images/eth.svg",
  USD: "/images/usd-logo.svg",
  USDC: "/images/usdc-logo.svg",
  BOBA: "/images/boba-logo.png",
  STT: "/images/somnia-logo.svg", // Somnia Test Token
};

const tokensLogo = (reward: SurveyReward | SurveyResponseReward | SurveyReward2 | undefined | null) => {
  let url = "";

  if (reward) {
    if (reward.currencyCode === "USD") {
      url = "/images/usd-logo.svg";
      return url;
    }

    if (reward.currencyCode === "NFT") {
      url = "/images/NFT.svg";
      return url;
    }

    if (reward.currencyCode === "ANSR") {
      url = "/images/ansr-logo.webp";
      return url;
    }

    if (reward.chainId) {
      Object.entries(CHAIN_IDS).forEach(([network, chainId]) => {
        if (reward.chainId && chainId.toString() === reward.chainId.toString()) {
          const networkTyped = network as Network;
          url = NATIVE_CURRENCIES_ICONS[networkTyped];
        }
      });
    }
  }
  return url;
};

export { tokensLogo, tokensLogoObj };

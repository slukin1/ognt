import { useAccount } from "wagmi";
import { useAppSelector } from "store/store";

import { VIEM_CHAINS_IDS } from "configs/web3";

// import { PaymentNetwork } from "store/create-survey/survey/types";

export const useViemChain = () => {
  const paymentNetwork = useAppSelector(state => state.createSurvey.paymentNetwork);

  const { chainId } = useAccount();

  const isViemChain = (chainIdOuter?: number) => {
    const chainIdToCompare = chainIdOuter ? chainIdOuter : paymentNetwork?.chainId;

    if (chainIdToCompare && VIEM_CHAINS_IDS.includes(+chainIdToCompare)) {
      return true;
    }

    return false;
  };

  const isViemChainConnected = (chainIdOuter?: number) => {
    const chainIdToCompare = chainIdOuter ? chainIdOuter : paymentNetwork?.chainId;

    if (chainIdToCompare === chainId) {
      return true;
    }

    return false;
  };

  return { isViemChain, isViemChainConnected };
};

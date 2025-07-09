import { useState } from "react";
import useSWR from "swr";
import { PaymasterMode } from "@biconomy/account";

import { useMagic } from "context";

import { VIEM_CHAINS } from "configs/web3";

export const useBiconomyWallet = () => {
  const [balance, setBalance] = useState(BigInt(0));
  const [balanceFormatted, setBalanceFormatted] = useState("0");
  const [loading, setLoading] = useState(false);
  const { biconomySmartAccount, biconomyPublicAddress, chainId } = useMagic();

  useSWR(
    biconomySmartAccount ? `/getBiconomyBalance/${biconomyPublicAddress}` : null,
    async () => {
      return getBiconomyBalance();
    },
    { revalidateOnFocus: false, refreshInterval: 5000 },
  );

  const getBiconomyBalance = async () => {
    if (biconomySmartAccount) {
      try {
        const balances = await biconomySmartAccount.getBalances([]);
        if (balances && balances.length > 0) {
          setBalance(balances[0].amount);
          setBalanceFormatted(balances[0].formattedAmount);
        }
      } catch (error) {
        console.error("Error in getBiconomyBalance: ", error);
      }
    }
    return null;
  };

  const withdrawNativeTokens = async (address: `0x${string}`) => {
    if (biconomySmartAccount) {
      setLoading(true);
      try {
        const { wait } = await biconomySmartAccount.withdraw([], address, {
          paymasterServiceData: { mode: PaymasterMode.SPONSORED },
        });

        const { success, userOpHash } = await wait();

        if (success) {
          setBalance(BigInt(0));
          setBalanceFormatted("0");
          setLoading(false);
          return userOpHash;
        }
      } catch (error) {
        console.error("Error in withdrawNativeTokens: ", error);
        setLoading(false);
        return null;
      }
    }

    return null;
  };

  return {
    balance,
    balanceFormatted,
    currency: VIEM_CHAINS[chainId].nativeCurrency.symbol,
    withdrawNativeTokens,
    loading,
  };
};

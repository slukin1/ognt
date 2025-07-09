import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { createSmartAccountClient, createECDSAOwnershipValidationModule } from "@biconomy/account";
import { Magic } from "magic-sdk";
import { OAuthExtension } from "@magic-ext/oauth";
import useSWR from "swr";

import { SUPPORTED_POLYGON_CHAIN_ID, RPC_URLS, paymaster, bundler } from "configs/web3";
import { CurrencyAmount } from "configs/web3/entities";
import { nativeOnChain } from "configs/web3/native-tokens";
import { useAppSelector } from "store/store";

import { getMagicProvider, getViemClient, getNetworkProvider } from "./helpers";
import { resetStore } from "services/axios";

import type { MagicContextType } from "./types";

const BALANCE_REFRESH_TIME = 30_000;

const MagicContext = createContext<MagicContextType | null>(null);

// TODO: Move chainId and magic into state later when new chains will be added
const chainId = SUPPORTED_POLYGON_CHAIN_ID;

const magic = new Magic(process.env.REACT_APP_MAGIC_API_KEY as string, {
  network: {
    rpcUrl: RPC_URLS[chainId],
    chainId,
  },
  extensions: [new OAuthExtension()],
});

const MagicProvider = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(state => state.auth.token);

  const [magicLoading, setMagicLoading] = useState(false);
  const [publicAddress, setPublicAddress] = useState("");
  const [biconomyPublicAddress, setBiconomyPublicAddress] = useState<`0x${string}` | null>(null);

  const [nativeAmount, setNativeAmount] = useState<MagicContextType["nativeAmount"]>(null);
  const [biconomySmartAccount, setBiconomySmartAccount] = useState<MagicContextType["biconomySmartAccount"]>(null);

  const networkProvider = getNetworkProvider(chainId);
  const magicProvider = getMagicProvider(chainId, magic);
  const viemClient = getViemClient(chainId, magic);

  useEffect(() => {
    if (token) {
      connectMagicWallet();
      getBiconomyAccount();
    } else {
      handleDisconnect();
    }
  }, [token]);

  useSWR(
    `getNativeBalance/${publicAddress}`,
    networkProvider && publicAddress.length ? async () => await getNativeBalance() : null,
    {
      refreshInterval: BALANCE_REFRESH_TIME,
    },
  );

  const connectMagicWallet = async () => {
    try {
      setMagicLoading(true);
      const isLoggedIn = await checkIsMagicLoggedIn();

      if (isLoggedIn) {
        const userMetadata = await magic.user.getMetadata();

        if (userMetadata.publicAddress) {
          setPublicAddress(userMetadata.publicAddress);
        }
        setMagicLoading(false);
      }
    } catch (error) {
      console.error("Error in connectMagicWallet: ", error);
      setMagicLoading(false);
    }
  };

  const checkIsMagicLoggedIn = async () => {
    const isLoggedIn = await magic.user.isLoggedIn();

    if (!isLoggedIn) {
      resetStore();
      return await magic.user.logout();
    }
    return isLoggedIn;
  };

  const getBiconomyAccount = async () => {
    try {
      const signer = magicProvider.getSigner();

      const ecdsaModule = await createECDSAOwnershipValidationModule({
        signer,
      });

      const smartAccount = await createSmartAccountClient({
        chainId,
        bundler,
        paymaster,
        defaultValidationModule: ecdsaModule,
      });

      const address = await smartAccount.getAccountAddress();

      setBiconomySmartAccount(smartAccount);
      setBiconomyPublicAddress(address);

      return address;
    } catch (error) {
      console.error("Error in getBiconomyAccount: ", error);
    }
  };

  const connectWallets = async () => {
    try {
      await connectMagicWallet();
      return await getBiconomyAccount();
    } catch (error) {
      console.error("Error in connectWallets: ", error);
    }
  };

  async function getNativeBalance() {
    try {
      const nativeCurrency = nativeOnChain(chainId);
      const balance = await networkProvider.getBalance(publicAddress);

      const currencyAmount = new CurrencyAmount(nativeCurrency, balance);

      setNativeAmount(currencyAmount);
    } catch (error) {
      console.error("Error in getNativeBalance: ", error);
    }
  }

  const handleShowUI = async () => {
    try {
      await magic.wallet.showUI();
    } catch (error) {
      console.error("handleShowUI:", error);
    }
  };

  const handleDisconnect = async () => {
    try {
      await magic.user.logout();
      setBiconomyPublicAddress(null);
      setBiconomySmartAccount(null);
      setPublicAddress("");
      setNativeAmount(null);
    } catch (error) {
      console.error("handleDisconnect:", error);
    }
  };

  return (
    <MagicContext.Provider
      value={{
        magicLoading,
        chainId,
        magic,
        client: viemClient,
        networkProvider,
        provider: magicProvider,
        publicAddress,
        nativeAmount,
        biconomyPublicAddress,
        biconomySmartAccount,
        getBiconomyAccount,
        handleConnect: connectMagicWallet,
        handleShowUI,
        handleDisconnect,
        connectWallets,
      }}
    >
      {children}
    </MagicContext.Provider>
  );
};

export const useMagic = () => {
  const web3Context = useContext(MagicContext);

  if (web3Context === null) {
    throw new Error("Magic context is not found");
  }
  return web3Context;
};

export default MagicProvider;

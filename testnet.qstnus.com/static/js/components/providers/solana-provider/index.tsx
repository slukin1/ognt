import React, { PropsWithChildren } from "react";
import { toast } from "react-hot-toast";

import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork, WalletDisconnectedError, WalletError } from "@solana/wallet-adapter-base";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  MathWalletAdapter,
  TrustWalletAdapter,
  SpotWalletAdapter,
} from "@solana/wallet-adapter-wallets";

import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

import {
  useHandleRootstockProof,
  useHandleSolanaProof,
  useHandleKakarotProof,
  useHandleBobaProof,
  useHandleSomniaProof,
  useHandleSkaleProof,
} from "hooks";

import { SOL_MAINNET_RPC } from "configs/web3/constants";

const Updaters = () => {
  useHandleSolanaProof();
  useHandleRootstockProof();
  useHandleKakarotProof();
  useHandleBobaProof();
  useHandleSomniaProof();
  useHandleSkaleProof();

  return null;
};

const SolanaProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const network =
    process.env.REACT_APP_ENV === "development" ? WalletAdapterNetwork.Devnet : WalletAdapterNetwork.Mainnet;
  const endpoint = process.env.REACT_APP_ENV === "development" ? clusterApiUrl(network) : SOL_MAINNET_RPC;

  const onError = (error: WalletError) => {
    if (error instanceof WalletDisconnectedError) {
      return;
    }
    const message = error.message ? error.message : "Problems with solana wallet were detected";
    toast.error(message);

    console.error("Errors from Solana wallet: ", error);
  };

  const wallets = [
    new PhantomWalletAdapter(),
    new SolflareWalletAdapter({ network }),
    new MathWalletAdapter({ network }),
    new TrustWalletAdapter(),
    new SpotWalletAdapter(),
  ];

  // autoConnect works only if LOCAL_STORAGE_KEYS.solanaWallet is exists
  // It will be set when choose solana wallet
  // And will be removed after solana disconnect
  return (
    <ConnectionProvider
      endpoint={endpoint}
      config={
        process.env.REACT_APP_ENV === "development"
          ? undefined
          : {
              fetchMiddleware: (info, init, fetch) => {
                type Init = typeof init & { credentials: string };
                const request: Init = { ...init, credentials: "include" };
                fetch(info, request);
              },
            }
      }
    >
      <WalletProvider wallets={wallets} autoConnect onError={onError}>
        <WalletModalProvider>
          <Updaters />
          {children}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default SolanaProvider;

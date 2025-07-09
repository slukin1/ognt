import { createContext, useEffect, useContext, ReactNode, useState, useRef } from "react";
import { useIsConnectionRestored, useTonConnectUI, useTonWallet } from "@tonconnect/ui-react";
import { address } from "@ton/core";
import { toast } from "react-hot-toast";

import { useAppDispatch } from "store/store";
import { resetTonProofState } from "store/zkp/ton-proof";
import { checkTonProof } from "store/zkp/ton-proof/actions";
import { hideModal } from "store/modal";

import { isErrorResult } from "services";

import { TonContextType } from "./types";
import { LOCAL_STORAGE_KEYS } from "configs";
import { getProof } from "store/zkp/solana-proof/actions";
import { ProofPayload } from "store/zkp/solana-proof/types";
const payloadTTLMS = 1000 * 60 * 20;

export const TonContext = createContext<TonContextType | null>(null);

const TonProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();
  const [pending, setPending] = useState(false);

  const wallet = useTonWallet();

  const isConnectionRestored = useIsConnectionRestored();

  const [tonConnectUI] = useTonConnectUI();

  const interval = useRef<ReturnType<typeof setInterval> | undefined>();

  useEffect(() => {
    const tonProofToken = localStorage.getItem(LOCAL_STORAGE_KEYS.tonProofToken);
    clearInterval(interval.current);
    if (!wallet) {
      localStorage.removeItem(LOCAL_STORAGE_KEYS.tonProofToken);
      const refreshPayload = async () => {
        tonConnectUI.setConnectRequestParameters({ state: "loading" });

        dispatch(getProof()).then(res => {
          if (!isErrorResult(res.payload)) {
            const { payload } = res.payload as ProofPayload;
            tonConnectUI.setConnectRequestParameters({ state: "ready", value: { tonProof: payload } });
          } else {
            tonConnectUI.setConnectRequestParameters(null);
          }
        });
      };

      refreshPayload();
      setInterval(refreshPayload, payloadTTLMS);
      return;
    }

    if (!tonProofToken) {
      if (wallet.connectItems?.tonProof && !("error" in wallet.connectItems.tonProof)) {
        dispatch(
          checkTonProof({
            address: address(wallet.account.address).toString(),
            chainId: wallet.account.chain,
            publicKey: wallet.account.publicKey,
            proof: { ...wallet.connectItems.tonProof.proof, stateInit: wallet.account.walletStateInit },
          }),
        ).then(res => {
          setPending(false);
          if (!isErrorResult(res.payload)) {
            dispatch(hideModal());
          } else {
            toast.error("Please try another wallet");
            disconnectTon();
          }
        });
      }
    } else {
      toast.error("Please try another wallet");
      disconnectTon();
    }
  }, [wallet, isConnectionRestored]);

  const disconnectTon = async () => {
    try {
      if (wallet) {
        dispatch(resetTonProofState());
        await tonConnectUI.disconnect();
      }
    } catch (e) {
      console.error("Error in disconnectTon", e);
    }
  };

  const connectTonWallet = async () => {
    try {
      await tonConnectUI.connectWallet();
    } catch (error) {
      console.error("Error in connectTonWallet", error);
    }
  };

  return (
    <TonContext.Provider
      value={{
        pending,
        disconnectTon,
        connectTonWallet,
      }}
    >
      {children}
    </TonContext.Provider>
  );
};

export const useTonContext = () => {
  const context = useContext(TonContext);
  if (!context) {
    throw new Error("Error in useTonContext");
  }
  return context;
};

export default TonProvider;

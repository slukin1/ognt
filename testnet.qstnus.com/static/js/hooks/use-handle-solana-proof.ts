import { useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import bs58 from "bs58";

import { useAppDispatch } from "store/store";
import { resetSolanaProofState, setTonSolanaPending } from "store/zkp/solana-proof";
import { checkSolanaProof, getProof } from "store/zkp/solana-proof/actions";

import { isErrorResult } from "services";
import { LOCAL_STORAGE_KEYS } from "configs";
import { SUPPORTED_SOLANA_CHAIN_ID } from "configs/web3";

import { ProofPayload } from "store/zkp/solana-proof/types";

const useHandleSolanaProof = () => {
  const { publicKey, connected, signMessage, disconnect } = useWallet();

  const dispatch = useAppDispatch();

  useEffect(() => {
    handleCheckSolanaProof();
  }, [publicKey?.toString(), connected]);

  const handleCheckSolanaProof = async () => {
    try {
      const solanaAccessToken = localStorage.getItem(LOCAL_STORAGE_KEYS.solanaToken);
      const solanaWallet = localStorage.getItem(LOCAL_STORAGE_KEYS.solanaWallet);
      if (publicKey?.toString() && (!solanaAccessToken || publicKey?.toString() !== solanaWallet)) {
        dispatch(setTonSolanaPending(true));
        dispatch(getProof()).then(async res => {
          if (!isErrorResult(res.payload)) {
            const { payload: message } = res.payload as ProofPayload;
            const signature = await handleSignMessage(message);
            if (signature) {
              const publicKeyToBase58 = publicKey.toBase58();
              const signatureToBase58 = bs58.encode(signature);

              dispatch(
                checkSolanaProof({
                  address: publicKey?.toString(),
                  chainId: SUPPORTED_SOLANA_CHAIN_ID,
                  publicKey: publicKeyToBase58,
                  signature: signatureToBase58,
                  payload: message,
                }),
              ).then(res => {
                dispatch(setTonSolanaPending(false));
                if (isErrorResult(res.payload)) {
                  handleDisconnectSolana();
                } else {
                  localStorage.setItem(LOCAL_STORAGE_KEYS.solanaWallet, publicKey?.toString());
                }
              });
            }
          } else {
            dispatch(setTonSolanaPending(false));
            handleDisconnectSolana();
          }
        });
      }
    } catch (e) {
      dispatch(setTonSolanaPending(false));
      console.error("Error in handleCheckSolanaProof", e);
      handleDisconnectSolana();
    }
  };

  const handleDisconnectSolana = () => {
    if (connected) {
      disconnect();
    }
    dispatch(resetSolanaProofState());
  };

  const handleSignMessage = async (message: string) => {
    try {
      const messageEncoded = new TextEncoder().encode(message);
      return await signMessage?.(messageEncoded);
    } catch (e) {
      dispatch(setTonSolanaPending(false));
      console.error("Error in handleSignMessage", e);
      handleDisconnectSolana();
    }
  };
};

export default useHandleSolanaProof;

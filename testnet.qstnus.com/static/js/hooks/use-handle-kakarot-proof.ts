import { useEffect } from "react";
import { useAccount, useDisconnect, useSignMessage } from "wagmi";

import { useAppDispatch, useAppSelector } from "store/store";
import { checkKakarotProof } from "store/zkp/kakarot-proof/actions";
import { resetKakarotProofState } from "store/zkp/kakarot-proof";
import { getProof } from "store/zkp/solana-proof/actions";

import { isErrorResult } from "services";
import { LOCAL_STORAGE_KEYS } from "configs";
import { SUPPORTED_KAKAROT_CHAIN_ID } from "configs/web3";
import { handleWagmiError } from "utils";

import { ProofPayload } from "store/zkp/solana-proof/types";

const useHandleKakarotProof = () => {
  const token = useAppSelector(state => state.auth.token);

  const { signMessage } = useSignMessage();
  const { disconnect } = useDisconnect();
  const { chainId, address } = useAccount();

  const dispatch = useAppDispatch();

  useEffect(() => {
    handleCheckKakarotProof();
  }, [chainId, address]);

  const handleCheckKakarotProof = async () => {
    try {
      const kakarotAccessToken = localStorage.getItem(LOCAL_STORAGE_KEYS.kakarotToken);
      const kakarotWallet = localStorage.getItem(LOCAL_STORAGE_KEYS.kakarotWallet);
      if (chainId && address && chainId === SUPPORTED_KAKAROT_CHAIN_ID) {
        if (!kakarotAccessToken || !kakarotWallet || address !== kakarotWallet) {
          dispatch(getProof()).then(res => {
            if (!isErrorResult(res.payload)) {
              const { payload } = res.payload as ProofPayload;
              signMessage(
                { message: payload },
                {
                  onError: error => {
                    handleDisconnectKakarot();
                    handleWagmiError(error.message);
                    console.error("error in SignMessage", error);
                  },
                  onSuccess: data => {
                    dispatch(
                      checkKakarotProof({ chainId: chainId.toString(), address, signature: data, payload }),
                    ).then(response => {
                      if (isErrorResult(response.payload)) {
                        handleDisconnectKakarot();
                      } else {
                        localStorage.setItem(LOCAL_STORAGE_KEYS.kakarotWallet, address);
                      }
                    });
                  },
                },
              );
            } else {
              handleDisconnectKakarot();
            }
          });
        }
      }
    } catch (e) {
      console.error("Error in handleCheckKakarotProof", e);
    }
  };

  const handleDisconnectKakarot = () => {
    if (chainId && token) {
      disconnect();
    }
    dispatch(resetKakarotProofState());
  };
};

export default useHandleKakarotProof;

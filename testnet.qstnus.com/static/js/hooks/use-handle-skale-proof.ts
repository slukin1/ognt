import { useEffect } from "react";
import { useAccount, useDisconnect, useSignMessage } from "wagmi";

import { useAppDispatch, useAppSelector } from "store/store";
import { checkSkaleProof } from "store/zkp/skale-proof/actions";
import { resetSkaleProofState } from "store/zkp/skale-proof";
import { getProof } from "store/zkp/solana-proof/actions";

import { isErrorResult } from "services";
import { LOCAL_STORAGE_KEYS } from "configs";
import { SUPPORTED_SKALE_CHAIN_ID } from "configs/web3";
import { handleWagmiError } from "utils";

import { ProofPayload } from "store/zkp/solana-proof/types";

const useHandleSkaleProof = () => {
  const token = useAppSelector(state => state.auth.token);

  const { signMessage } = useSignMessage();
  const { disconnect } = useDisconnect();
  const { chainId, address } = useAccount();

  const dispatch = useAppDispatch();

  useEffect(() => {
    handleCheckSkaleProof();
  }, [chainId, address]);

  const handleCheckSkaleProof = async () => {
    try {
      const skaleAccessToken = localStorage.getItem(LOCAL_STORAGE_KEYS.skaleToken);
      const skaleWallet = localStorage.getItem(LOCAL_STORAGE_KEYS.skaleWallet);
      if (chainId && address && chainId === SUPPORTED_SKALE_CHAIN_ID) {
        if (!skaleAccessToken || !skaleWallet || address !== skaleWallet) {
          dispatch(getProof()).then(res => {
            if (!isErrorResult(res.payload)) {
              const { payload } = res.payload as ProofPayload;
              signMessage(
                { message: payload },
                {
                  onError: error => {
                    handleDisconnectSkale();
                    handleWagmiError(error.message);
                    console.error("error in SignMessage", error);
                  },
                  onSuccess: data => {
                    dispatch(checkSkaleProof({ chainId: chainId.toString(), address, signature: data, payload })).then(
                      response => {
                        if (isErrorResult(response.payload)) {
                          handleDisconnectSkale();
                        } else {
                          localStorage.setItem(LOCAL_STORAGE_KEYS.skaleWallet, address);
                        }
                      },
                    );
                  },
                },
              );
            } else {
              handleDisconnectSkale();
            }
          });
        }
      }
    } catch (e) {
      console.error("Error in handleCheckSkaleProof", e);
    }
  };

  const handleDisconnectSkale = () => {
    if (chainId && token) {
      disconnect();
    }
    dispatch(resetSkaleProofState());
  };
};

export default useHandleSkaleProof;

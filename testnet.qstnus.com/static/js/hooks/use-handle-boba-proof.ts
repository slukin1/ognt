import { useEffect } from "react";
import { useAccount, useDisconnect, useSignMessage } from "wagmi";

import { useAppDispatch, useAppSelector } from "store/store";
import { checkBobaProof } from "store/zkp/boba-proof/actions";
import { resetBobaProofState } from "store/zkp/boba-proof";
import { getProof } from "store/zkp/solana-proof/actions";

import { isErrorResult } from "services";
import { LOCAL_STORAGE_KEYS } from "configs";
import { SUPPORTED_BOBA_CHAIN_ID } from "configs/web3";
import { handleWagmiError } from "utils";

import { ProofPayload } from "store/zkp/solana-proof/types";

const useHandleBobaProof = () => {
  const token = useAppSelector(state => state.auth.token);

  const { signMessage } = useSignMessage();
  const { disconnect } = useDisconnect();
  const { chainId, address } = useAccount();

  const dispatch = useAppDispatch();

  useEffect(() => {
    handleCheckBobaProof();
  }, [chainId, address]);

  const handleCheckBobaProof = async () => {
    try {
      const bobaAccessToken = localStorage.getItem(LOCAL_STORAGE_KEYS.bobaToken);
      const bobaWallet = localStorage.getItem(LOCAL_STORAGE_KEYS.bobaWallet);
      if (chainId && address && chainId === SUPPORTED_BOBA_CHAIN_ID) {
        if (!bobaAccessToken || !bobaWallet || address !== bobaWallet) {
          dispatch(getProof()).then(res => {
            if (!isErrorResult(res.payload)) {
              const { payload } = res.payload as ProofPayload;
              signMessage(
                { message: payload },
                {
                  onError: error => {
                    handleDisconnectBoba();
                    handleWagmiError(error.message);
                    console.error("error in SignMessage", error);
                  },
                  onSuccess: data => {
                    dispatch(checkBobaProof({ chainId: chainId.toString(), address, signature: data, payload })).then(
                      response => {
                        if (isErrorResult(response.payload)) {
                          handleDisconnectBoba();
                        } else {
                          localStorage.setItem(LOCAL_STORAGE_KEYS.bobaWallet, address);
                        }
                      },
                    );
                  },
                },
              );
            } else {
              handleDisconnectBoba();
            }
          });
        }
      }
    } catch (e) {
      console.error("Error in handleCheckBobaProof", e);
    }
  };

  const handleDisconnectBoba = () => {
    if (chainId && token) {
      disconnect();
    }
    dispatch(resetBobaProofState());
  };
};

export default useHandleBobaProof;

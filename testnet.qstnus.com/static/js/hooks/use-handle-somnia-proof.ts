import { useEffect } from "react";
import { useAccount, useDisconnect, useSignMessage } from "wagmi";

import { useAppDispatch, useAppSelector } from "store/store";
import { checkSomniaProof } from "store/zkp/somnia-proof/actions";
import { resetSomniaProofState } from "store/zkp/somnia-proof";
import { getProof } from "store/zkp/solana-proof/actions";

import { isErrorResult } from "services";
import { LOCAL_STORAGE_KEYS } from "configs";
import { SUPPORTED_SOMNIA_CHAIN_ID } from "configs/web3";
import { handleWagmiError } from "utils";

import { ProofPayload } from "store/zkp/solana-proof/types";

const useHandleSomniaProof = () => {
  const token = useAppSelector(state => state.auth.token);

  const { signMessage } = useSignMessage();
  const { disconnect } = useDisconnect();
  const { chainId, address } = useAccount();

  const dispatch = useAppDispatch();

  useEffect(() => {
    handleCheckSomniaProof();
  }, [chainId, address]);

  const handleCheckSomniaProof = async () => {
    try {
      const somniaAccessToken = localStorage.getItem(LOCAL_STORAGE_KEYS.somniaToken);
      const somniaWallet = localStorage.getItem(LOCAL_STORAGE_KEYS.somniaWallet);
      if (chainId && address && chainId === SUPPORTED_SOMNIA_CHAIN_ID) {
        if (!somniaAccessToken || !somniaWallet || address !== somniaWallet) {
          dispatch(getProof()).then(res => {
            if (!isErrorResult(res.payload)) {
              const { payload } = res.payload as ProofPayload;
              signMessage(
                { message: payload },
                {
                  onError: error => {
                    handleDisconnectSomnia();
                    handleWagmiError(error.message);
                    console.error("error in SignMessage", error);
                  },
                  onSuccess: data => {
                    dispatch(checkSomniaProof({ chainId: chainId.toString(), address, signature: data, payload })).then(
                      response => {
                        if (isErrorResult(response.payload)) {
                          handleDisconnectSomnia();
                        } else {
                          localStorage.setItem(LOCAL_STORAGE_KEYS.somniaWallet, address);
                        }
                      },
                    );
                  },
                },
              );
            } else {
              handleDisconnectSomnia();
            }
          });
        }
      }
    } catch (e) {
      console.error("Error in handleCheckSomniaProof", e);
    }
  };

  const handleDisconnectSomnia = () => {
    if (chainId && token) {
      disconnect();
    }
    dispatch(resetSomniaProofState());
  };
};

export default useHandleSomniaProof;

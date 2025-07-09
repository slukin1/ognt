import { useEffect } from "react";
import { useAccount, useDisconnect, useSignMessage } from "wagmi";

import { useAppDispatch, useAppSelector } from "store/store";
import { checkRootstockProof } from "store/zkp/rootstock-proof/actions";
import { resetRootstockProofState } from "store/zkp/rootstock-proof";
import { getProof } from "store/zkp/solana-proof/actions";

import { isErrorResult } from "services";
import { LOCAL_STORAGE_KEYS } from "configs";
import { SUPPORTED_ROOTSTOCK_CHAIN_ID } from "configs/web3";
import { handleWagmiError } from "utils";

import { ProofPayload } from "store/zkp/solana-proof/types";

const useHandleRootstockProof = () => {
  const token = useAppSelector(state => state.auth.token);

  const { signMessage } = useSignMessage();
  const { disconnect } = useDisconnect();
  const { chainId, address } = useAccount();

  const dispatch = useAppDispatch();

  useEffect(() => {
    handleCheckRootstockProof();
  }, [chainId, address]);

  const handleCheckRootstockProof = async () => {
    try {
      const rootstockAccessToken = localStorage.getItem(LOCAL_STORAGE_KEYS.rootstockToken);
      const rootstockWallet = localStorage.getItem(LOCAL_STORAGE_KEYS.rootstockWallet);
      if (chainId && address && chainId === SUPPORTED_ROOTSTOCK_CHAIN_ID) {
        if (!rootstockAccessToken || !rootstockWallet || address !== rootstockWallet) {
          dispatch(getProof()).then(res => {
            if (!isErrorResult(res.payload)) {
              const { payload } = res.payload as ProofPayload;
              signMessage(
                { message: payload },
                {
                  onError: error => {
                    handleDisconnectRootstock();
                    handleWagmiError(error.message);
                    console.error("error in SignMessage", error);
                  },
                  onSuccess: data => {
                    dispatch(
                      checkRootstockProof({ chainId: chainId.toString(), address, signature: data, payload }),
                    ).then(response => {
                      if (isErrorResult(response.payload)) {
                        handleDisconnectRootstock();
                      } else {
                        localStorage.setItem(LOCAL_STORAGE_KEYS.rootstockWallet, address);
                      }
                    });
                  },
                },
              );
            } else {
              handleDisconnectRootstock();
            }
          });
        }
      }
    } catch (e) {
      console.error("Error in handleCheckRootstockProof", e);
    }
  };

  const handleDisconnectRootstock = () => {
    if (chainId && token) {
      disconnect();
    }
    dispatch(resetRootstockProofState());
  };
};

export default useHandleRootstockProof;

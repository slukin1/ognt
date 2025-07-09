import { createContext, useEffect, useContext, ReactNode, useState } from "react";

import { setupBitgetWallet } from "@near-wallet-selector/bitget-wallet";
import { setupMyNearWallet } from "@near-wallet-selector/my-near-wallet";
import { setupSender } from "@near-wallet-selector/sender";
import { setupHereWallet } from "@near-wallet-selector/here-wallet";
import { setupMathWallet } from "@near-wallet-selector/math-wallet";
// import { setupNightly } from "@near-wallet-selector/nightly";
import { setupMeteorWallet } from "@near-wallet-selector/meteor-wallet";
import { setupOKXWallet } from "@near-wallet-selector/okx-wallet";
import { setupNearSnap } from "@near-wallet-selector/near-snap";
import { setupNarwallets } from "@near-wallet-selector/narwallets";
import { setupWelldoneWallet } from "@near-wallet-selector/welldone-wallet";
import { setupLedger } from "@near-wallet-selector/ledger";
import { setupNearFi } from "@near-wallet-selector/nearfi";
import { setupCoin98Wallet } from "@near-wallet-selector/coin98-wallet";
import { setupNeth } from "@near-wallet-selector/neth";
import { setupXDEFI } from "@near-wallet-selector/xdefi";
import { setupBitteWallet } from "@near-wallet-selector/bitte-wallet";
import { setupNearMobileWallet } from "@near-wallet-selector/near-mobile-wallet";

import { setupModal } from "@near-wallet-selector/modal-ui";

import { WalletSelector, setupWalletSelector, AccountState } from "@near-wallet-selector/core";

import { useAppDispatch } from "store/store";
import { checkNearProof } from "store/zkp/near-proof/actions";

import { NearContract, NearNftContract, NetworkId, SUPPORTED_NEAR_CHAIN_ID } from "configs/web3";

import { NearContextType } from "./types";
import { LOCAL_STORAGE_KEYS } from "configs";
import { resetNearProofState } from "store/zkp/near-proof";
import { isErrorResult } from "services";

import type { WalletSelectorState } from "@near-wallet-selector/core";
import type { WalletSelectorModal, ModalOptions } from "@near-wallet-selector/modal-ui";

export const NearContext = createContext<NearContextType | null>(null);

const NearProvider = ({ children }: { children: ReactNode }) => {
  const [walletSelector, setWalletSelector] = useState<WalletSelector | null>(null);
  const [connectedAccount, setConnectedAccount] = useState<AccountState | null>(null);
  const [contractId, setContractId] = useState<string | null>(null);
  const [modal, setModal] = useState<WalletSelectorModal | null>(null);

  const dispatch = useAppDispatch();

  const handleNearWalletChange = async () => {
    try {
      const selector = await setupWalletSelector({
        network: NetworkId,
        allowMultipleSelectors: false,
        modules: [
          setupBitgetWallet(),
          setupMyNearWallet(),
          setupSender(),
          setupHereWallet(),
          setupMathWallet(),
          // setupNightly(),
          setupMeteorWallet(),
          setupNearSnap(),
          setupOKXWallet(),
          setupNarwallets(),
          setupWelldoneWallet(),
          setupLedger(),
          setupNearFi(),
          setupCoin98Wallet(),
          setupNeth(),
          setupXDEFI(),
          setupBitteWallet(),
          setupNearMobileWallet({
            dAppMetadata: {
              logoUrl: `https://testnet.qstnus.com/favicon.ico`,
              name: "QSTN",
              url: "https://testnet.qstnus.com",
            },
          }),
        ],
      });
      if (selector) {
        setWalletSelector(selector);
        const state = selector.store.getState();
        updateState(state);
        return selector;
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error("Error in handleNearWalletChange", error);
    }
  };

  const signInNear = async () => {
    try {
      const selector = await handleNearWalletChange();
      if (selector) {
        const options = {} as unknown as ModalOptions;
        const modal = setupModal(selector, options);
        setModal(modal);
        modal.off("onHide", updateStateCallback);
        modal.on("onHide", updateStateCallback);
        modal.show();
      }
    } catch (error) {
      console.error("Error in signInNear", error);
    }
  };

  const signInNearContract = async (isNft: boolean = false) => {
    try {
      if (walletSelector) {
        const wallet = await walletSelector.wallet();
        const params = { contractId: isNft ? NearNftContract : NearContract, accounts: [] };
        await wallet.signIn(params);
        const state = walletSelector.store.getState();
        updateState(state);
      } else {
        throw new Error("Wallet Selector not found");
      }
    } catch (error) {
      console.error("Error in signInNearContract", error);
    }
  };

  const disconnectNear = async () => {
    try {
      if (walletSelector && connectedAccount) {
        const wallet = await walletSelector.wallet();
        if (wallet) {
          return wallet.signOut().then(() => {
            setConnectedAccount(null);
            setContractId(null);
            if (modal) {
              modal.off("onHide", updateStateCallback);
            }
            dispatch(resetNearProofState());
          });
        }
      }
    } catch (e) {
      console.error("Error in disconnectNear", e);
    }
  };

  const updateStateCallback = async () => {
    if (walletSelector) {
      const state = walletSelector.store.getState();
      updateState(state);
    }
  };

  const updateState = async (state: WalletSelectorState) => {
    const signedAccount = state.accounts.find(account => account.active);
    setContractId(state.contract?.contractId || null);
    setConnectedAccount(signedAccount || null);
  };

  useEffect(() => {
    handleNearWalletChange();
    return () => {
      if (modal) {
        modal.off("onHide", updateStateCallback);
      }
    };
  }, []);

  useEffect(() => {
    const nearToken = localStorage.getItem(LOCAL_STORAGE_KEYS.nearToken);
    if (connectedAccount?.accountId && contractId && !nearToken) {
      dispatch(
        checkNearProof({
          address: connectedAccount.accountId,
          publicKey: connectedAccount.publicKey,
          chainId: SUPPORTED_NEAR_CHAIN_ID,
        }),
      ).then(res => {
        if (isErrorResult(res.payload)) {
          disconnectNear();
        }
      });
    }
  }, [connectedAccount?.accountId, contractId]);

  return (
    <NearContext.Provider
      value={{
        walletSelector,
        connectedAccount: connectedAccount?.accountId || undefined,
        contractId: contractId || undefined,
        disconnectNear,
        signInNear,
        signInNearContract,
      }}
    >
      {children}
    </NearContext.Provider>
  );
};

export const useNearContext = () => {
  const context = useContext(NearContext);
  if (!context) {
    throw new Error("Error in useNearContext");
  }
  return context;
};

export default NearProvider;

import { useState, useCallback } from "react";
import useSWR from "swr";
import { useParams } from "react-router-dom";
import { formatEther } from "viem";
import BigNumber from "bignumber.js";
import { address, fromNano } from "@ton/core";
import { toast } from "react-hot-toast";
import { useTonWallet } from "@tonconnect/ui-react";
import { IconButton } from "@sekmet/radix-ui-themes";
import { Icons } from "components";

import {
  useSendTonTransaction,
  useSendEvmTransaction,
  useShowModal,
  useSendSolanaTransaction,
  useSendRootstockTransaction,
  useSendKakarotTransaction,
  useSendBobaTransaction,
  useSendSomniaTransaction,
  useSendSkaleTransaction,
  useSendNearTransaction,
} from "./";

import { useAppDispatch, useAppSelector } from "store/store";
import {
  addPaymentAnsrForSurvey,
  getSurveyPaymentTrxData,
  getSurveyPaymentFiatData,
} from "store/create-survey/survey/actions";
import { resetCryptoPaymentData } from "store/create-survey/survey";
import { hideModal, showModal } from "store/modal";

import { selectCombinedData } from "../selectors";
import { isErrorResult } from "services";
import {
  SUPPORTED_NEAR_CHAIN_ID,
  SUPPORTED_ROOTSTOCK_CHAIN_ID,
  SUPPORTED_SOLANA_CHAIN_ID,
  SUPPORTED_TON_CHAIN_ID,
  SUPPORTED_KAKAROT_CHAIN_ID,
  SUPPORTED_BOBA_CHAIN_ID,
  SUPPORTED_SOMNIA_CHAIN_ID,
  SUPPORTED_SKALE_CHAIN_ID,
} from "configs/web3";

import { PaymentMethod, SurveyPaymentTrxData } from "store/create-survey/survey/types";
import { ModalProps } from "store/modal/types";
import { ActionModalProps } from "components/modals/components/action-modal/types";

const useHandleSurveyFunding = () => {
  const { reward, participants, paymentNetwork, cryptoPaymentData, createSurveyPending, totalRewardAmount } =
    useAppSelector(selectCombinedData);

  const [isSkaleModalVisible, setIsSkaleModalVisible] = useState<boolean>(false);

  const wallet = useTonWallet();

  const { surveyId } = useParams();

  const { payTonForSurvey } = useSendTonTransaction();
  const { evmTransactionLoading, handleSendEvnTransaction } = useSendEvmTransaction();
  const { handleSendSolanaTx } = useSendSolanaTransaction();
  const { handleSendRootstockTx } = useSendRootstockTransaction();
  const { handleSendKakarotTx } = useSendKakarotTransaction();
  const { handleSendBobaTx } = useSendBobaTransaction();
  const { handleSendSomniaTx } = useSendSomniaTransaction();
  const { handleSendSkaleTx } = useSendSkaleTransaction();
  const { handleSendNearTx } = useSendNearTransaction();
  const { showSuccessModal } = useShowModal();

  const dispatch = useAppDispatch();

  useSWR(
    cryptoPaymentData ? `/checkTokenExpire/${cryptoPaymentData.token}/${cryptoPaymentData.timeToExpire}/` : null,
    async () => {
      return checkTokenExpire();
    },
    { revalidateOnFocus: false, refreshInterval: 1000 },
  );

  const toggleSkaleModal = useCallback(() => {
    setIsSkaleModalVisible(prev => !prev);
  }, [setIsSkaleModalVisible]);

  const closeModalAndRestorePaymentData = () => {
    dispatch(resetCryptoPaymentData());
    dispatch(hideModal());
  };

  const checkTokenExpire = () => {
    if (cryptoPaymentData && Date.now() > cryptoPaymentData.timeToExpire * 1000) {
      closeModalAndRestorePaymentData();
    }
  };

  const handleSendTransaction = async () => {
    if (paymentNetwork?.chainId === SUPPORTED_TON_CHAIN_ID) {
      await payTonForSurvey();
    } else if (paymentNetwork?.chainId === SUPPORTED_SOLANA_CHAIN_ID) {
      await handleSendSolanaTx();
    } else if (paymentNetwork?.chainId === SUPPORTED_ROOTSTOCK_CHAIN_ID) {
      await handleSendRootstockTx();
    } else if (paymentNetwork?.chainId === SUPPORTED_KAKAROT_CHAIN_ID) {
      await handleSendKakarotTx();
    } else if (paymentNetwork?.chainId === SUPPORTED_BOBA_CHAIN_ID) {
      await handleSendBobaTx();
    } else if (paymentNetwork?.chainId === SUPPORTED_SOMNIA_CHAIN_ID) {
      await handleSendSomniaTx();
    } else if (paymentNetwork?.chainId === SUPPORTED_SKALE_CHAIN_ID) {
      await handleSendSkaleTx();
    } else if (paymentNetwork?.chainId === SUPPORTED_NEAR_CHAIN_ID) {
      await handleSendNearTx();
    } else {
      await handleSendEvnTransaction();
    }
  };

  const fetchCryptoPaymentData = async () => {
    if (surveyId) {
      if (paymentNetwork?.token === "ANSR") {
        dispatch(
          addPaymentAnsrForSurvey({
            surveyId,
            data: {
              participantLimit: participants,
              amount: reward.toString(),
            },
          }),
        ).then(res => {
          if (!isErrorResult(res.payload)) {
            showSuccessModal(true);
          }
        });
      } else if (paymentNetwork?.token === "TON" && !wallet) {
        toast.error("Please, connect TON Wallet.");
      } else {
        if (paymentNetwork && reward && participants) {
          const isTonProof = paymentNetwork?.chainId === SUPPORTED_TON_CHAIN_ID;
          const isSolanaProof = paymentNetwork?.chainId === SUPPORTED_SOLANA_CHAIN_ID;
          const isRootstockProof = paymentNetwork?.chainId === SUPPORTED_ROOTSTOCK_CHAIN_ID;
          const isKakarotProof = paymentNetwork?.chainId === SUPPORTED_KAKAROT_CHAIN_ID;
          const isBobaProof = paymentNetwork?.chainId === SUPPORTED_BOBA_CHAIN_ID;
          const isSomniaProof = paymentNetwork?.chainId === SUPPORTED_SOMNIA_CHAIN_ID;
          const isSkaleProof = paymentNetwork?.chainId === SUPPORTED_SKALE_CHAIN_ID;
          const isNearProof = paymentNetwork?.chainId === SUPPORTED_NEAR_CHAIN_ID;
          const walletAddress =
            paymentNetwork?.token === "TON" && wallet ? address(wallet.account.address).toString() : undefined;

          dispatch(
            getSurveyPaymentTrxData({
              data: {
                surveyId,
                chainId: paymentNetwork.chainId.toString(),
                amount: reward.toString(),
                participantLimit: participants,
                currencyType: PaymentMethod.CRYPTO,
                currencyCode: paymentNetwork.token,
                walletAddress,
              },
              isTonProof,
              isSolanaProof,
              isRootstockProof,
              isKakarotProof,
              isBobaProof,
              isSomniaProof,
              isSkaleProof,
              isNearProof,
            }),
          ).then(res => {
            if (!isErrorResult(res.payload)) {
              const { amountFee } = res.payload as SurveyPaymentTrxData;
              const formattedAmountFee =
                paymentNetwork?.token === "TON"
                  ? fromNano(amountFee ?? "0")
                  : paymentNetwork?.token === "SOL"
                    ? (amountFee ?? "0")
                    : paymentNetwork?.chainId === SUPPORTED_ROOTSTOCK_CHAIN_ID
                      ? BigNumber(formatEther(BigInt(amountFee || 0))).toFormatExtended(18)
                      : paymentNetwork?.chainId === SUPPORTED_KAKAROT_CHAIN_ID
                        ? BigNumber(formatEther(BigInt(amountFee || 0))).toFormatExtended(18)
                        : paymentNetwork?.chainId === SUPPORTED_BOBA_CHAIN_ID
                          ? BigNumber(formatEther(BigInt(amountFee || 0))).toFormatExtended(18)
                          : paymentNetwork?.chainId === SUPPORTED_SOMNIA_CHAIN_ID
                            ? BigNumber(formatEther(BigInt(amountFee || 0))).toFormatExtended(18)
                            : paymentNetwork?.chainId === SUPPORTED_SKALE_CHAIN_ID
                              ? BigNumber(formatEther(BigInt(amountFee || 0))).toFormatExtended(18)
                              : paymentNetwork?.chainId === SUPPORTED_NEAR_CHAIN_ID
                                ? amountFee
                                : BigNumber(formatEther(BigInt(amountFee || 0))).toFormatExtended(18);

              const _showModal = showModal as ModalProps<ActionModalProps>;

              const comissionDescription =
                paymentNetwork.chainId.toString() === SUPPORTED_SKALE_CHAIN_ID.toString()
                  ? "SFUEL"
                  : paymentNetwork?.token;

              const modalDescription =
                paymentNetwork.chainId.toString() === SUPPORTED_SKALE_CHAIN_ID.toString()
                  ? `Funding survey amount is ${BigNumber(totalRewardAmount).toFormatExtended(18)} ${paymentNetwork?.token}. Confirm transaction(-s) to continue.`
                  : `In addition to funding survey, we ask you to fund the transaction fees (${BigNumber(totalRewardAmount).toFormatExtended(18)} ${paymentNetwork?.token} + ${formattedAmountFee} ${comissionDescription}) to send the reward to each user who completes your survey`;

              dispatch(
                _showModal({
                  modalName: "actionModal",
                  title: (
                    <IconButton radius="full" style={{ background: "black" }}>
                      <Icons.DiamondIcon />
                    </IconButton>
                  ),
                  props: {
                    title: "Confirm Payment",
                    description: modalDescription,
                    btnArr: [
                      {
                        buttonText: "Cancel",
                        callback: closeModalAndRestorePaymentData,
                        variant: "secondary",
                      },
                      {
                        buttonText: "Confirm",
                        callback: handleSendTransaction,
                      },
                    ],
                  },
                }),
              );
            }
          });
        }
      }
    }
  };

  const fetchFiatPaymentData = () => {
    if (surveyId) {
      dispatch(
        getSurveyPaymentFiatData({
          surveyId,
          participantLimit: participants,
          currencyType: PaymentMethod.FIAT,
          currencyCode: "USD",
          amount: BigNumber(reward).toFormatExtended(18),
        }),
      );
    }
  };

  return {
    loading: createSurveyPending || evmTransactionLoading,
    fetchFiatPaymentData,
    fetchCryptoPaymentData,
    handleSendTransaction,
    handleSendNearTx,
    isSkaleModalVisible,
    toggleSkaleModal,
  };
};

export default useHandleSurveyFunding;

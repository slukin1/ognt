import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAccount, useWriteContract } from "wagmi";
import { toast } from "react-hot-toast";

import { useShowModal } from "./";

import store, { useAppDispatch } from "store/store";
import { confirmSurveyPaymentTrx } from "store/create-survey/survey/actions";
import { hideModal, partialUpdateModalProps } from "store/modal";
import { resetCryptoPaymentData } from "store/create-survey/survey";

import { SURVEY_ABI } from "configs/web3/abi/Survey";
import { isErrorResult } from "services";

import { PartialUpdateModalProps } from "store/modal/types";
import { ActionModalProps } from "components/modals/components/action-modal/types";
import { CONTRACTS_ADDRESSES, CONTRACTS_NAMES, SUPPORTED_SOMNIA_CHAIN_ID } from "configs/web3";

const useSendSomniaTransaction = () => {
  const contractAddress = CONTRACTS_ADDRESSES[SUPPORTED_SOMNIA_CHAIN_ID][CONTRACTS_NAMES.SURVEY] as `0x${string}`;
  const [loading, setLoading] = useState(false);

  const { address } = useAccount();

  const { showSuccessModal } = useShowModal();

  const { writeContract } = useWriteContract();

  const { surveyId } = useParams();

  const dispatch = useAppDispatch();

  const closeModalAndRestorePaymentData = () => {
    dispatch(resetCryptoPaymentData());
    dispatch(hideModal());
  };

  const handleConfirmPayment = (txHash: string, surveyId: string, counter: number) => {
    const _partialProps = partialUpdateModalProps as PartialUpdateModalProps<ActionModalProps>;
    let count = counter;
    dispatch(confirmSurveyPaymentTrx({ data: { surveyId, txHash }, isSomniaProof: true })).then(res => {
      if (!isErrorResult(res.payload)) {
        toast.dismiss();
        showSuccessModal();
      } else {
        count = count - 1;
        if (count < 0) {
          toast.dismiss();
          setLoading(false);
          closeModalAndRestorePaymentData();
          dispatch(_partialProps({ isLoading: false }));
          toast.error("Please, wait 1-2 minutes and transaction will appears on setting page");
        } else {
          setTimeout(() => {
            handleConfirmPayment(txHash, surveyId, count);
          }, 5000);
        }
      }
    });
  };

  const handleSendSomniaTx = async () => {
    const cryptoPaymentData = store.getState().createSurvey.cryptoPaymentData;
    if (cryptoPaymentData && surveyId && address) {
      const _partialProps = partialUpdateModalProps as PartialUpdateModalProps<ActionModalProps>;
      setLoading(true);
      dispatch(_partialProps({ isLoading: true }));

      writeContract(
        {
          abi: SURVEY_ABI,
          address: contractAddress,
          functionName: "createSurvey",
          args: [
            cryptoPaymentData.signature,
            cryptoPaymentData.token,
            BigInt(cryptoPaymentData.timeToExpire),
            cryptoPaymentData.owner as `0x${string}`,
            cryptoPaymentData.surveyId,
            BigInt(cryptoPaymentData.participantsLimit),
            BigInt(cryptoPaymentData.rewardAmount),
            cryptoPaymentData.surveyHash,
            BigInt(cryptoPaymentData.amountFee),
          ],
          value:
            BigInt(cryptoPaymentData.participantsLimit) * BigInt(cryptoPaymentData.rewardAmount) +
            BigInt(cryptoPaymentData.amountFee),
        },
        {
          onSuccess: txHash => {
            handleConfirmPayment(txHash, surveyId, 12);
          },
          onError: error => {
            toast.error("Transaction failed. Please try again.");
            console.error("handleSendSomniaTx", error);
            setLoading(false);
            dispatch(_partialProps({ isLoading: false }));
          },
        },
      );
    }
  };

  return { evmTransactionLoading: loading, handleSendSomniaTx };
};

export default useSendSomniaTransaction;

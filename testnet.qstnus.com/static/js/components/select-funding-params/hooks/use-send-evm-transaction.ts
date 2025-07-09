import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

import { useSurveyContract } from "hooks";
import useShowModal from "./use-show-modal";

import { isErrorResult } from "services";

import store, { useAppDispatch } from "store/store";
import { hideModal, partialUpdateModalProps } from "store/modal";
import { confirmSurveyPaymentTrx } from "store/create-survey/survey/actions";
import { resetCryptoPaymentData } from "store/create-survey/survey";

import { PartialUpdateModalProps } from "store/modal/types";
import { ActionModalProps } from "components/modals/components/action-modal/types";

const useSendEvmTransaction = () => {
  const [loading, setLoading] = useState(false);

  const { surveyId } = useParams();

  const dispatch = useAppDispatch();

  const { checkCreateSurvey, createSurvey } = useSurveyContract();
  const { showSuccessModal } = useShowModal();

  const closeModalAndRestorePaymentData = () => {
    dispatch(resetCryptoPaymentData());
    dispatch(hideModal());
  };

  const handleSendEvnTransaction = async () => {
    const cryptoPaymentData = store.getState().createSurvey.cryptoPaymentData;
    if (cryptoPaymentData && surveyId) {
      const _partialProps = partialUpdateModalProps as PartialUpdateModalProps<ActionModalProps>;
      setLoading(true);
      dispatch(_partialProps({ isLoading: true }));
      const checkResult = await checkCreateSurvey(cryptoPaymentData);
      if (checkResult) {
        const transaction = await createSurvey(cryptoPaymentData);
        if (transaction && transaction.status === "success") {
          dispatch(
            confirmSurveyPaymentTrx({ data: { surveyId, txHash: transaction.transactionHash }, isTonProof: false }),
          ).then(res => {
            if (!isErrorResult(res.payload)) {
              showSuccessModal();
              return;
            }
          });
        } else {
          toast.error("Transaction failed. Please try again.");
        }
      } else {
        closeModalAndRestorePaymentData();
      }
      setLoading(false);
      dispatch(_partialProps({ isLoading: false }));
    }
  };

  return { evmTransactionLoading: loading, handleSendEvnTransaction };
};

export default useSendEvmTransaction;

import { useState } from "react";
import { useParams } from "react-router-dom";
import { utils } from "near-api-js/";
import { toast } from "react-hot-toast";

import { useShowModal } from "./";

import { useNearContext } from "context";

import store, { useAppDispatch } from "store/store";
import { confirmSurveyPaymentTrx } from "store/create-survey/survey/actions";
import { hideModal, partialUpdateModalProps } from "store/modal";
import { resetCryptoPaymentData } from "store/create-survey/survey";

import { isErrorResult } from "services";
import { NearContract } from "configs/web3";

import { PartialUpdateModalProps } from "store/modal/types";
import { ActionModalProps } from "components/modals/components/action-modal/types";
import { FinalExecutionOutcome } from "@near-wallet-selector/core";

const NEAR_TRANSACTION_GAS = "30000000000000";

const useSendNearTransaction = () => {
  const [loading, setLoading] = useState(false);

  const { walletSelector } = useNearContext();

  const { showSuccessModal } = useShowModal();

  const { surveyId } = useParams();

  const dispatch = useAppDispatch();

  const closeModalAndRestorePaymentData = () => {
    dispatch(resetCryptoPaymentData());
    dispatch(hideModal());
  };

  const handleConfirmPayment = (txHash: string, surveyId: string, counter: number) => {
    const _partialProps = partialUpdateModalProps as PartialUpdateModalProps<ActionModalProps>;
    let count = counter;
    dispatch(confirmSurveyPaymentTrx({ data: { surveyId, txHash } })).then(res => {
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

  const handleSendNearTx = async () => {
    try {
      const cryptoPaymentData = store.getState().createSurvey.cryptoPaymentData;

      if (surveyId && walletSelector && cryptoPaymentData) {
        const { participantsLimit, amountFee, rewardAmount } = cryptoPaymentData;

        const gas_fee = utils.format.parseNearAmount(amountFee);
        const reward_amount = utils.format.parseNearAmount(rewardAmount);
        const deposit =
          utils.format.parseNearAmount((+rewardAmount * +participantsLimit + +amountFee).toString()) ?? "0";

        const _partialProps = partialUpdateModalProps as PartialUpdateModalProps<ActionModalProps>;
        setLoading(true);
        dispatch(_partialProps({ isLoading: true }));
        const selectedWallet = await walletSelector.wallet();

        const tx = await selectedWallet.signAndSendTransaction({
          receiverId: NearContract,
          actions: [
            {
              type: "FunctionCall",
              params: {
                methodName: "create_survey",
                args: {
                  survey_id: surveyId,
                  participants_limit: +participantsLimit,
                  gas_fee,
                  reward_amount,
                },
                gas: NEAR_TRANSACTION_GAS,
                deposit,
              },
            },
          ],
        });

        const { transaction } = tx as FinalExecutionOutcome;

        if (transaction.hash) {
          handleConfirmPayment(transaction.hash, surveyId, 8);
        }
      }
    } catch (error) {
      console.error("Error in handleSendNearTx", error);
    }
  };

  return { loading, handleSendNearTx, handleConfirmPayment };
};

export default useSendNearTransaction;

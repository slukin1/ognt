import { beginCell } from "@ton/core";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useTonConnectUI, useTonWallet, TonConnectError } from "@tonconnect/ui-react";

import { useShowModal } from "../";

import { useGetTonClient } from "hooks";

import store, { useAppDispatch } from "store/store";
import { confirmSurveyPaymentTrx } from "store/create-survey/survey/actions";
import { partialUpdateModalProps } from "store/modal";

import { tonInitAddress } from "configs";
import { handleTonTransactionError } from "utils";
import { isErrorResult } from "services";
import { SUPPORTED_TON_NETWORK } from "configs/web3";

import { SurveysManager, storeNewSurveyRequest } from "types/ton/survey-manager";
import { PartialUpdateModalProps } from "store/modal/types";
import { ActionModalProps } from "components/modals/components/action-modal/types";

const useSendTonTransaction = () => {
  const { surveyId } = useParams();

  const wallet = useTonWallet();
  const [tonConnectUI] = useTonConnectUI();
  const { tonClient } = useGetTonClient();

  const dispatch = useAppDispatch();

  const { showSuccessModal } = useShowModal();

  const surveyManagerInitAddress = tonInitAddress[SUPPORTED_TON_NETWORK];

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

  const payTonForSurvey = async () => {
    const _partialProps = partialUpdateModalProps as PartialUpdateModalProps<ActionModalProps>;
    const cryptoPaymentData = store.getState().createSurvey.cryptoPaymentData;
    if (tonClient && wallet && cryptoPaymentData && surveyId) {
      try {
        dispatch(_partialProps({ isLoading: true }));
        const contract = await SurveysManager.fromInit(surveyManagerInitAddress);

        const body = beginCell()
          .store(
            storeNewSurveyRequest({
              $$type: "NewSurveyRequest",
              participantsLimit: BigInt(cryptoPaymentData.participantsLimit),
              rewardAmount: BigInt(cryptoPaymentData.rewardAmount),
              surveyHash: beginCell().storeStringTail(cryptoPaymentData.surveyHash).endCell(),
            }),
          )
          .endCell();

        const transaction = await tonConnectUI.sendTransaction({
          messages: [
            {
              address: contract.address.toString(),
              amount: (
                BigInt(cryptoPaymentData.rewardAmount) * BigInt(cryptoPaymentData.participantsLimit) +
                BigInt(cryptoPaymentData.amountFee)
              ).toString(),
              payload: body.toBoc().toString("base64"),
            },
          ],
          validUntil: Math.round(Date.now() / 1000) + 600,
        });

        if (transaction.boc) {
          toast.loading("Confirmation may take up to 1 minute. Please wait...");
          handleConfirmPayment(transaction.boc, surveyId, 12);
        }
      } catch (e) {
        if (e instanceof TonConnectError) {
          handleTonTransactionError(e);
        }
        dispatch(_partialProps({ isLoading: false }));

        console.error(e);
      }
    }
  };

  return { payTonForSurvey };
};

export default useSendTonTransaction;

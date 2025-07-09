import { useParams } from "react-router-dom";
import * as anchor from "@coral-xyz/anchor";
import { Buffer } from "buffer";
import { toast } from "react-hot-toast";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";

import { useShowModal } from "../";

import store, { useAppDispatch } from "store/store";
import { confirmSurveyPaymentTrx } from "store/create-survey/survey/actions";
import { partialUpdateModalProps } from "store/modal";

import { isErrorResult } from "services";
import { PROGRAM_ID } from "configs/web3";

import { PartialUpdateModalProps } from "store/modal/types";
import { ActionModalProps } from "components/modals/components/action-modal/types";

import QstnSurveyIDL from "configs/idl/qstn-survey.json";

const useSendSolanaTransaction = () => {
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();

  const dispatch = useAppDispatch();

  const program = new anchor.Program(QstnSurveyIDL as anchor.Idl, PROGRAM_ID, { connection });

  const { surveyId } = useParams();

  const { showSuccessModal } = useShowModal();

  const handleConfirmPayment = (txHash: string, surveyId: string, counter: number) => {
    const _partialProps = partialUpdateModalProps as PartialUpdateModalProps<ActionModalProps>;
    let count = counter;
    dispatch(confirmSurveyPaymentTrx({ data: { surveyId, txHash }, isSolanaProof: true })).then(res => {
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

  const handleSendSolanaTx = async () => {
    const _partialProps = partialUpdateModalProps as PartialUpdateModalProps<ActionModalProps>;
    try {
      const cryptoPaymentData = store.getState().createSurvey.cryptoPaymentData;

      if (publicKey && surveyId && cryptoPaymentData) {
        const { participantsLimit, rewardAmount, owner, amountFee } = cryptoPaymentData;

        const controller = new PublicKey(owner);
        dispatch(_partialProps({ isLoading: true }));

        const counter = new anchor.BN(Date.now() / 1000);

        const [surveyAccount] = anchor.web3.PublicKey.findProgramAddressSync(
          [Buffer.from("survey"), publicKey!.toBuffer(), counter.toArrayLike(Buffer, "le", 8)],
          program.programId,
        );

        const [fundingAccount] = PublicKey.findProgramAddressSync(
          [Buffer.from("vault"), surveyAccount.toBuffer(), publicKey!.toBuffer()],
          program.programId,
        );

        const transaction = await program.methods
          .initSurvey(
            counter,
            surveyId,
            controller,
            new anchor.BN(participantsLimit),
            new anchor.BN(+rewardAmount * anchor.web3.LAMPORTS_PER_SOL),
          )
          .accounts({
            surveyAccount,
            fundingAccount,
            caller: publicKey,
            systemProgram: anchor.web3.SystemProgram.programId,
          })
          .transaction();

        const transactionSignature = await sendTransaction(transaction, connection);
        if (transactionSignature) {
          const secondTransaction = await program.methods
            .fundSurvey(
              new anchor.BN(+rewardAmount * participantsLimit * anchor.web3.LAMPORTS_PER_SOL),
              new anchor.BN(+amountFee * anchor.web3.LAMPORTS_PER_SOL),
            )
            .accounts({
              surveyAccount,
              fundingAccount,
              caller: publicKey,
              controller,
              systemProgram: anchor.web3.SystemProgram.programId,
            })
            .transaction();
          const secondTransactionSignature = await sendTransaction(secondTransaction, connection);
          if (secondTransactionSignature) {
            toast.loading("Confirmation may take up to 1 minute. Please wait...");
            handleConfirmPayment(secondTransactionSignature, surveyId, 12);
          }
        }
      }
    } catch (e) {
      dispatch(_partialProps({ isLoading: false }));
      console.error("Error in handleSendSolanaTx", e);
    }
  };

  return { handleSendSolanaTx };
};

export default useSendSolanaTransaction;

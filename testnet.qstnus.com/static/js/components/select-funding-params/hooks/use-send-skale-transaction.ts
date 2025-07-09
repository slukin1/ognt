import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAccount, useWriteContract } from "wagmi";
import { readContract } from "@wagmi/core";
import { SkaleWagmiConfigs } from "configs/web3/wagmi-core-configs";
import { toast } from "react-hot-toast";

import { useShowModal } from "./";

import store, { useAppDispatch } from "store/store";
import { confirmSurveyPaymentTrx } from "store/create-survey/survey/actions";
import { hideModal, partialUpdateModalProps } from "store/modal";
import { resetCryptoPaymentData } from "store/create-survey/survey";

import { SURVEY_ERC20_ABI } from "configs/web3/abi/survey-erc20-abi";
import { ERC20_ABI } from "configs/web3/abi/token-abi";
import { SKALE_USDC_ADDRESS } from "configs/web3/constants";
import { parseUnits } from "viem";

import { isErrorResult } from "services";

import { PartialUpdateModalProps } from "store/modal/types";
import { ActionModalProps } from "components/modals/components/action-modal/types";
import { CONTRACTS_ADDRESSES, CONTRACTS_NAMES, SUPPORTED_SKALE_CHAIN_ID } from "configs/web3";
import BigNumber from "bignumber.js";

const useSendSkaleTransaction = () => {
  const contractAddress = CONTRACTS_ADDRESSES[SUPPORTED_SKALE_CHAIN_ID][CONTRACTS_NAMES.SURVEY] as `0x${string}`;
  const [loading, setLoading] = useState(false);

  const { address } = useAccount();

  const { showSuccessModal } = useShowModal();

  const { writeContract, writeContractAsync } = useWriteContract();

  const { surveyId } = useParams();

  const dispatch = useAppDispatch();

  const closeModalAndRestorePaymentData = () => {
    dispatch(resetCryptoPaymentData());
    dispatch(hideModal());
  };

  const handleConfirmPayment = (txHash: string, surveyId: string, counter: number) => {
    const _partialProps = partialUpdateModalProps as PartialUpdateModalProps<ActionModalProps>;
    let count = counter;
    dispatch(confirmSurveyPaymentTrx({ data: { surveyId, txHash }, isSkaleProof: true })).then(res => {
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

  const handleSendSkaleTx = async () => {
    const cryptoPaymentData = store.getState().createSurvey.cryptoPaymentData;
    if (cryptoPaymentData && surveyId && address) {
      const _partialProps = partialUpdateModalProps as PartialUpdateModalProps<ActionModalProps>;
      setLoading(true);
      dispatch(_partialProps({ isLoading: true }));

      const allowance = await readContract(SkaleWagmiConfigs, {
        abi: ERC20_ABI,
        address: SKALE_USDC_ADDRESS,
        functionName: "allowance",
        args: [address, contractAddress],
      });

      if (BigNumber(allowance.toString()).isLessThan(BigNumber(cryptoPaymentData.rewardAmount))) {
        try {
          await writeContractAsync({
            abi: ERC20_ABI,
            address: SKALE_USDC_ADDRESS,
            functionName: "approve",
            args: [contractAddress, BigInt(parseUnits("1000000000", 6))],
            // args: [contractAddress, BigInt(cryptoPaymentData.rewardAmount)],
          });
          toast.success("Approval successful! Please wait a moment and confirm the next transaction.");

          await new Promise(resolve => setTimeout(resolve, 3000));
        } catch (error) {
          toast.error("Approval transaction failed. Please try again.");
          console.error("handleSendSkaleTx", error);
          setLoading(false);
          dispatch(_partialProps({ isLoading: false }));
          return;
        }
      }

      writeContract(
        {
          abi: SURVEY_ERC20_ABI,
          address: contractAddress,
          functionName: "createSurvey",
          args: [
            cryptoPaymentData.signature,
            cryptoPaymentData.token,
            BigInt(cryptoPaymentData.timeToExpire),
            cryptoPaymentData.owner as `0x${string}`,
            cryptoPaymentData.surveyId,
            BigInt(cryptoPaymentData.participantsLimit),
            SKALE_USDC_ADDRESS,
            BigInt(cryptoPaymentData.rewardAmount),
            cryptoPaymentData.surveyHash,
          ],
        },
        {
          onSuccess: txHash => {
            handleConfirmPayment(txHash, surveyId, 12);
          },
          onError: error => {
            toast.error("Create transaction failed. Please try again.");
            console.error("handleSendSkaleTx", error);
            setLoading(false);
            dispatch(_partialProps({ isLoading: false }));
          },
        },
      );
    }
  };

  return { evmTransactionLoading: loading, handleSendSkaleTx };
};

export default useSendSkaleTransaction;

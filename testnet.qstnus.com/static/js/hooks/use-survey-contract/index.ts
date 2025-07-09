import { useMagic } from "context";

import { useAppDispatch } from "store/store";

import { handleViemSimulateError } from "utils";

import { CONTRACTS_NAMES, CONTRACTS_ADDRESSES } from "configs/web3/constants";
import { SURVEY_ABI } from "configs/web3/abi/Survey";

import { SurveyPaymentTrxData } from "store/create-survey/survey/types";
import { restoreTemporaryHiddenModal, temporaryHideModal } from "store/modal";

export const useSurveyContract = () => {
  const { client, chainId, publicAddress } = useMagic();
  const contractAddress = CONTRACTS_ADDRESSES[chainId][CONTRACTS_NAMES.SURVEY] as `0x${string}`;

  const dispatch = useAppDispatch();

  const createSurveyRequest = async (params: SurveyPaymentTrxData) => {
    return client.simulateContract({
      account: publicAddress as `0x${string}`,
      address: contractAddress,
      abi: SURVEY_ABI,
      functionName: "createSurvey",
      args: [
        params.signature,
        params.token,
        BigInt(params.timeToExpire),
        params.owner as `0x${string}`,
        params.surveyId,
        BigInt(params.participantsLimit),
        BigInt(params.rewardAmount),
        params.surveyHash,
        BigInt(params.amountFee),
      ],
      value: BigInt(params.participantsLimit) * BigInt(params.rewardAmount) + BigInt(params.amountFee),
    });
  };

  const checkCreateSurvey = async (params: SurveyPaymentTrxData) => {
    if (client) {
      try {
        const { request } = await createSurveyRequest(params);
        if (request) {
          return true;
        }
      } catch (err) {
        handleViemSimulateError(err);
        return false;
      }
    }
    return false;
  };

  const createSurvey = async (params: SurveyPaymentTrxData) => {
    if (client) {
      try {
        const { request } = await createSurveyRequest(params);
        if (request) {
          dispatch(temporaryHideModal());
          const hash = await client.writeContract(request);
          dispatch(restoreTemporaryHiddenModal());
          const transaction = await client.waitForTransactionReceipt({ hash });
          return transaction;
        }
      } catch (error) {
        dispatch(restoreTemporaryHiddenModal());
        handleViemSimulateError(error);
        console.error("Create survey error: ", error);
      }
    }
  };

  return {
    createSurvey,
    checkCreateSurvey,
  };
};

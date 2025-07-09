import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useMagic } from "context";

import { useGetSearchParams } from "hooks";

import { useAppDispatch } from "store/store";
import { loginUser, setBiconomyWallet } from "store/auth/actions";

import { isErrorResult } from "services";

import { ROUTES, SEARCH_PARAMS } from "router/routes";
import { SUPPORTED_POLYGON_CHAIN_ID } from "configs/web3";

import { LoginFormPayload } from "pages/login/types";
import { AccountType, LoginUserResponse, Recipient } from "store/auth/types";
import { ProfileData } from "store/profile/types";

export const useLoginQstn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { magic, getBiconomyAccount } = useMagic();
  const { currentSearchParams: currentSurveyId } = useGetSearchParams(SEARCH_PARAMS.surveyId);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const magicLogin = async ({ data: { email }, type }: LoginFormPayload) => {
    setIsLoading(true);
    try {
      const magicToken = await magic.auth.loginWithMagicLink({
        email,
      });

      if (magicToken) {
        const biconomyPublicAddress = await getBiconomyAccount();
        dispatch(loginUser({ email, magicToken, type, isAnon: type === AccountType.user ? true : false })).then(res => {
          setIsLoading(false);
          if (!isErrorResult(res.payload)) {
            const { user } = res.payload as LoginUserResponse;
            if (
              !user.wallets?.some(
                ({ address, recipient }) => address === biconomyPublicAddress || recipient === Recipient.biconomy,
              ) &&
              biconomyPublicAddress
            ) {
              dispatch(
                setBiconomyWallet({
                  address: biconomyPublicAddress,
                  recipient: Recipient.biconomy,
                  chainId: SUPPORTED_POLYGON_CHAIN_ID.toString(),
                }),
              ).then(response => {
                if (!isErrorResult(response.payload)) {
                  checkRedirectUrl(user);
                }
              });
            } else {
              checkRedirectUrl(user);
            }
          }
        });
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error in magicLogin:,", error);
    }
  };

  const checkRedirectUrl = (user: ProfileData) => {
    if (currentSurveyId && user.type === AccountType.user) {
      navigate(`/${ROUTES.user}/${ROUTES.surveyFilling}/${currentSurveyId}`);
    } else {
      navigate(`/${ROUTES.discover}`);
    }
  };

  return { isLoading, magicLogin };
};

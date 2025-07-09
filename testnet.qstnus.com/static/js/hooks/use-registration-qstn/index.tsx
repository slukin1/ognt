import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useMagic } from "context";

import { useGetSearchParams } from "hooks";

import { useAppDispatch } from "store/store";
import { registerUser } from "store/auth/actions";

import { ROUTES, SEARCH_PARAMS } from "router/routes";

import { isErrorResult } from "services";
import { AccountType } from "store/auth/types";
import { MagicRegistrationPayload } from "./types";
import { AccountStatus } from "store/profile/types";

export const useRegistrationQstn = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const { magic, connectWallets } = useMagic();

  const { currentSearchParams: currentSurveyId } = useGetSearchParams(SEARCH_PARAMS.surveyId);
  const { currentSearchParams: refId } = useGetSearchParams(SEARCH_PARAMS.refId);

  const dispatch = useAppDispatch();

  const magicRegistration = async (formData: MagicRegistrationPayload) => {
    setIsLoading(true);
    const { type, data } = formData;
    const registrationPayload = refId && !isNaN(+refId) ? { ...data, type, refId: +refId } : { ...data, type };

    try {
      const magicToken = await magic.auth.loginWithMagicLink({
        email: data.email,
      });

      const biconomyAddress = await connectWallets();

      if (magicToken && biconomyAddress) {
        dispatch(registerUser({ ...registrationPayload, magicToken, biconomyAddress, isAnon: true })).then(res => {
          setIsLoading(false);
          if (!isErrorResult(res.payload)) {
            const { user } = res.payload!;
            if (user.type === AccountType.business && user.status === AccountStatus.pending) {
              navigate(`/${ROUTES.createAccount}/${ROUTES.business}/${ROUTES.onboarding}`);
            } else {
              if (currentSurveyId && user.type === AccountType.user) {
                // 111
                // navigate(`/${ROUTES.user}/${ROUTES.surveyFilling}/${currentSurveyId}`);
                navigate(`/${ROUTES.onboardingInvite}?surveyId=${currentSurveyId}`);
              } else {
                if (user.type === AccountType.user) {
                  // 111
                  // navigate(`/${ROUTES.discover}`);
                  navigate(`/${ROUTES.onboardingInvite}`);
                } else {
                  navigate(`/${ROUTES.discover}`);
                }
              }
            }
          }
        });
      } else {
        throw new Error("Error in magicRegistration: magicToken or biconomyAddress is not available");
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error in magicLogin:", error);
    }
  };

  return { isLoading, magicRegistration };
};

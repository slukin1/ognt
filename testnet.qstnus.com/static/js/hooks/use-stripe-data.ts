import { useState, useEffect } from "react";
import { loadConnectAndInitialize, StripeConnectInstance } from "@stripe/connect-js";

import { useAppDispatch, useAppSelector } from "store/store";
import { getStripeAccountId, getStripeSessionSecret } from "store/user/complete-survey/actions";
import { StipeConnectionResponse } from "store/user/complete-survey/types";

import { isErrorResult } from "services";

export const useStripeData = () => {
  const profileData = useAppSelector(state => state.profile.profileData);
  const stripeData = useAppSelector(state => state.completeSurvey.stripeData);
  const stripeDataLoading = useAppSelector(state => state.completeSurvey.pending);

  const [hasStripeWallet, setHasStripeWallet] = useState<boolean>(false);
  const [stripeWallet, setStripeWallet] = useState<string | null>(null);
  const [internalLoading, setInternalLoading] = useState<boolean>(false);
  const [stripeConnectInstance, setStripeConnectInstance] = useState<StripeConnectInstance | null>();

  const dispatch = useAppDispatch();

  useEffect(() => {
    checkStripeWallet();
  }, [profileData, profileData?.wallets]);

  const checkStripeWallet = () => {
    if (profileData && profileData.wallets && profileData.wallets.length > 0) {
      const wallets = profileData.wallets;
      const stripeWallet = wallets.find(wallet => wallet.chainId === "stripe");
      if (stripeWallet) {
        setHasStripeWallet(true);
        setStripeWallet(stripeWallet.address);
      } else {
        setHasStripeWallet(false);
      }
    } else {
      setHasStripeWallet(false);
    }
  };

  const handleGetStripeAccountId = () => {
    setInternalLoading(true);
    dispatch(getStripeAccountId())
      .then(res => {
        if (res && res.payload && !isErrorResult(res.payload)) {
          const { accountId } = res.payload as StipeConnectionResponse;
          dispatch(getStripeSessionSecret({ accountId })).finally(() => {
            setInternalLoading(false);
          });
        }
      })
      .catch(() => {
        setInternalLoading(false);
      });
  };

  const handleStripeConnection = async () => {
    try {
      if (stripeData && stripeData.clientSecret) {
        const clientSecret: string = stripeData.clientSecret;

        const getPromiseString = (): Promise<string> => {
          return Promise.resolve(clientSecret);
        };

        const instance = loadConnectAndInitialize({
          publishableKey: process.env.REACT_APP_STRIPE_PUBLIC_KEY || "",
          fetchClientSecret: getPromiseString,
          fonts: [
            {
              cssSrc:
                "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
            },
          ],
          appearance: {
            overlays: "dialog",
            variables: {
              colorPrimary: "#A855F7",
              fontFamily: "Inter",
            },
          },
        });

        if (instance) {
          setStripeConnectInstance(instance);
        } else {
          throw new Error("Stripe connection instance is not initialized");
        }
      } else {
        throw new Error("Stripe data is not initialized");
      }
    } catch (error) {
      setStripeConnectInstance(null);
      console.error("handleStripeConnection: ", error);
    }
  };

  return {
    stripeData,
    hasStripeWallet,
    stripeWallet,
    handleGetStripeAccountId,
    handleStripeConnection,
    stripeConnectInstance,
    loading: stripeDataLoading || internalLoading,
  };
};

// import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";

import { stripePromise } from "services";

import { useAppSelector } from "store/store";
import { selectCombinedData } from "../selectors";

import { Loader } from "components";
import StripePaymentForm from "./StripePaymentForm";

import type { StripeElementsOptions } from "@stripe/stripe-js";
import { useTheme } from "context";

const StripePayment: React.FC = () => {
  const { fiatPaymentData, createSurveyPending } = useAppSelector(selectCombinedData);
  const { theme } = useTheme();

  const options: StripeElementsOptions = {
    clientSecret: fiatPaymentData?.owner,
    appearance: {
      theme: theme === "light" ? "stripe" : "night",
      variables: {
        colorIcon: "#6772e5",
        colorBackground: theme === "light" ? "#ededed" : "#18181b",
      },
    },
  };

  if (!fiatPaymentData || !fiatPaymentData.owner || createSurveyPending) {
    return <Loader />;
  }

  return (
    <Elements stripe={stripePromise} options={options}>
      <StripePaymentForm secret={fiatPaymentData?.owner} />
    </Elements>
  );
};

export default StripePayment;

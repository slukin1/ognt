import { useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import { Flex } from "@sekmet/radix-ui-themes";

import { stripePromise } from "services";

import { ROUTES } from "router/routes";
import { Skeleton } from "components";
import StripeSubscriptionsForm from "./StripeSubscriptionsForm";
import { useGetSubscriptionsIntent } from "../../hooks";

import type { StripeSubscriptionsProps } from "./types";
import type { StripeElementsOptions } from "@stripe/stripe-js";
import { useTheme } from "context";

const StripeSubscriptions: React.FC<StripeSubscriptionsProps> = ({ type }) => {
  const { intent, isLoading } = useGetSubscriptionsIntent(type);
  const { theme } = useTheme();

  const navigate = useNavigate();

  const options: StripeElementsOptions = {
    clientSecret: intent?.clientSecret,
    appearance: {
      theme: theme === "light" ? "stripe" : "night",
      variables: {
        colorIcon: "#6772e5",
        colorBackground: theme === "light" ? "#ededed" : "#18181b",
      },
    },
  };

  useEffect(() => {
    if (intent && intent.subscriptionId && !intent.clientSecret) {
      navigate(`/${ROUTES.business}/${ROUTES.dashboard}/${ROUTES.subscriptions}`);
    }
  }, [intent]);

  if (!intent || !intent.clientSecret || isLoading) {
    return (
      <Flex direction="column" gap="3">
        <Skeleton classNames="w-full h-[45px] min-h-[45px]" />
        <Skeleton classNames="w-full h-[45px] min-h-[45px]" />
        <Skeleton classNames="w-full h-[45px] min-h-[45px]" />
        <Skeleton classNames="w-full h-[45px] min-h-[45px]" />
        <Skeleton classNames="w-full h-[45px] min-h-[45px]" />
      </Flex>
    );
  } else {
    return (
      <Elements stripe={stripePromise} options={options}>
        <StripeSubscriptionsForm secret={intent.clientSecret} />
      </Elements>
    );
  }
};

export default StripeSubscriptions;

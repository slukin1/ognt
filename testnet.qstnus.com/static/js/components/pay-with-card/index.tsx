import { Strong, Text } from "@sekmet/radix-ui-themes";

import { Skeleton } from "components";
import { StripeSubscriptions, SubscriptionDetails } from "./components";

import { CHOOSE_PAYMENT_COMPONENT_TYPES } from "components/choose-payment-type/types";
import { PayWithCardProps } from "./types";

const PayWithCard: React.FC<PayWithCardProps> = ({ type, subscriptionsPayload }) => {
  return (
    <>
      <Text size={"6"}>
        <Strong>Pay with Card</Strong>
      </Text>
      <Text size={"2"}>We use Stripe to process credit card payments securely</Text>
      <section
        className="mt-6 grid w-full flex-grow gap-4
        max-md:gap-4 md:grid-cols-2"
      >
        {type === CHOOSE_PAYMENT_COMPONENT_TYPES.PLAN && subscriptionsPayload ? (
          <StripeSubscriptions type={subscriptionsPayload.type} />
        ) : (
          <>
            <Skeleton classNames="w-full h-45" />
            <Skeleton classNames="w-full h-45" />
            <Skeleton classNames="w-full h-45" />
            <Skeleton classNames="w-full h-45" />
            <Skeleton classNames="w-full h-45" />
          </>
        )}

        {type === CHOOSE_PAYMENT_COMPONENT_TYPES.PLAN && subscriptionsPayload && (
          <SubscriptionDetails planDetails={subscriptionsPayload.planDetails} />
        )}
      </section>
    </>
  );
};

export default PayWithCard;

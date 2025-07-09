import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useFetchPlans } from "./hooks";

import { StepsProgressBar, ChoosePaymentType, PayWithCard } from "components";
import { Icons } from "components/icons";
import { SelectPlan } from "./components";

import { CHOOSE_PAYMENT_COMPONENT_TYPES, PAYMENT_TYPES } from "components/choose-payment-type/types";
import type { SubscriptionDetails } from "components/pay-with-card/components/subscription-details/types";

const SubscriptionPlans: React.FC = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedPlanDetails, setSelectedPlanDetails] = useState<SubscriptionDetails | null>(null);
  // The "paymentType" field will be useful if it is decided to introduce cryptocurrency payments for the plan
  // eslint-disable-next-line
  const [paymentType, setPaymentType] = useState<PAYMENT_TYPES | null>(null);

  const { updatePlans } = useFetchPlans();

  const backButtonHandler = () => {
    switch (step) {
      case 1:
      case 2:
      default:
        setStep(1);
        updatePlans();
        break;
      case 3:
        setStep(2);
    }
  };

  const choosePaymentTypeHandler = (paymentType: PAYMENT_TYPES) => {
    setPaymentType(paymentType);
    setStep(3);
  };

  const stepRenderHandler = () => {
    switch (step) {
      case 1:
      default:
        return <SelectPlan {...{ setStep, setSelectedPlan, setSelectedPlanDetails }} />;
      case 2:
        return (
          <ChoosePaymentType type={CHOOSE_PAYMENT_COMPONENT_TYPES.PLAN} chooseHandler={choosePaymentTypeHandler} />
        );
      case 3:
        return selectedPlan && selectedPlanDetails ? (
          <PayWithCard
            type={CHOOSE_PAYMENT_COMPONENT_TYPES.PLAN}
            subscriptionsPayload={{ type: selectedPlan, planDetails: selectedPlanDetails }}
          />
        ) : null;
    }
  };

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        padding: "24px",
        margin: "0 24px 12px 24px",
      }}
    >
      <Link to={step === 1 ? `/business/dashboard/subscriptions` : ""} onClick={backButtonHandler}>
        <div className="inline-flex h-5 items-center justify-start gap-2 rounded-xl">
          <div className="relative h-5 w-5">
            <Icons.ArrowLeft />
          </div>
          <div className="text-sm font-medium leading-tight text-zinc-600">
            {step === 1 ? "Back to dashboard" : "Back"}
          </div>
        </div>
      </Link>

      <section className="flex flex-grow flex-col justify-between">
        <div className="flex flex-col gap-3 py-6 pt-4">
          <StepsProgressBar step={step} />
          {stepRenderHandler()}
        </div>
      </section>
    </main>
  );
};

export default SubscriptionPlans;

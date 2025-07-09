import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "@sekmet/radix-ui-themes";
import { ROUTES, ROUTE_PARAMS } from "router/routes";

import styles from "./form.module.scss";

const StripePaymentForm: React.FC<{ secret: string }> = ({ secret }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { surveyId } = useParams();

  useEffect(() => {
    if (!stripe) {
      return;
    }

    if (secret) {
      return;
    }

    stripe.retrievePaymentIntent(secret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case "succeeded":
          setMessage("Payment succeeded! 🥳");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_confirmation":
          setMessage("Processing, please wait...");
          break;
        case "requires_action":
          setMessage("Authenticating...</span>");
          break;
        case "requires_payment_method":
        default:
          setMessage("");
          break;
      }
    });
  }, [secret, stripe]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${process.env.REACT_APP_URL}/${ROUTES.business}/${ROUTES.surveys}/${surveyId}/${ROUTES.surveySettings}?${ROUTE_PARAMS.paymentSuccess}=true`,
      },
    });
    if (error) {
      if (error.type === "card_error" || error.type === "validation_error") {
        setMessage(error.message as string);
      } else {
        setMessage("An unexpected error occurred.");
      }
    }

    setIsLoading(false);
  };

  return (
    <form id="payment-form" className={styles.paymentForm} onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" className={styles.paymentElement} options={{ layout: "accordion" }} />

      <Button
        id="submit"
        size={"3"}
        className="w-48"
        style={{
          backgroundColor: "#A855F7",
          borderRadius: "12px",
          padding: "12px 16px",
          fontSize: "12px",
          cursor: "pointer",
        }}
        mt={"3"}
        type="submit"
        disabled={!stripe || !elements || isLoading}
      >
        {isLoading ? "Processsing..." : "Pay with stripe"}
      </Button>

      <div className="mt-3 sm:mt-5">{message && <div id="payment-message">{message}</div>}</div>
    </form>
  );
};

export default StripePaymentForm;

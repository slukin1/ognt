import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Strong, Text, Button, Card, Flex } from "@sekmet/radix-ui-themes";

import { useTheme } from "context";
import { themeColors } from "theme/colors";

import { useAppDispatch } from "store/store";
import { resetFiatPaymentData } from "store/create-survey/survey";
import { resetPaymentIntentState } from "store/subscriptions";

import { CONTENT } from "./constants";

import { ChoosePaymentTypeProps, PAYMENT_TYPES, CHOOSE_PAYMENT_COMPONENT_TYPES } from "./types";

const ChoosePaymentType: React.FC<ChoosePaymentTypeProps> = ({ type, chooseHandler }) => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetFiatPaymentData());
    dispatch(resetPaymentIntentState());
  }, []);

  return (
    <>
      <Text size={"7"}>
        <Strong>{CONTENT[type].header}</Strong>
      </Text>
      <Text>{CONTENT[type].subheader}</Text>

      <section className="mb-6 flex w-full flex-grow flex-col gap-8">
        <span
          className="grid gap-8 py-6 md:grid-cols-6
          xl:grid-cols-10"
        >
          <Card size={"3"} className="col-span-3" style={{ backgroundColor: themeColors[theme].headerNavActive }}>
            <div className="flex h-full flex-col justify-center gap-8">
              <img src="/images/card-payments.png" alt="Accepted card payment methods" className="w-2/3" />

              <Text>
                <Strong>Card</Strong> <Text className="text-sm">2% fee</Text>
              </Text>
              <Text className="text-sm">
                We accept Visa, MasterCard, American Express and others. We use Stripe to process payments
              </Text>
              <Button
                size={"3"}
                style={{
                  backgroundColor: "#EDEDED",
                  color: "#09090B",
                  borderRadius: "12px",
                  padding: "19px 16px",
                  fontSize: "12px",
                  cursor: "pointer",
                }}
                onClick={() => chooseHandler(PAYMENT_TYPES.CARD)}
              >
                <Text>
                  <Strong>Pay with card</Strong>
                </Text>
              </Button>
            </div>
          </Card>

          <Card
            size={"3"}
            className="col-span-3"
            style={{
              backgroundColor: themeColors[theme].headerNavActive,
            }}
          >
            <div className="flex h-full flex-col justify-center gap-8 ">
              <img src="/images/crypto-payments.png" alt="Accepted crypto payment methods" className="w-2/3" />

              <p>
                <Text>
                  <Strong>Crypto</Strong>
                </Text>
                <Text color="green" className="text-sm">
                  {" "}
                  0% fee
                </Text>
              </p>
              <Text className="text-sm">
                We allow users to send MATIC and sEP related tokens (e.g. dotUSDC, dSTC, dotETH)
              </Text>
              {type === CHOOSE_PAYMENT_COMPONENT_TYPES.PLAN && (
                <Flex justify="center">
                  <Strong>
                    <Text className="text-sm">Coming Soon</Text>
                  </Strong>
                </Flex>
              )}
              {type === CHOOSE_PAYMENT_COMPONENT_TYPES.SURVEY && (
                <Button
                  size={"3"}
                  style={{
                    backgroundColor: "#A855F7",
                    borderRadius: "12px",
                    padding: "19px 16px",
                    fontSize: "12px",
                    cursor: "pointer",
                  }}
                  disabled={false}
                  onClick={() => chooseHandler(PAYMENT_TYPES.CRYPTO)}
                >
                  <Text>
                    <Strong>Pay with Crypto</Strong>
                  </Text>
                </Button>
              )}
            </div>
          </Card>
        </span>
        <div className="flex flex-col gap-2 text-sm text-[#9333EA]">
          <Link to="#">
            <Text>Learn more about our financial capabilities.</Text>
          </Link>
          <Link to="#">
            <Text>Learn more about our Terms and Conditions</Text>
          </Link>
        </div>
      </section>
    </>
  );
};

export default ChoosePaymentType;

import { Card, Flex, Strong, Text } from "@sekmet/radix-ui-themes";

import { useTheme } from "context";
import { themeColors } from "theme/colors";

import type { SubscriptionDetailsProps } from "./types";

const SubscriptionDetails: React.FC<SubscriptionDetailsProps> = ({ planDetails }) => {
  const { name, idealFor, features, price } = planDetails;
  const { theme } = useTheme();

  return (
    <Card className="max-h-[26rem] max-w-xl md:w-3/4" style={{ background: themeColors[theme].body }} size={"3"}>
      <div className="flex h-full w-full flex-col justify-around gap-4 text-sm">
        <span className="flex flex-col gap-2">
          <Text size={"5"} style={{ textTransform: "capitalize" }}>
            <Strong>{name} plan</Strong>
          </Text>
          <Card style={{ background: themeColors[theme].headerNavActive }}>
            <Flex direction={"column"}>
              <Text>
                <Strong>{"Ideal For"}</Strong>
              </Text>
              <Text size={"1"} className="text-[#52525B]">
                {idealFor}
              </Text>
            </Flex>
          </Card>
        </span>
        <span className="flex flex-col gap-2">
          <Card style={{ background: themeColors[theme].headerNavActive }}>
            <Text>
              <Strong>Features</Strong>
            </Text>
            <Flex direction={"column"}>
              {features.map((feat, index) => {
                return (
                  <Text size={"1"} className="text-[#52525B]" key={index}>
                    {feat}
                  </Text>
                );
              })}
            </Flex>
          </Card>
        </span>
        <Card style={{ background: themeColors[theme].icon }}>
          <Text size={"3"}>
            <Strong>${price}</Strong>
          </Text>
          <Text size={"1"} className="text-[#52525B]">
            + 2% Stripe fee
          </Text>
        </Card>
      </div>
    </Card>
  );
};

export default SubscriptionDetails;

import { Button, Strong, Text } from "@sekmet/radix-ui-themes";
import { AiFillStar } from "react-icons/ai";
import { BiDollar } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

import { useGetUsersSubscriptions } from "hooks";

import { ROUTES } from "router/routes";

import { SALES_EMAIL } from "configs/constants";
import { PLAN_DETAILS, PLANS } from "./constants";

import { useTheme } from "context";
import { themeColors } from "theme/colors";
import cardStyles from "./card.module.scss";

import type { SubscriptionItemProps } from "./types";

const PlanCard: React.FC<SubscriptionItemProps> = ({
  item,
  setStep,
  setSelectedPlan,
  setSelectedPlanDetails,
  priceMaximum,
}) => {
  const { type, isPopular, price, blockchainLimits, surveyResponseLimits, aiLimits } = item;
  const { theme } = useTheme();

  const navigate = useNavigate();
  const { activeSubscription } = useGetUsersSubscriptions();

  const { features, idealFor } = PLAN_DETAILS[type];

  const handlePlanSelection = () => {
    setSelectedPlan(type);
    setSelectedPlanDetails({
      name: type,
      idealFor,
      features: [...features],
      price,
    });
    setStep(2);
  };

  return (
    <div
      className={`${cardStyles.subscriptionCard}`}
      style={{
        backgroundColor: themeColors[theme].input,
        border: `solid 2px ${type === activeSubscription?.type || (!activeSubscription && type === PLANS.FREE) ? "#a855f7" : "transparent"}`,
      }}
    >
      {isPopular && (
        <div className="absolute right-0 top-0 rounded-bl-xl bg-[#A855F7] p-2 px-3 text-xs text-white">
          <Text>
            <Strong>Most popular</Strong>
          </Text>
        </div>
      )}
      <h2 className={cardStyles.title}>{type}</h2>

      <div
        className={cardStyles.messageSection}
        style={{
          backgroundColor: theme === "light" ? "#F3F4F6" : "#27272A",
          color: theme === "light" ? "#5E5C5C" : "#EDEDED",
        }}
      >
        {idealFor}
      </div>

      <div className={cardStyles.priceSection}>
        <div style={{ position: "relative" }}>
          <BiDollar className={cardStyles.dollar} style={{ left: type === PLANS.FREE ? "-2px" : "-22px" }} />
          {type !== PLANS.CUSTOM ? (
            <p className={cardStyles.price} style={{ color: themeColors[theme].text }}>
              {price}
            </p>
          ) : (
            <p className={cardStyles.priceCustom} style={{ color: themeColors[theme].text }}>
              {`${priceMaximum}+`}
            </p>
          )}
        </div>
        <p style={{ color: "#A855F7", fontSize: "21px" }}>per month</p>
        <p style={{ fontSize: "10px", fontWeight: "500" }}>
          QSTN <span style={{ color: themeColors[theme].grey, fontWeight: "300" }}>{type} subscription</span>
        </p>
      </div>

      <div className={cardStyles.starSection}>
        {features.map((feat, index) => {
          return (
            <div className={cardStyles.row} key={index}>
              <AiFillStar color="#FFCC57" />
              {index == 0 && type !== PLANS.FREE ? (
                <p className={cardStyles.rowText}>
                  <strong>{feat}</strong>
                </p>
              ) : (
                <p className={cardStyles.rowText}>{feat}</p>
              )}
            </div>
          );
        })}
        {type !== PLANS.CUSTOM && (
          <div className={cardStyles.row}>
            <AiFillStar color="#FFCC57" />
            <p className={cardStyles.rowText}>
              Blockchain Limit:{" "}
              {type === PLANS.FREE ? `${blockchainLimits} blockchain` : `Up to ${blockchainLimits} blockchains`}
            </p>
          </div>
        )}
        {type !== PLANS.CUSTOM && (
          <div className={cardStyles.row}>
            <AiFillStar color="#FFCC57" />
            <p className={cardStyles.rowText}>AI Credits: {aiLimits}</p>
          </div>
        )}
        {type !== PLANS.CUSTOM && (
          <div className={cardStyles.row}>
            <AiFillStar color="#FFCC57" />
            <p className={cardStyles.rowText}>Survey Responses: {surveyResponseLimits} per month</p>
          </div>
        )}
      </div>
      {type === PLANS.CUSTOM && (
        <a href={`mailto:${SALES_EMAIL}`} style={{ marginTop: "auto" }}>
          <Button size={"4"} className={cardStyles.saleBtn}>
            Contact Sales
          </Button>
        </a>
      )}
      {((type === PLANS.FREE && activeSubscription) || type === activeSubscription?.type) && (
        <Button
          onClick={() => navigate(`/${ROUTES.business}/${ROUTES.dashboard}/${ROUTES.subscriptions}`)}
          size={"4"}
          className={cardStyles.saleBtn}
        >
          Cancel
        </Button>
      )}
      {type !== PLANS.CUSTOM && type !== PLANS.FREE && type !== activeSubscription?.type && (
        <Button size={"4"} onClick={handlePlanSelection} className={cardStyles.saleBtn}>
          Select Plan
        </Button>
      )}
    </div>
  );
};

export default PlanCard;

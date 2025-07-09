import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Strong, Text, Button } from "@sekmet/radix-ui-themes";
import { Input } from "components";

import { useAppSelector, useAppDispatch } from "store/store";

import { PlanCard } from "../";

import { PLANS } from "../plan-card/constants";
import { ROUTES } from "router/routes";

import { toast } from "react-hot-toast";

import type { SelectPlanProps } from "./types";
import { AccountType } from "store/auth/types";
import { setCouponId as stateSetCouponId } from "store/subscriptions";

const SelectPlan: React.FC<SelectPlanProps> = ({ setStep, setSelectedPlan, setSelectedPlanDetails }) => {
  const availablePlans = useAppSelector(state => state.subscriptions.availablePlans);
  const profileData = useAppSelector(state => state.profile.profileData);
  const stateCouponId = useAppSelector(state => state.subscriptions.couponId);

  const [priceMaximum, setPriceMaximum] = useState(0);
  const [couponId, setCouponId] = useState<string>("");

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleChangeCouponId = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCouponId(event.target.value);
  };

  const handleApplyCouponId = () => {
    if (couponId && couponId !== "") {
      dispatch(stateSetCouponId(couponId));
      toast.success("Coupon applied successfully");
    }
  };

  useEffect(() => {
    let newPriceMaximum = 100;
    if (availablePlans && availablePlans.length > 0) {
      availablePlans.forEach(item => {
        if (item.type === PLANS.PROFESSIONAL) {
          newPriceMaximum = Number(item.price);
        }
      });
    }
    setPriceMaximum(newPriceMaximum);
  }, [availablePlans]);

  useEffect(() => {
    if (profileData && profileData.type === AccountType.user) {
      navigate(`/${ROUTES.business}/${ROUTES.dashboard}`);
    }
  }, [profileData?.type]);

  useEffect(() => {
    if (stateCouponId) {
      setCouponId(stateCouponId);
    }
  }, []);

  return (
    <>
      <Text size={"7"}>
        <Strong>Select a subscription plan</Strong>
      </Text>

      <Text className="w-full sm:w-3/5">
        Pick one of our plans to get started with your campaign. You can reach out to use for a custom plan first your
        needs by <Link to="#">contacting us</Link>.
      </Text>

      <div className="flex h-full flex-grow justify-center" style={{ marginTop: "20px" }}>
        <section
          className="grid h-full gap-8 sm:grid-cols-2 xl:flex
         xl:justify-center"
        >
          {availablePlans &&
            availablePlans.length > 0 &&
            availablePlans.map((item, index) => {
              return (
                <PlanCard key={index} {...{ item, setStep, setSelectedPlan, setSelectedPlanDetails, priceMaximum }} />
              );
            })}
        </section>
      </div>

      <div className="flex flex-col gap-1.5 mt-16" style={{ maxWidth: "400px" }}>
        <label className="text-xs">Do you have a coupon?</label>
        <div className="flex flex-row gap-3">
          <Input placeholder="Coupon code" value={couponId} onChange={handleChangeCouponId} />
          <Button
            onClick={handleApplyCouponId}
            disabled={stateCouponId === couponId}
            style={{
              backgroundColor: "#A855F7",
              borderRadius: "12px",
              padding: "12px 16px",
              fontSize: "12px",
              cursor: "pointer",
            }}
            size="3"
            className="w-full md:w-32"
          >
            Apply
          </Button>
        </div>
      </div>
    </>
  );
};

export default SelectPlan;

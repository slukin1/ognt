import { useMemo } from "react";
import { useAppSelector } from "store/store";

import { AccountType } from "store/auth/types";
import { PLANS } from "components/subscription-plans/components/plan-card/constants";

export const useIsPremiumUser = () => {
  const profile = useAppSelector(state => state.profile.profileData);

  const isPremiumUser = useMemo(() => {
    let isPremiumUser = false;
    if (profile && profile.type === AccountType.business) {
      switch (profile.subscriptionType) {
        case PLANS.BASIC:
        case PLANS.ADVANCED:
        case PLANS.PROFESSIONAL:
        case PLANS.CUSTOM:
          isPremiumUser = true;
          break;
        default:
          isPremiumUser = false;
      }
    }
    return isPremiumUser;
  }, [profile, profile?.subscriptionType, profile?.type]);

  return { isPremiumUser };
};

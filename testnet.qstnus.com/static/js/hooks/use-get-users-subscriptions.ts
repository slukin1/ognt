import { useState, useEffect } from "react";
import useSWR from "swr";

import { useAppDispatch, useAppSelector } from "store/store";
import { getUserSubscriptions } from "store/subscriptions/actions";

import type { UsersSubscriptionItem } from "store/subscriptions/types";

export const useGetUsersSubscriptions = () => {
  const [activeSubscription, setActiveSubscription] = useState<UsersSubscriptionItem | null>(null);
  const [requestsCounter, setRequestsCounter] = useState(0);
  const id = useAppSelector(state => state.profile.profileData?.id);
  const fetchPending = useAppSelector(state => state.subscriptions.pending);
  const subscriptions = useAppSelector(state => state.subscriptions.usersSubscriptions);

  const dispatch = useAppDispatch();

  useEffect(() => {
    let activeSubscription = null;
    if (subscriptions && subscriptions.length > 0) {
      subscriptions.forEach(subscription => {
        if (subscription.status === "active") {
          activeSubscription = subscription;
        }
      });
    }

    setActiveSubscription(activeSubscription);
  }, [subscriptions]);

  const { isLoading, isValidating, mutate } = useSWR(
    id && requestsCounter <= 5 ? `/getUsersSubscriptions/${id}/` : null,
    async () => {
      return fetchUserSubscriptions();
    },
    { revalidateOnFocus: false, refreshInterval: 5000 },
  );

  const fetchUserSubscriptions = async () => {
    dispatch(getUserSubscriptions()).then(() => {
      setRequestsCounter(prev => prev + 1);
    });
  };

  return {
    subscriptions,
    activeSubscription,
    isLoading: isLoading || isValidating || fetchPending,
    updateSubscriptions: mutate,
  };
};

import useSWR from "swr";

import { useAppDispatch, useAppSelector } from "store/store";
import { getPaymentIntent } from "store/subscriptions/actions";

export const useGetSubscriptionsIntent = (type: string) => {
  const id = useAppSelector(state => state.profile.profileData?.id);
  const intent = useAppSelector(state => state.subscriptions.paymentIntent);
  const couponId = useAppSelector(state => state.subscriptions.couponId);
  const intentPending = useAppSelector(state => state.subscriptions.pending);

  const dispatch = useAppDispatch();

  const { isLoading, isValidating, mutate } = useSWR(
    id && type ? `/useGetSubscriptionsIntent/${id}/${type}` : null,
    async () => {
      return fetchPaymentIntent();
    },
    { revalidateOnFocus: false, refreshInterval: 0 },
  );

  const fetchPaymentIntent = async () => {
    dispatch(getPaymentIntent({ type, couponId: couponId || undefined }));
  };

  return { intent: intent, isLoading: isLoading || isValidating || intentPending, updateIntent: mutate };
};

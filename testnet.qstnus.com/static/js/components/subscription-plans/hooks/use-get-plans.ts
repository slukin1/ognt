import useSWR from "swr";

import { useAppDispatch } from "store/store";
import { getPlans } from "store/subscriptions/actions";

export const useFetchPlans = () => {
  const dispatch = useAppDispatch();

  const { mutate } = useSWR(
    `getPlans`,
    async () => {
      return fetchPlans();
    },
    { revalidateOnFocus: false, refreshInterval: 0 },
  );

  const fetchPlans = async () => {
    try {
      dispatch(getPlans());
    } catch (err) {
      console.error("useGetPlans hook error: ", err);
    }
  };

  return { updatePlans: mutate };
};

import useSWR from "swr";

import { useAppDispatch, useAppSelector } from "store/store";
import { getConfigs } from "store/utils/actions";

export const useGetCommonConfigs = () => {
  const token = useAppSelector(state => state.auth.token);

  const dispatch = useAppDispatch();

  const { mutate } = useSWR(
    `useGetCommonConfigs/${token}`,
    async () => {
      return fetchConfigs();
    },
    { revalidateOnFocus: false, refreshInterval: 0 },
  );

  const fetchConfigs = async () => {
    try {
      dispatch(getConfigs());
    } catch (err) {
      console.error("useGetCommonConfigs hook error: ", err);
    }
  };

  return { updateCommonConfigs: mutate };
};

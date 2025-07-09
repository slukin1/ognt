import useSWR from "swr";

import { useAppDispatch, useAppSelector } from "store/store";
import { checkReclaimStatus } from "store/zkp/reclaim-proof/actions";

export const useReclaimCheck = (startChecking: boolean) => {
  const statusUrl = useAppSelector(state => state.reclaimProof.statusUrl);

  const dispatch = useAppDispatch();

  const { mutate } = useSWR(
    `useReclaimCheck/${statusUrl}/${startChecking}`,
    statusUrl && startChecking
      ? async () => {
          return fetchReclaimStatus();
        }
      : null,
    { revalidateOnFocus: false, refreshInterval: 5000 },
  );

  const fetchReclaimStatus = async () => {
    try {
      if (statusUrl) {
        dispatch(checkReclaimStatus({ url: statusUrl }));
      }
    } catch (err) {
      console.error("useReclaimCheck hook error: ", err);
    }
  };

  return { updateReclaimStatus: mutate };
};

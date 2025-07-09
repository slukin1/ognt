import useSWR from "swr";
import { v4 as uuidv4 } from "uuid";
import { SHA256 } from "crypto-js";

import { useAppDispatch, useAppSelector } from "store/store";
import { setGhostToken, resetGhostSession, setGhostSessionReward } from "store/utils";

import LOCAL_STORAGE_KEYS from "configs/local-storage-keys";

export const useAnonSession = () => {
  const token = useAppSelector(state => state.auth.token);

  const dispatch = useAppDispatch();

  const { mutate: rehandleAnonSession } = useSWR(
    `handleAnonTokenFromLS/${token}`,
    async () => {
      return handleAnonTokenFromLS();
    },
    { revalidateOnFocus: false, refreshInterval: 0 },
  );

  const handleAnonTokenFromLS = () => {
    if (!token) {
      const anonToken = localStorage.getItem(LOCAL_STORAGE_KEYS.ghostToken);
      if (anonToken && anonToken !== "undefined" && anonToken !== "null" && anonToken !== "") {
        setAnonTokenToStore(anonToken);
      } else {
        const randomId = uuidv4();
        const hash = SHA256(randomId).toString();
        localStorage.setItem(LOCAL_STORAGE_KEYS.ghostToken, hash);
        setAnonTokenToStore(hash);
      }

      const anonReward = localStorage.getItem(LOCAL_STORAGE_KEYS.ghostReward);
      if (anonReward && anonReward !== "undefined" && anonReward !== "null" && anonReward !== "") {
        if (anonReward === "true") {
          dispatch(setGhostSessionReward(true));
        } else {
          dispatch(setGhostSessionReward(false));
        }
      } else {
        localStorage.setItem(LOCAL_STORAGE_KEYS.ghostReward, "false");
        dispatch(setGhostSessionReward(false));
      }
    } else {
      removeAnonSessions();
    }
  };

  const handleSessionReward = () => {
    dispatch(setGhostSessionReward(true));
  };

  const setAnonTokenToStore = (ghostToken: string) => {
    dispatch(setGhostToken(ghostToken));
  };

  const removeAnonSessions = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.ghostToken);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.ghostReward);
    dispatch(resetGhostSession());
  };

  const refreshAnonSessions = () => {
    removeAnonSessions();
    rehandleAnonSession();
  };

  return { refreshAnonSessions, removeAnonSessions, handleSessionReward };
};

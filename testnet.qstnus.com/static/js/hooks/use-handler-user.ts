import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useMagic } from "context";

import { isErrorResult } from "services";

import { useAppDispatch, useAppSelector } from "store/store";
import { getProfile } from "store/profile/actions";

import { ROUTES } from "router/routes";

import { AccountType } from "store/auth/types";
import { AccountStatus } from "store/profile/types";

// User can be blocked through sockets
// But in case if sockets don't work add this check
export const useHandleUser = () => {
  const token = useAppSelector(state => state.auth.token);
  const profileData = useAppSelector(state => state.profile.profileData);

  const { publicAddress } = useMagic();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!profileData && token) {
      dispatch(getProfile()).then(res => {
        if (!isErrorResult(res.payload)) {
          const { type, status } = res.payload!;
          if (type === AccountType.business && status === AccountStatus.pending) {
            navigate(`/${ROUTES.createAccount}/${ROUTES.business}/${ROUTES.onboarding}`);
          }
        }
      });
    } else {
      if (profileData?.type === AccountType.business && profileData?.status === AccountStatus.pending) {
        navigate(`/${ROUTES.createAccount}/${ROUTES.business}/${ROUTES.onboarding}`);
      }
    }
  }, [profileData, token]);

  const fetchProfileData = async () => {
    if (token && publicAddress) {
      dispatch(getProfile());
    }
  };

  return { fetchProfileData };
};

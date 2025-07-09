import React, { PropsWithChildren, useEffect } from "react";
import { Navigate, useLocation, useParams } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "store/store";
import { getKYCUrl } from "store/kyc/actions";

import { ROUTES, SEARCH_PARAMS } from "router/routes";

const RequireAuth: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const token = useAppSelector(state => state.auth.token);
  const profileData = useAppSelector(state => state.profile.profileData);

  const dispatch = useAppDispatch();

  const { surveyFillingId } = useParams();
  const currentUrl = useLocation();

  const queryParams = new URLSearchParams(currentUrl.search);

  if (surveyFillingId) {
    queryParams.append(SEARCH_PARAMS.surveyId, surveyFillingId);
  }

  useEffect(() => {
    if (profileData?.id) {
      dispatch(getKYCUrl());
    }
  }, [profileData?.id]);

  if (!token) {
    if (currentUrl.pathname.includes(`/${ROUTES.user}/${ROUTES.surveyFilling}`)) {
      return (
        <Navigate
          to={{
            pathname: location.pathname.replace(`/${ROUTES.user}`, `/${ROUTES.ghost}`),
          }}
        />
      );
    } else {
      return (
        <Navigate
          to={{
            pathname: `/${ROUTES.login}`,
            search: queryParams.toString(),
          }}
        />
      );
    }
  }

  return <>{children}</>;
};

export default RequireAuth;

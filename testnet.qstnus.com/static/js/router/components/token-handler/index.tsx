import React, { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

import { useAppSelector } from "store/store";
import { ROUTES } from "router/routes";
import { AccountStatus } from "store/profile/types";

const TokenHandler: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const token = useAppSelector(state => state.auth.token);

  const profileData = useAppSelector(state => state.profile.profileData);

  if (token && profileData?.status === AccountStatus.completed) {
    return <Navigate to={ROUTES.landing} replace />;
  }

  return <>{children}</>;
};

export default TokenHandler;

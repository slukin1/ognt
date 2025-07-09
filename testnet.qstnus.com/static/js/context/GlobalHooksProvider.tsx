import React, { ReactNode } from "react";
import { useGetCommonConfigs, useAnonSession } from "hooks";

type GlobalHooksProviderProps = {
  children: ReactNode;
};

export const GlobalHooksProvider: React.FC<GlobalHooksProviderProps> = ({ children }) => {
  useGetCommonConfigs();
  useAnonSession();
  return <>{children}</>;
};

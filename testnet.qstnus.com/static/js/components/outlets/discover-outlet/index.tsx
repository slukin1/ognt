import React, { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { TabItems } from "components/tab-panel/components";

import { useAppDispatch, useAppSelector } from "store/store";
import { TAB_ITEMS, TabItem, FOR_YOU_ITEM } from "./constants";

import { resetSurveysPayload, resetSelectedTags } from "store/discover-survey";

const DiscoverOutlet: React.FC = () => {
  const onboarding = useAppSelector(state => state.profile.profileData?.onboarding);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [additionalItems, setAdditionalItems] = useState<TabItem[] | null>(null);

  const { pathname } = useLocation();

  const handleTabClick = (path: string) => {
    dispatch(resetSelectedTags());
    dispatch(resetSurveysPayload());
    navigate(path);
  };

  useEffect(() => {
    if (onboarding && Object.keys(onboarding).length > 0) {
      setAdditionalItems([...TAB_ITEMS, FOR_YOU_ITEM]);
    }
  }, [onboarding]);

  return (
    <div className="p-7">
      <TabItems handleTabClick={handleTabClick} navItems={additionalItems || TAB_ITEMS} activeTab={pathname} />

      <Outlet />
    </div>
  );
};

export default DiscoverOutlet;

import { TabItems } from "./components";

import { TabPanelProps } from "./types";

import tabStyles from "./TabPanel.module.scss";
import clsx from "clsx";

const TabPanel: React.FC<TabPanelProps> = ({ activeTab, navItems, title, setActiveTab }) => {
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="mb-4">
      <div
        className={clsx(tabStyles.adminTabHeader, "flex gap-4 flex-col md:items-center md:flex-row md:justify-between")}
      >
        <h2 className="text-3xl text-semibold">{title}</h2>
        <div className="flex items-center gap-3">
          <TabItems navItems={navItems} activeTab={activeTab} handleTabClick={handleTabClick} />
        </div>
      </div>
    </div>
  );
};

export default TabPanel;

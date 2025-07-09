import clsx from "clsx";

import { TabItem } from "./types";

const TabItems: React.FC<{
  navItems: Array<TabItem | string>;
  activeTab: string;
  handleTabClick: (item: string) => void;
}> = ({ navItems, activeTab, handleTabClick }) => {
  navItems;
  const navOption =
    typeof navItems[0] === "string"
      ? (navItems.map(value => ({ key: value, value })) as TabItem[])
      : (navItems as TabItem[]);
  return (
    <div className="inline-flex gap-0.5 p-1 rounded-full bg-white dark:bg-[#1F1F22] mb-6">
      {navOption.map(({ key, value }) => (
        <div
          className={clsx(
            "text-xs px-3 py-1.5 rounded-full cursor-pointer",
            activeTab === key ? "bg-zinc-300 text-zinc-800 dark:text-white dark:bg-zinc-800" : "",
          )}
          key={key}
          onClick={() => handleTabClick(key)}
        >
          {value}
        </div>
      ))}
    </div>
  );
};

export default TabItems;

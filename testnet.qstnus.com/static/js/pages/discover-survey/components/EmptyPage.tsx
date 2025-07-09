import React from "react";

import { useTheme } from "context";

import { themeColors } from "theme";

const EmptyPage: React.FC<{
  title: string;
  description?: string;
  icon?: JSX.Element;
  actionTitle?: string;
}> = ({ title = "", description = "", icon }) => {
  const { theme } = useTheme();

  return (
    <div
      className="flex h-full w-full items-center justify-center 
    rounded-2xl border border-solid py-10"
      style={{ borderColor: themeColors[theme].headerNavActive }}
    >
      <div className="flex flex-col items-center justify-center gap-3">
        <div
          style={{
            background: themeColors[theme].input,
          }}
          className="flex h-12 w-12 items-center justify-center rounded-full"
        >
          {icon}
        </div>
        <div className="text-base font-medium">{title}</div>
        <div className={`font-regular text-sm ${theme === "dark" ? "text-zinc-400" : "text-zinc-600"} `}>
          {description}
        </div>
      </div>
    </div>
  );
};

export default EmptyPage;

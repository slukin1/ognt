import { useEffect, useState } from "react";
import clsx from "clsx";

import { Slider } from "@sekmet/radix-ui-themes";

import { useTheme } from "context";

import { themeColors } from "theme";

import { useDebounce } from "hooks";

import adminStyles from "../SurveyMarketplace.module.scss";

const NumOfSurveys: React.FC<{
  label: string;
  defaultPageSize: number;
  resetStore: () => void;
  updateNumSlider: (value: number) => void;
}> = ({ label, defaultPageSize, resetStore, updateNumSlider }) => {
  const [range, setRange] = useState<number>(defaultPageSize);

  const { theme } = useTheme();

  const debounceRange = useDebounce(range, 1000);

  useEffect(() => {
    resetStore();
    updateNumSlider(debounceRange);
  }, [debounceRange]);

  return (
    <div>
      <p style={{ marginBottom: "7px", fontSize: "12px" }}>
        {label ? label : "Number of Surveys "} {range ? `- ${range}` : ""}
      </p>
      <div
        style={{
          background: themeColors[theme].input,
          color: "#71717A",
          borderRadius: "12px",
          padding: "11px 16px",
          fontSize: "14px",
        }}
        className={clsx(adminStyles.numOfSurveys, "flex items-center gap-4")}
      >
        <p
          style={{
            margin: "0",
            color: theme === "dark" ? "#ffffff" : "#09090B",
          }}
        >
          {1}
        </p>
        <Slider
          size={"1"}
          value={[range]}
          min={1}
          max={100}
          step={1}
          onValueChange={(value: number[]) => {
            setRange(value[0]);
          }}
          className={adminStyles.slider}
        />
        <p style={{ margin: "0" }}>100</p>
      </div>
    </div>
  );
};

export default NumOfSurveys;

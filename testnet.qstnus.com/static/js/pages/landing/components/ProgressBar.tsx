import * as Progress from "@radix-ui/react-progress";
import React, { useEffect, useState } from "react";

import { themeColors } from "theme";
import { useTheme } from "context";

import cardStyles from "./Cards.module.scss";

const ProgressBar: React.FC<{ value: number; max: number; isInfinite: boolean }> = ({ value, max, isInfinite }) => {
  const _percent = (value / max) * 100;
  const percent = isNaN(_percent) ? 0 : _percent;

  const [progress, setProgress] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => setProgress(percent), 500);

    return () => clearTimeout(timer);
  }, [percent]);

  return (
    <Progress.Root
      className={cardStyles.progressRoot}
      value={progress}
      style={{ background: themeColors[theme].headerNavActive }}
    >
      <Progress.Indicator
        className={cardStyles.progressIndicator}
        style={{
          transform: `translateX(-${100 - progress}%)`,
          background: isInfinite ? "#4287f5" : percent < 33 ? "#C084FC" : percent < 66 ? "#D6AB3D" : "#3DD69E",
        }}
      />
    </Progress.Root>
  );
};

export default ProgressBar;

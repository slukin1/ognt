import { Badge } from "@sekmet/radix-ui-themes";

import { themeColors } from "theme";
import { useTheme } from "context";

import landingStyles from "../landing.module.scss";

export const Feedback = () => {
  const { theme } = useTheme();
  const color = themeColors[theme];

  return (
    <div className={landingStyles.feedback}>
      <div className={landingStyles.feedback_item} style={{ background: color.input, position: "relative" }}>
        <div className={landingStyles.feedback_itemContent}>
          <div>
            <Badge color="purple">Product improvement</Badge>
          </div>
          <p>Amplify your product&apos;s potential with actionable feedback from your audience</p>
        </div>
        <img src="/images/x3.svg" alt="" />
      </div>
      <div className={landingStyles.feedback_item} style={{ background: color.input, position: "relative" }}>
        <div className={landingStyles.feedback_itemContent}>
          <div>
            <Badge color="purple">Product improvement</Badge>
          </div>
          <p>Elevate your product with insights cultivated from our robust sharing options</p>
        </div>
        <img src="/images/x5.svg" alt="" />
      </div>
    </div>
  );
};

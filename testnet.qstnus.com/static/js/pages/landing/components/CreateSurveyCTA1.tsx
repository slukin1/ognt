import { themeColors } from "theme";
import { useTheme } from "context";

import landingStyles from "../landing.module.scss";

export const CreateSurveysCTA1 = () => {
  const { theme } = useTheme();

  return (
    <div className={landingStyles.createSurveys}>
      <div
        className={landingStyles.createSurveys_text}
        style={{ background: theme === "dark" ? "#1F1F22" : "#EDEDED" }}
      >
        <div>
          <small
            style={{
              display: "inline-block",
              padding: "4px 8px",
              borderRadius: "100px",
              background: themeColors[theme].headerNavActive,
              marginBottom: "12px",
            }}
          >
            Create Surveys
          </small>
          <div>
            <h3>Craft compelling surveys and unveil what your users truly think about your product</h3>
          </div>
        </div>
        <div>
          <img
            style={{ width: "100%", height: "100%" }}
            src={theme === "dark" ? "/images/dashboard.svg" : "/images/dashboard-light.svg"}
            width={100}
            height={100}
            className="object-contain"
            alt=""
          />
        </div>
      </div>
      <div>
        <img
          style={{ width: "100%", height: "100%" }}
          src={theme === "dark" ? "/images/incentive.svg" : "/images/incentive-light.svg"}
          width={100}
          height={100}
          alt=""
        />
      </div>
    </div>
  );
};

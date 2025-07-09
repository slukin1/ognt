import { CaretRightIcon } from "@radix-ui/react-icons";
import { Button } from "@sekmet/radix-ui-themes";
import { Link } from "react-router-dom";

import { useTheme } from "context";

import { themeColors } from "theme";
import { ROUTES } from "router/routes";

import landingStyles from "../landing.module.scss";

export const CreateSurveysCTA2 = () => {
  const { theme } = useTheme();

  return (
    <div className={landingStyles.createSurveysCTA2} style={{ background: theme === "dark" ? "#27272A" : "#FAFAFA" }}>
      <div className={landingStyles.createSurveysCTA2_text}>
        <h1>
          Create <span style={{ background: "#A855F7", color: "#fff" }}>Surveys </span>&
        </h1>
        <h1>
          <span style={{ background: "#3DD69E", color: "#09090B" }}>Reward</span> Participators
        </h1>

        <p style={{ color: themeColors[theme].text2 }}>
          Embark on a discovery journey with QSTN—where opinions gain value and participation pays off. Voice your
          thoughts, reap rewards, and take your engagement to the next level
        </p>

        <Link to={`/${ROUTES.discover}`}>
          <Button size="3">
            Get started - it’s free
            <CaretRightIcon style={{ transform: "scale(1.5)" }} />
          </Button>
        </Link>
      </div>

      <div
        style={{
          minHeight: "407px",
          width: "100%",
          position: "relative",
          alignSelf: "center",
        }}
      >
        <img
          src={theme === "dark" ? "/images/create-surveys.svg" : "/images/create-surveys-light.svg"}
          alt="marketplace card"
        />
      </div>
    </div>
  );
};

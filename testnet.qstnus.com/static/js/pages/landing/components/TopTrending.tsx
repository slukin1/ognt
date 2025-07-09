import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Button } from "@sekmet/radix-ui-themes";
import { Link } from "react-router-dom";

import { DataCard } from "pages/discover-survey/components";

import { useTheme } from "context";

import { themeColors } from "theme";
import { ROUTES } from "router/routes";

import { SurveyItem } from "store/discover-survey/types";

import landingStyles from "../landing.module.scss";

export const TopTrending: React.FC<{ trendingSurveys: SurveyItem[] }> = ({ trendingSurveys }) => {
  const { theme } = useTheme();

  return (
    <div className={landingStyles.topTrending}>
      <div className={landingStyles.landing_contentHeader}>
        <h2>Top Trending surveys</h2>
        <Link to={`/${ROUTES.discover}`}>
          <Button
            size="2"
            style={{
              padding: "12px 16px",
              borderRadius: "12px",
              color: themeColors[theme].text,
              background: themeColors[theme].input,
            }}
          >
            Explore surveys <ArrowTopRightIcon />
          </Button>
        </Link>
      </div>

      <div className={landingStyles.cards}>
        {trendingSurveys.map(item => (
          <DataCard key={item.id} isLanding data={item} />
        ))}
      </div>
    </div>
  );
};

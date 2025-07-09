import { Link } from "react-router-dom";

import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Button } from "@sekmet/radix-ui-themes";
import { BusinessDataCard } from "pages/discover-businesses/components";

import { useTheme } from "context";

import { themeColors } from "theme";

import { BusinessItem } from "store/discover-businesses/types";

import { ROUTES } from "router/routes";

import landingStyles from "../landing.module.scss";

const FeaturedBusinesses: React.FC<{ trendingBusinesses: BusinessItem[] }> = ({ trendingBusinesses }) => {
  const { theme } = useTheme();

  return (
    <div className="mt-24">
      <div className="flex justify-between items-center mb-10">
        <h2>Featured Businesses</h2>
        <Link to={`/${ROUTES.discover}/${ROUTES.businesses}`}>
          <Button
            size="2"
            style={{
              padding: "12px 16px",
              borderRadius: "12px",
              color: themeColors[theme].text,
              background: themeColors[theme].input,
            }}
          >
            Explore businesses <ArrowTopRightIcon />
          </Button>
        </Link>
      </div>

      <div className="grid flex gap-4 mt-8  grid-cols-1 md:grid-cols-4">
        {trendingBusinesses.map(item => (
          <BusinessDataCard key={item.id} data={item} />
        ))}
      </div>

      <Link to={`/${ROUTES.discover}`} className={landingStyles.bigButtonLink}>
        <Button className={landingStyles.bigButton} size={"4"}>
          Get Started it&apos;s free
        </Button>
      </Link>
    </div>
  );
};

export default FeaturedBusinesses;

import { Page } from "components";
import {
  CreateSurveysCTA1,
  Hero,
  TopTrending,
  FeaturedBusinesses,
  CreateSurveysCTA2,
  FAQ,
  Feedback,
} from "./components";

import { useHandlePayload } from "./hooks";

import { useAppSelector } from "store/store";

import landingStyles from "./landing.module.scss";

const LandingPage: React.FC = () => {
  const trendingSurveys = useAppSelector(state => state.trendingData.trendingSurveys);
  const trendingBusinesses = useAppSelector(state => state.trendingData.trendingBusinesses);

  useHandlePayload();

  return (
    <Page>
      <main className="pb-10">
        <div>
          <Hero />
          <div className={landingStyles.landing_container}>
            <CreateSurveysCTA1 />
            {trendingSurveys.length >= 2 && <TopTrending trendingSurveys={trendingSurveys} />}

            {trendingBusinesses.length >= 2 && <FeaturedBusinesses trendingBusinesses={trendingBusinesses} />}
          </div>
          <div className={landingStyles.landing_container}>
            <CreateSurveysCTA2 />
            <Feedback />
          </div>
          <FAQ />
        </div>
      </main>
    </Page>
  );
};

export default LandingPage;

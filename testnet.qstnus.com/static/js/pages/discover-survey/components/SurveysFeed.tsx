import { DataCard } from ".";
import { Skeleton } from "components";

import { SurveyItem } from "store/discover-survey/types";

type SurveysFeedProps = {
  pending: boolean;
  discoveredSurveys: SurveyItem[];
  pendingRows: number;
};

const SurveysFeed: React.FC<SurveysFeedProps> = ({ discoveredSurveys, pending, pendingRows }) => {
  return (
    <div className="xs:grid-cols-1 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {discoveredSurveys.map(survey => (
        <div key={`${survey.id}`} className="flex text-center">
          <DataCard data={survey} />
        </div>
      ))}
      {pending &&
        Array.from({ length: pendingRows }).map((_, idx) => <Skeleton key={idx} classNames="min-h-[189px]" />)}
    </div>
  );
};

export default SurveysFeed;

import { Button } from "@sekmet/radix-ui-themes";
import { EmptyPage, SurveysFeed } from "./";
import { Icons } from "components";

import { useTheme } from "context";

import { SurveyItem } from "store/discover-survey/types";

type SurveysListProps = {
  emptyText: string;
  pending: boolean;
  surveys: SurveyItem[];
  pageSize: number;
  pageNumber: number;
  totalSurveys?: number;
  showNextPage: () => void;
};

const SurveysList: React.FC<SurveysListProps> = ({
  emptyText,
  pending,
  surveys,
  totalSurveys = 0,
  pageNumber,
  pageSize,
  showNextPage,
}) => {
  const { theme } = useTheme();

  const pendingRows =
    pageNumber === 1 || totalSurveys - surveys.length > pageSize ? pageSize : totalSurveys - surveys.length;
  return (
    <div className="mt-3">
      {surveys.length === 0 && !pending ? (
        <EmptyPage
          title={emptyText}
          icon={<Icons.AnouncementIcon height={24} width={24} stroke={theme === "dark" ? "#fff" : "#333"} />}
          actionTitle="Go to surveys"
        />
      ) : (
        <>
          <SurveysFeed discoveredSurveys={surveys} pending={pending} pendingRows={pendingRows} />

          {surveys.length > 0 && surveys.length < (totalSurveys ?? 0) && !pending && (
            <div className="flex w-full mt-2 justify-center">
              <Button
                disabled={pending}
                onClick={showNextPage}
                size="3"
                style={{
                  backgroundColor: "#A855F7",
                  borderRadius: "12px",
                  padding: "19px 16px",
                  fontSize: "12px",
                  cursor: "pointer",
                }}
              >
                <p className="text-sm font-semibold">Show More</p>
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SurveysList;

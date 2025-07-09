import clsx from "clsx";
import BigNumber from "bignumber.js";

import { Avatar, Icons } from "components";
import { Button } from "@sekmet/radix-ui-themes";
import { QuizIcon, SurveyIcon } from "components/icons";
import ProgressBar from "pages/landing/components/ProgressBar";

import { useTheme } from "context";

import { useNavigateWIthQuery } from "hooks";

import { useAppSelector } from "store/store";

import { ROUTES } from "router/routes";
import { tokensLogo } from "configs";
import { themeColors } from "theme";

import { SurveyItem } from "store/discover-survey/types";
import { AccountType } from "store/auth/types";

const DataCard: React.FC<{
  data: SurveyItem;
  isLanding?: boolean;
}> = ({ data: { logo, id, title, isFree, isPremium, isQuiz, businessName, reward }, isLanding = false }) => {
  const profileData = useAppSelector(state => state.profile.profileData);
  const onboardSurveyId = useAppSelector(state => state.utils?.configs?.onboarding?.id);

  const { theme } = useTheme();

  const { navigateWithQuery } = useNavigateWIthQuery();

  const isOnboarding = onboardSurveyId?.toLocaleLowerCase() === id?.toLocaleLowerCase();

  const handleClickSurvey = () => {
    if (profileData?.type === AccountType.user) {
      navigateWithQuery(`/${ROUTES.user}/${ROUTES.surveyFilling}/${id}`);
    } else if (isLanding && !profileData) {
      navigateWithQuery(`/${ROUTES.ghost}/${ROUTES.surveyFilling}/${id}`);
    }
  };

  const percentage =
    reward && reward.participantLimit ? (reward.participantCompleted / reward.participantLimit) * 100 : 0;

  // eslint-disable-next-line
  console.log("DataCard", reward);

  return (
    <div
      onClick={handleClickSurvey}
      className={clsx(
        "rounded-xl w-full border border-solid p-4 border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800",
        profileData?.type === AccountType.user || !profileData
          ? "hover:bg-zinc-200 dark:hover:bg-zinc-700 cursor-pointer"
          : "",
      )}
    >
      <div className="m-0 w-full bg-transparent p-0 text-left flex flex-col gap-4">
        <div className="flex items-center">
          <div className="relative mr-4">
            {logo ? (
              <Avatar imgSrc={logo} scale="lg" />
            ) : isQuiz ? (
              <QuizIcon mode={theme} />
            ) : (
              <SurveyIcon mode={theme} />
            )}

            <div
              className={clsx(
                "absolute left-[28px] top-[28px] inline-flex items-start justify-start gap-2.5 rounded-full border-2 border-solid border-white dark:border-zinc-800 p-1",
                !isPremium ? "bg-zinc-200 dark:bg-zinc-700" : "bg-purple-500",
              )}
            >
              <Icons.DiamondIcon color={!isPremium ? (theme === "dark" ? "white" : "black") : "white"} />
            </div>
          </div>
          <div className="grid flex flex-col flex-1">
            <p className="text-sm font-semibold text-zinc-900 dark:text-white truncate">{title}</p>
            {businessName && (
              <p className="text-xs font-normal text-zinc-400 truncate">{isOnboarding ? "qstn.us" : businessName}</p>
            )}
          </div>
          <div className="flex items-center justify-center">
            <Icons.ArrowRightIcon width={20} height={20} stroke="#71717A" />
          </div>
        </div>
        {reward && (
          <div className="flex gap-3">
            {reward.amount && reward.currencyCode ? (
              <>
                <p className="text-sm font-normal text-zinc-400">Reward</p>
                <img src={tokensLogo(reward)} width="20" height="20" />
                <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                  {`${reward.currencyCode !== "NFT" ? BigNumber(reward.amount).toFormatExtended(18) : ""} ${reward.currencyCode}`}
                </p>
              </>
            ) : (
              <p className="text-sm font-semibold text-zinc-900 dark:text-white">No reward</p>
            )}
          </div>
        )}
      </div>

      <div className="w-full h-px bg-zinc-300 dark:bg-zinc-800 my-4" />

      {reward && (
        <div className="flex flex-col gap-2 items-start">
          <p className="text-xs text-zinc-400">
            {isFree
              ? `${reward.participantLimit} of ∞ `
              : reward.participantLimit > 1000000
                ? `${reward.participantCompleted} of ∞ `
                : `${reward.participantCompleted} of ${reward.participantLimit} `}
            <span
              className="text-semibold text-sm"
              style={{
                color: isFree
                  ? "#4287f5"
                  : percentage < 33 || reward.participantCompleted === 0
                    ? "#C084FC"
                    : percentage < 66
                      ? "#D6AB3D"
                      : "#3DD69E",
              }}
            >
              completed
            </span>
          </p>
          <ProgressBar value={reward?.participantCompleted} max={reward.participantLimit} isInfinite={isFree} />

          {isLanding && (!profileData || profileData?.type === AccountType.user) && (
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
              <Button
                style={{
                  width: "100%",
                  marginTop: "16px",
                  boxSizing: "border-box",
                  borderRadius: "12px",
                  color: themeColors[theme].buttonText,
                  background: themeColors[theme].button,
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "24px",
                }}
                size={"4"}
              >
                Complete survey
                <Icons.ArrowRightIcon />
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DataCard;

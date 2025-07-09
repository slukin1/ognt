import clsx from "clsx";
import { useNavigate } from "react-router-dom";

import { Icons, Avatar } from "components";

import { useTheme } from "context";

import { BusinessItem } from "store/discover-businesses/types";

import { ROUTES } from "router/routes";

const BusinessDataCard: React.FC<{
  data: BusinessItem;
}> = ({ data: { businessName, avatar, isPremium, totalSurveys, activeSurveys, did } }) => {
  const { theme } = useTheme();

  const navigate = useNavigate();

  const handleClickSurvey = () => {
    navigate(`/${ROUTES.profileInfo}/${did}`);
  };

  return (
    <div
      className={clsx(
        "rounded-xl w-full border border-solid p-4 border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800",
      )}
    >
      <div className="m-0 w-full bg-transparent p-0 text-left flex flex-col gap-4">
        <div className="flex items-center">
          <div className="relative mr-4">
            <Avatar imgSrc={avatar} scale="lg" fallback={businessName[0]} />

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
            <p className="text-sm font-semibold text-zinc-900 dark:text-white truncate">{businessName}</p>
          </div>
          <div className="flex items-center justify-center">
            <Icons.ArrowRightIcon width={20} height={20} stroke="#71717A" />
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-zinc-300 dark:bg-zinc-800 my-4" />

      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-xs text-zinc-600 dark:text-zinc-400">Active Surveys</p>
          <p className="text-sm font-medium text-zinc-900 dark:text-white">{activeSurveys}</p>
        </div>

        <div className="flex">
          <div className="w-px h-full bg-zinc-300 dark:bg-zinc-800 mx-4" />
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-xs text-zinc-600 dark:text-zinc-400">Total Surveys</p>
          <p className="text-sm font-medium text-zinc-900 dark:text-white">{totalSurveys}</p>
        </div>
      </div>

      <div className="mt-4 flex w-full justify-center items-center">
        <button
          className="flex justify-center items-center border-none w-full rounded-xl font-semibold py-3 px-4 bg-white hover:bg-zinc-200 dark:bg-zinc-900 hover:dark:bg-zinc-700"
          onClick={handleClickSurvey}
        >
          Explore profile
          <Icons.ArrowRightIcon mode={theme} />
        </button>
      </div>
    </div>
  );
};

export default BusinessDataCard;

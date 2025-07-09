import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

import clsx from "clsx";

import { Button } from "components";
import { BusinessAccountIcon, Icons, UserAccountIcon } from "components/icons";

import { useAppSelector } from "store/store";

import { useTheme } from "context";

import { ACCOUNTS } from "./constant";

import { AccountType } from "store/auth/types";
import { ChooseAccountTypeProps } from "./types";

const ChooseAccountType: React.FC<ChooseAccountTypeProps> = ({
  title,
  redirectBtnText,
  redirectText,
  accountType,
  handleSelectAccountType,
  confirmClick,
  handleRedirect,
}) => {
  const isAnyReward = useAppSelector(state => state.utils?.ghostSession?.isAnyReward);

  const { theme } = useTheme();

  const selectAccount = (type: AccountType) => {
    if (type !== accountType) {
      handleSelectAccountType(type);
    }
  };

  return (
    <div className="my-10 flex items-center justify-center">
      <div className={clsx("m-auto border-2 border-solid p-8 border-zinc-300 dark:border-zinc-800 rounded-2xl")}>
        <div className="flex h-full justify-between flex-col">
          <div className="flex flex-col ">
            <p className="text-3xl font-semibold text-zinc-900 dark:text-white">{title}</p>

            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">Choose an account type</p>
          </div>

          <div className="mt-8 flex flex-col md:flex-row w-full justify-between gap-2">
            {ACCOUNTS.map(({ key, value }) => {
              const isSelected = key === accountType;
              return (
                <div
                  key={value}
                  className={clsx(
                    "rounded-xl px-4 py-3 min-w-[216px]",
                    isSelected ? "bg-white dark:bg-zinc-700" : "bg-zinc-200 dark:bg-zinc-800",
                  )}
                  onClick={() => selectAccount(key)}
                >
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-full flex justify-end">
                      <Checkbox.Root
                        className={clsx(
                          "h-[20px] w-[20px] appearance-none items-center justify-center rounded-[12px] border-0",
                          isSelected ? "bg-purple-500" : "bg-zinc-300 dark:bg-zinc-800",
                        )}
                        checked={isSelected}
                      >
                        <Checkbox.Indicator className="text-white">
                          <CheckIcon />
                        </Checkbox.Indicator>
                      </Checkbox.Root>
                    </div>

                    <div className="mt-1">
                      {key === AccountType.business ? (
                        <BusinessAccountIcon mode={theme} />
                      ) : (
                        <UserAccountIcon mode={theme} />
                      )}
                    </div>

                    <p className="text-sm font-medium my-3">{value}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6">
            <Button onClick={confirmClick} icon={<Icons.ArrowRightIcon stroke="white" />}>
              Continue
            </Button>

            {accountType === AccountType.business && isAnyReward === true && (
              <p className="mt-8 text-sm font-semibold text-zinc-600 dark:text-zinc-400" style={{ maxWidth: "400px" }}>
                Attention! You have completed one or more surveys in the current anonymous session. If you register or
                log in as a business account now, the opportunity to claim a reward for these surveys will be
                permanently lost.
              </p>
            )}

            <div className="w-full h-px bg-zinc-300 dark:bg-zinc-800 my-8" />

            <div className="flex gap-1">
              <p className="text sm">{redirectText}</p>
              <p onClick={handleRedirect} className="inline cursor-pointer text-purple-500">
                {redirectBtnText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseAccountType;

import React from "react";
import clsx from "clsx";

import { Button } from "components";

import { useTheme } from "context";

import { useAppSelector } from "store/store";

import { selectCombinedData } from "./selectors";

const ActionModal: React.FC = () => {
  const { title, description, btnArr, isLoading } = useAppSelector(selectCombinedData);
  const { theme } = useTheme();

  return (
    <div className="w-full flex flex-col py-4 justify-center">
      <h3 className={clsx("text-2xl font-semibold", theme === "light" ? "text-zinc-900" : "text-white")}>{title}</h3>
      <p className={clsx("mt-4 text-sm", theme === "light" ? "text-zinc-600" : "text-zinc-400")}>{description}</p>

      {btnArr && (
        <div className="w-full flex gap-2 mt-8">
          {btnArr.map(({ buttonText, callback, variant = "primary" }, index) => (
            <Button
              pending={isLoading}
              key={`${buttonText}-${index}`}
              variant={variant}
              disabled={isLoading}
              onClick={callback}
            >
              {buttonText}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ActionModal;

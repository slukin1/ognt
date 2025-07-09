import React, { PropsWithChildren } from "react";
import clsx from "clsx";

import { Icons } from "components/icons";

import { useTheme } from "context";

import { useAppDispatch } from "store/store";
import { hideModal } from "store/modal";

const CloseModalWrapper: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const dispatch = useAppDispatch();

  const { theme } = useTheme();

  const handleCloseModal = () => {
    dispatch(hideModal());
  };

  return (
    <div className="w-full flex justify-end items-center mb-4">
      <div className="w-full items-center">{children}</div>

      <div
        onClick={handleCloseModal}
        className={clsx(
          "cursor-pointer rounded-full w-9 h-9 flex justify-center items-center border border-solid",
          theme === "light" ? "border-zinc-300" : "border-zinc-800",
        )}
      >
        <Icons.Close mode={theme} />
      </div>
    </div>
  );
};

export default CloseModalWrapper;

import React, { PropsWithChildren } from "react";
import { AlertDialog } from "@sekmet/radix-ui-themes";
import { createPortal } from "react-dom";

import { CloseModalWrapper } from "./components";

import { useAppSelector } from "store/store";

import { useTheme } from "context";

import { ModalWrapperProps } from "./types";

const ModalWrapper: React.FC<PropsWithChildren<ModalWrapperProps>> = ({ children, id, onOutsideClick }) => {
  const modalType = useAppSelector(state => state.modal.modalType);
  const title = useAppSelector(state => state.modal.title);
  const modalRoot = document.getElementById(id);

  const { theme } = useTheme();

  const onParentContainerClick = (event: React.MouseEvent<HTMLDivElement>) => {
    return event.stopPropagation();
  };

  if (modalRoot) {
    return createPortal(
      <div onClick={onOutsideClick}>
        <AlertDialog.Root open={!!modalType} onOpenChange={onOutsideClick}>
          <AlertDialog.Content
            onClick={onParentContainerClick}
            className="max-w-[504px]"
            style={{
              backgroundColor: theme === "light" ? "#EDEDED" : "#18181B",
              color: theme === "light" ? "#09090B" : "#18181B",
            }}
          >
            <CloseModalWrapper>
              {title ? typeof title === "string" ? <p className="text-xl font-semibold">{title}</p> : title : null}
            </CloseModalWrapper>
            {children}
          </AlertDialog.Content>
        </AlertDialog.Root>
      </div>,

      modalRoot,
    );
  }
  return null;
};

export default ModalWrapper;

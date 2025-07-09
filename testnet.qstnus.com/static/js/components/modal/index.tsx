import { CrossCircledIcon } from "@radix-ui/react-icons";
import { AlertDialog, Button, Flex } from "@sekmet/radix-ui-themes";
import React from "react";

import { useTheme } from "context";
import ModalStyles from "./Modal.module.scss";

import { themeColors } from "theme";

import { ModalProps } from "./types";

export const Modal: React.FC<ModalProps> = ({
  open,
  setOpen,
  title,
  icon,
  onOk,
  onAction,
  onCancel,
  noCancel,
  content,
  buttonText,
  buttonTextCancel,
}) => {
  const { theme } = useTheme();
  const execAction = () => {
    onAction && onAction();
    onOk();
  };
  const cancelAction = () => {
    onCancel && onCancel();
    setOpen(false);
  };
  return (
    <AlertDialog.Root
      open={open}
      onOpenChange={() => {
        open ? cancelAction() : setOpen(true);
      }}
    >
      <AlertDialog.Content
        className={ModalStyles.modal}
        style={{ backgroundColor: theme === "light" ? "#D4D4D8" : "#18181B" }}
      >
        <Flex justify="between" align={"center"} className={ModalStyles.modalHeader}>
          {icon}
          <CrossCircledIcon
            onClick={() => cancelAction()}
            style={{ transform: "scale(2)", color: theme === "light" ? "#18181B" : "white", cursor: "pointer" }}
          />
        </Flex>
        <h3 style={{ color: theme === "dark" ? "#ffffff" : "#09090B" }}>{title}</h3>

        {typeof content === "string" ? (
          <p style={{ color: theme === "light" ? "#52525B" : "#A1A1AA" }}>{content}</p>
        ) : (
          <Flex justify="center" align={"center"} style={{ width: "100%", height: "100%", marginBottom: "16px" }}>
            {content}
          </Flex>
        )}

        <Flex gap={"2"}>
          {!noCancel ? (
            <Button
              onClick={() => cancelAction()}
              className="action"
              style={{
                background: themeColors[theme].input,
                color: theme === "dark" ? "#ffffff" : "#09090B",
                borderRadius: "12px",
                padding: "19px 16px",
                fontSize: "12px",
                cursor: "pointer",
              }}
            >
              {buttonTextCancel ? buttonTextCancel : "Cancel"}
            </Button>
          ) : null}
          <Button
            style={{
              borderRadius: "12px",
              padding: "19px 16px",
              fontSize: "12px",
              cursor: "pointer",
              background: "#A855F7",
            }}
            onClick={execAction}
          >
            {buttonText ? buttonText : "Yes, I'm sure."}
          </Button>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

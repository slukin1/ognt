import { Icons } from "components/icons";

import { useTheme } from "context";

import { themeColors } from "theme";

import emptyStyles from "./emptyBalance.module.scss";

export const EmptyBalance = () => {
  const { theme } = useTheme();
  return (
    <>
      <div className={emptyStyles.empty} style={{ borderColor: themeColors[theme].headerNavActive }}>
        <div
          style={{
            width: "3rem",
            height: "3rem",
            background: themeColors[theme].headerNavActive,
            display: "inline-flex",
            borderRadius: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icons.WalletIcon
            color={theme === "dark" ? "white" : "black"}
            width={20}
            height={20}
            style={{ margin: "0", padding: "0" }}
          />
        </div>

        <p>Balance is empty</p>
        <small>Top up your balance</small>
      </div>
    </>
  );
};

import { Link } from "react-router-dom";

import { Button } from "@sekmet/radix-ui-themes";
import { Icons } from "components/icons";

import { useTheme } from "context";

import { themeColors } from "theme";

import { EmptyDataProps } from "./types";

import emptyStyles from "./empty.module.scss";

const EmptyData: React.FC<EmptyDataProps> = ({ dispImg, heading, description, href, linkText, setOpen }) => {
  const { theme } = useTheme();
  return (
    <>
      <h2> </h2>
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
          {dispImg ? (
            dispImg
          ) : (
            <Icons.WalletIcon
              color={theme === "dark" ? "white" : "black"}
              width={20}
              height={20}
              style={{ margin: "0", padding: "0" }}
            />
          )}
        </div>

        <p>{heading || "No transactions yet"}</p>
        <small>{description || "Data will appear here"}</small>
        <div style={{ marginTop: "1rem" }}>
          {href && (
            <Button
              size={"3"}
              onClick={() => setOpen && setOpen(true)}
              style={{
                backgroundColor: "#A855F7",
                borderRadius: "12px",
                padding: "12px 16px",
                fontSize: "12px",
                cursor: "pointer",
              }}
            >
              <Link to={href} style={{ color: "#fff", textDecoration: "none" }}>
                {linkText}{" "}
              </Link>
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default EmptyData;

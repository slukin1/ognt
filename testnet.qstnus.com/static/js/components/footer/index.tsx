import { Flex, Switch } from "@sekmet/radix-ui-themes";
import { Link } from "react-router-dom";

import { Logo } from "components";
import NewsletterJoinSignup from "./components/NewsletterJoinSignup";

import { useTheme } from "context";

import { EXTERNAL_LINK } from "configs";
import { themeColors } from "theme";

import footerStyles from "./Footer.module.scss";

export const Footer = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className={`${footerStyles.footer}`} style={{ borderColor: themeColors[theme].headerNavActive }}>
      <Flex justify={"between"} wrap={"wrap"} gap={"6"}>
        <Flex direction={"column"} gap={"4"}>
          <Logo />
          <p>The new creative community.</p>
          <Flex gap={"2"} align={"center"}>
            <Switch
              checked={theme === "dark"}
              onCheckedChange={() => toggleTheme(theme === "dark" ? "light" : "dark")}
            />
            <span style={{ fontSize: "12px" }}>{theme === "light" ? "Light theme" : "Dark theme"}</span>
          </Flex>
        </Flex>
        <Flex />

        <NewsletterJoinSignup />
      </Flex>

      <Flex justify={"between"} style={{ marginTop: "40px" }} wrap={"wrap"} gap={"3"}>
        <p style={{ color: "#71717A", fontSize: "12px" }}>
          Copyright © {new Date().getFullYear()} QSTN LLC. All rights reserved
        </p>
        <Flex gap={"2"}>
          <Link
            target="_blank"
            to={EXTERNAL_LINK.termsOfConditions}
            style={{ color: theme === "light" ? "#27272A" : "" }}
          >
            Terms of Service
          </Link>
          <Link target="_blank" to={EXTERNAL_LINK.privacyPolicy} style={{ color: theme === "light" ? "#27272A" : "" }}>
            Privacy Policy
          </Link>
        </Flex>
      </Flex>
    </footer>
  );
};

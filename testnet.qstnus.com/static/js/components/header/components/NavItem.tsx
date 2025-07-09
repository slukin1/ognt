import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

import { themeColors } from "theme";
import { useTheme } from "context";

import React from "react";

import headerStyles from "./Header.module.scss";

export const NavItem: React.FC<{
  href: string;
  name: string;
  iconURL: string;
  disabled?: boolean;
}> = ({ href, name, iconURL, disabled }) => {
  const { pathname } = useLocation();
  const { theme } = useTheme();

  return (
    <li
      className={clsx(headerStyles.navItem, "rounded-xl hover:bg-zinc-300 dark:hover:bg-zinc-700")}
      style={disabled ? { opacity: 0.5 } : undefined}
    >
      <Link
        to={href}
        style={{
          background: pathname.startsWith(href) ? themeColors[theme].headerNavActive : "",
        }}
      >
        <img src={iconURL} alt={`${name} nav Icon`} height={20} width={20} />
        <span>{name}</span>
      </Link>
    </li>
  );
};

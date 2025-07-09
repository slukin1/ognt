import { ROUTES } from "router/routes";

import { AccountType } from "store/auth/types";

export const getNavItems = (theme: string, profileType?: AccountType) => {
  return [
    {
      href:
        profileType === AccountType.business
          ? `/${ROUTES.business}/${ROUTES.dashboard}`
          : `/${ROUTES.user}/${ROUTES.dashboard}`,
      name: "Dashboard",
      iconURL: theme === "dark" ? "/images/dashboardIcon.svg" : "/images/dashboardLightIcon.svg",
    },
    {
      href: `/${ROUTES.discover}`,
      name: "Discover",
      iconURL: theme === "dark" ? "/images/discoverIcon.svg" : "/images/discoverLightIcon.svg",
    },
    // {
    //   href: "",
    //   name: "Marketplace",
    //   disabled: true,
    //   iconURL: theme === "dark" ? "/images/marketplaceIcon.svg" : "/images/marketplaceLightIcon.svg",
    // },
    {
      href: `/${ROUTES.leaderBoards}`,
      name: "Leaderboards",
      iconURL: theme === "dark" ? "/images/leaderboardIcon.svg" : "/images/leaderboardLightIcon.svg",
    },
  ];
};

export const getNavItemsAdmin = (theme: string) => {
  return [
    {
      href: `/${ROUTES.admin}`,
      name: "Admin",
      iconURL: theme === "dark" ? "/images/adminIcon.svg" : "/images/adminLightIcon.svg",
    },
  ];
};

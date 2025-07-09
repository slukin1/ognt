import { Icons } from "components/icons";
import { ROUTES } from "router/routes";
import { Coins } from "lucide-react";

export const getNavItemsUser = (mode: string) => {
  return [
    {
      title: "Balance",
      path: `/${ROUTES.user}/${ROUTES.dashboard}/${ROUTES.balance}`,
      icon: <Icons.BalanceIcon color={mode === "light" ? "black" : "white"} />,
    },
    {
      title: "Surveys",
      path: `/${ROUTES.user}/${ROUTES.dashboard}/${ROUTES.survey}`,
      icon: <Icons.CampaignsIcon color={mode === "light" ? "black" : "white"} />,
    },
    {
      title: "Profile",
      path: `/${ROUTES.user}/${ROUTES.dashboard}/${ROUTES.profile}`,
      icon: <Icons.ProfileIcon color={mode === "light" ? "black" : "white"} />,
    },
    // {
    //   title: "Subscriptions",
    //   path: ROUTES.subscriptions,
    //   icon: <Icons.SubscriptionIcon color={mode === "light" ? "black" : "white"} />,
    // },
    {
      title: "Referrals",
      path: `/${ROUTES.user}/${ROUTES.dashboard}/${ROUTES.referrals}`,
      icon: <Icons.ReferralIcon color={mode === "light" ? "black" : "white"} />,
    },
    {
      title: "NFTs",
      path: `/${ROUTES.user}/${ROUTES.dashboard}/${ROUTES.medias}`,
      icon: <Icons.MediaIcon color={mode === "light" ? "black" : "white"} />,
    },
    {
      title: "Settings",
      path: `/${ROUTES.user}/${ROUTES.dashboard}/${ROUTES.settings}`,
      icon: <Icons.SettingsIcon color={mode === "light" ? "black" : "white"} />,
    },
  ];
};

export const getNavItemsBusiness = (mode: string) => {
  return [
    {
      title: "Analytics",
      path: `/${ROUTES.business}/${ROUTES.dashboard}/${ROUTES.analytics}`,
      icon: <Icons.AnalyticsIcon color={mode === "light" ? "black" : "white"} />,
    },
    {
      title: "Campaigns",
      path: `/${ROUTES.business}/${ROUTES.dashboard}/${ROUTES.campaigns}`,
      icon: <Icons.CampaignsIcon color={mode === "light" ? "black" : "white"} />,
    },
    {
      title: "Users",
      path: `/${ROUTES.business}/${ROUTES.dashboard}/${ROUTES.users}`,
      icon: <Icons.UsersIcon color={mode === "light" ? "black" : "white"} />,
    },
    {
      title: "Profile",
      path: `/${ROUTES.business}/${ROUTES.dashboard}/${ROUTES.profile}`,
      icon: <Icons.ProfileIcon color={mode === "light" ? "black" : "white"} />,
    },

    {
      title: "Referrals",
      path: `/${ROUTES.business}/${ROUTES.dashboard}/${ROUTES.referrals}`,
      icon: <Icons.ReferralIcon color={mode === "light" ? "black" : "white"} />,
    },
    {
      title: "Balance",
      path: `/${ROUTES.business}/${ROUTES.dashboard}/${ROUTES.balance}`,

      icon: <Icons.BalanceIcon color={mode === "light" ? "black" : "white"} />,
    },
    {
      title: "Subscriptions",
      path: `/${ROUTES.business}/${ROUTES.dashboard}/${ROUTES.subscriptions}`,
      icon: <Icons.SubscriptionIcon color={mode === "light" ? "black" : "white"} />,
    },
    {
      title: "Medias",
      path: `/${ROUTES.business}/${ROUTES.dashboard}/${ROUTES.medias}`,

      icon: <Icons.MediaIcon color={mode === "light" ? "black" : "white"} />,
    },
    {
      title: "Settings",
      path: `/${ROUTES.business}/${ROUTES.dashboard}/${ROUTES.settings}`,
      icon: <Icons.SettingsIcon color={mode === "light" ? "black" : "white"} />,
    },
  ];
};

export const getNavItemsAdmin = (mode: string) => {
  return [
    {
      title: "Surveys",
      path: `/${ROUTES.admin}/${ROUTES.dashboard}/${ROUTES.surveys}`,
      icon: <Icons.CampaignsIcon color={mode === "light" ? "black" : "white"} />,
    },
    {
      title: "Users",
      path: `/${ROUTES.admin}/${ROUTES.dashboard}/${ROUTES.users}`,
      icon: <Icons.UsersIcon color={mode === "light" ? "black" : "white"} />,
    },
    {
      title: "Rewards",
      path: `/${ROUTES.admin}/${ROUTES.dashboard}/${ROUTES.adminRewards}`,
      icon: <Coins color={mode === "light" ? "black" : "white"} />,
    },
  ];
};

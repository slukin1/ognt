import { TranslateFunction } from "context/language-context/types";
import { ROUTES, ROUTE_PARAMS } from "router/routes";
import { removeTrailingSlashIfExists } from "utils/pathname-helpers";

const URL = process.env.REACT_APP_URL;

export const getDefaultMeta = (t: TranslateFunction) => {
  return {
    title: t("QSTN Marketplace"),
    description: t(
      "QSTN powers an ecosystem where users answer questions, earn credits and spend these rewards within our digital environment.",
    ),
    image: `${URL}/android-chrome-512x512.png`,
    keywords: "new, keys, rewritten",
  };
};

export const getCustomMeta = (path: string, t: TranslateFunction) => {
  let basePath = removeTrailingSlashIfExists(path);

  if (path.endsWith(`/${ROUTES.surveySettings}`)) {
    basePath = `:${ROUTE_PARAMS.surveyId}/${ROUTES.surveySettings}`;
  } else if (path.endsWith(`/${ROUTES.update}`)) {
    basePath = `:${ROUTE_PARAMS.surveyId}/${ROUTES.update}`;
  } else if (path.startsWith(`/${ROUTES.business}/${ROUTES.surveys}`)) {
    if (path.endsWith(`/${ROUTES.paymentMethod}`)) {
      basePath = `:${ROUTE_PARAMS.surveyId}/${ROUTES.paymentMethod}`;
    } else if (path.endsWith(`/${ROUTES.payWithCrypto}`)) {
      basePath = `:${ROUTE_PARAMS.surveyId}/${ROUTES.payWithCrypto}`;
    } else if (path.endsWith(`/${ROUTES.selectPackage}`)) {
      basePath = `:${ROUTE_PARAMS.surveyId}/${ROUTES.selectPackage}`;
    } else if (path.endsWith(`/${ROUTES.whitelist}`)) {
      basePath = `:${ROUTE_PARAMS.surveyId}/${ROUTES.whitelist}`;
    } else if (path.endsWith(`/${ROUTES.surveyUsers}`)) {
      basePath = `:${ROUTE_PARAMS.surveyId}/${ROUTES.surveyUsers}`;
    } else if (path.includes(`/${ROUTES.answers}`)) {
      basePath = `:${ROUTE_PARAMS.surveyId}/${ROUTES.answers}`;
    }
  } else if (path.startsWith(`/${ROUTES.user}/${ROUTES.surveyFilling}`)) {
    if (path.endsWith(`/${ROUTES.complete}`)) {
      basePath = `:${ROUTE_PARAMS.surveyFillingId}/${ROUTES.complete}`;
    } else if (path.endsWith(`/${ROUTES.reward}`)) {
      basePath = `:${ROUTE_PARAMS.surveyFillingId}/${ROUTES.reward}`;
    } else {
      basePath = `:${ROUTE_PARAMS.surveyFillingId}`;
    }
  }

  switch (basePath) {
    case `/${ROUTES.login}`: {
      return {
        ...getDefaultMeta(t),
        title: t("Login"),
      };
    }
    case `/${ROUTES.createAccount}`: {
      return {
        ...getDefaultMeta(t),
        title: t("Create Account"),
      };
    }
    case `/${ROUTES.discover}`: {
      return {
        ...getDefaultMeta(t),
        title: t("Discover Surveys"),
      };
    }
    case `/${ROUTES.leaderBoards}`: {
      return {
        ...getDefaultMeta(t),
        title: t("Leaderboards"),
      };
    }
    case `/${ROUTES.subscriptionPlans}`: {
      return {
        ...getDefaultMeta(t),
        title: t("Subscription Plans"),
      };
    }
    case `/${ROUTES.createAccount}/${ROUTES.business}` ||
      `/${ROUTES.createAccount}/${ROUTES.business}/${ROUTES.onboarding}`: {
      return {
        ...getDefaultMeta(t),
        title: t("Create business account"),
      };
    }
    case `/${ROUTES.createAccount}/${ROUTES.user}`: {
      return {
        ...getDefaultMeta(t),
        title: t("Create user account"),
      };
    }
    case `/${ROUTES.business}/${ROUTES.surveys}/${ROUTES.createQuiz}`: {
      return {
        ...getDefaultMeta(t),
        title: t("Create Quiz"),
      };
    }
    case `/${ROUTES.business}/${ROUTES.surveys}/${ROUTES.createSurvey}`: {
      return {
        ...getDefaultMeta(t),
        title: t("Create Survey"),
      };
    }
    case `/${ROUTES.business}/${ROUTES.dashboard}/${ROUTES.analytics}`: {
      return {
        ...getDefaultMeta(t),
        title: t("Analytics"),
      };
    }
    case `:${ROUTE_PARAMS.surveyId}/${ROUTES.surveySettings}`: {
      return {
        ...getDefaultMeta(t),
        title: t("Survey Settings"),
      };
    }
    case `:${ROUTE_PARAMS.surveyId}/${ROUTES.paymentMethod}`: {
      return {
        ...getDefaultMeta(t),
        title: t("Payment Method"),
      };
    }
    case `:${ROUTE_PARAMS.surveyId}/${ROUTES.selectPackage}`: {
      return {
        ...getDefaultMeta(t),
        title: t("Select a package"),
      };
    }
    case `:${ROUTE_PARAMS.surveyId}/${ROUTES.whitelist}`: {
      return {
        ...getDefaultMeta(t),
        title: t("Whitelist"),
      };
    }
    case `:${ROUTE_PARAMS.surveyId}/${ROUTES.surveyUsers}`: {
      return {
        ...getDefaultMeta(t),
        title: t("Survey Users"),
      };
    }
    case `:${ROUTE_PARAMS.surveyId}/${ROUTES.answers}`: {
      return {
        ...getDefaultMeta(t),
        title: t("Answers"),
      };
    }
    case `:${ROUTE_PARAMS.surveyId}/${ROUTES.update}`: {
      return {
        ...getDefaultMeta(t),
        title: t("Update Survey"),
      };
    }
    case `:${ROUTE_PARAMS.surveyId}/${ROUTES.payWithCrypto}`: {
      return {
        ...getDefaultMeta(t),
        title: t("Pay with crypto"),
      };
    }
    case `/${ROUTES.business}/${ROUTES.dashboard}/${ROUTES.campaigns}`: {
      return {
        ...getDefaultMeta(t),
        title: t("Campaigns"),
      };
    }
    case `/${ROUTES.business}/${ROUTES.dashboard}/${ROUTES.users}`: {
      return {
        ...getDefaultMeta(t),
        title: t("Users"),
      };
    }
    case `/${ROUTES.business}/${ROUTES.dashboard}/${ROUTES.profile}`: {
      return {
        ...getDefaultMeta(t),
        title: t("Profile"),
      };
    }
    case `/${ROUTES.business}/${ROUTES.dashboard}/${ROUTES.referrals}`: {
      return {
        ...getDefaultMeta(t),
        title: t("Referrals"),
      };
    }
    case `/${ROUTES.business}/${ROUTES.dashboard}/${ROUTES.balance}`: {
      return {
        ...getDefaultMeta(t),
        title: t("Balance"),
      };
    }
    case `/${ROUTES.business}/${ROUTES.dashboard}/${ROUTES.subscriptions}`: {
      return {
        ...getDefaultMeta(t),
        title: t("Subscriptions"),
      };
    }
    case `/${ROUTES.user}/${ROUTES.dashboard}/${ROUTES.balance}`: {
      return {
        ...getDefaultMeta(t),
        title: t("Balance"),
      };
    }
    case `/${ROUTES.user}/${ROUTES.dashboard}/${ROUTES.survey}`: {
      return {
        ...getDefaultMeta(t),
        title: t("Surveys"),
      };
    }
    case `/${ROUTES.user}/${ROUTES.dashboard}/${ROUTES.referrals}`: {
      return {
        ...getDefaultMeta(t),
        title: t("Referrals"),
      };
    }
    case `/${ROUTES.user}/${ROUTES.dashboard}/${ROUTES.profile}`: {
      return {
        ...getDefaultMeta(t),
        title: t("Profile"),
      };
    }
    case `:${ROUTE_PARAMS.surveyFillingId}/${ROUTES.complete}`: {
      return {
        ...getDefaultMeta(t),
        title: t("Complete a survey"),
      };
    }
    case `:${ROUTE_PARAMS.surveyFillingId}/${ROUTES.reward}`: {
      return {
        ...getDefaultMeta(t),
        title: t("Get reward"),
      };
    }
    case `:${ROUTE_PARAMS.surveyFillingId}`: {
      return {
        ...getDefaultMeta(t),
        title: t("Start survey"),
      };
    }
    default:
      return {
        ...getDefaultMeta(t),
      };
  }
};

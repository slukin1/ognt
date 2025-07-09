import { lazyLoad } from "utils";

export {
  BusinessSurveyCreatePage,
  PayWithCryptoPage,
  SurveySettingsPage,
  FundYourSurveyPage,
  UpdateSurveyContentPage,
  WhitelistPage,
  SurveyStatAnswersPage,
  SurveyStatUsersPage,
  CreateNFTPage,
  SurveyAccessGatingPage,
  SurveyRewardConditionsPage,
  UpdateSurveyAnswersPage,
} from "./survey";

export { ConnectNetworkPage } from "./settings/components";

export const AnalyticsPage = lazyLoad(
  () => import("./analytics"),
  module => module.default,
);

export const CampaignsPage = lazyLoad(
  () => import("./campaigns"),
  module => module.default,
);

export const UsersSegmentationPage = lazyLoad(
  () => import("./users"),
  module => module.default,
);

export const ProfilePage = lazyLoad(
  () => import("./profile"),
  module => module.default,
);

export const BalancePage = lazyLoad(
  () => import("./balance"),
  module => module.default,
);

export const SubscriptionsPage = lazyLoad(
  () => import("./subscriptions"),
  module => module.default,
);

export const SettingsPage = lazyLoad(
  () => import("./settings"),
  module => module.default,
);

export const BusinessMediaPage = lazyLoad(
  () => import("./business-media"),
  module => module.default,
);

import { lazyLoad } from "utils";

export {
  AnalyticsPage,
  CampaignsPage,
  UsersSegmentationPage,
  ProfilePage,
  BalancePage,
  SubscriptionsPage,
  SettingsPage,
  BusinessSurveyCreatePage,
  PayWithCryptoPage,
  SurveySettingsPage,
  FundYourSurveyPage,
  UpdateSurveyContentPage,
  UpdateSurveyAnswersPage,
  WhitelistPage,
  SurveyStatUsersPage,
  SurveyStatAnswersPage,
  CreateNFTPage,
  SurveyAccessGatingPage,
  SurveyRewardConditionsPage,
  BusinessMediaPage,
  ConnectNetworkPage,
} from "./business";

export {
  UserSurveysPage,
  SurveyFillingStartPage,
  SurveyFillingPage,
  ReferralsPage,
  ReceiveRewardPage,
  ProtectDataPage,
  UserProfilePage,
  BalancePage as UserBalancePage,
  StripePayoutsPage,
  StripeOnboardPage,
  VerifyKYCPage,
  MediaPage,
  UserSurveyAnswersPage,
  OnboardingInvite,
} from "./user";

export { AdminSurveysPage, AdminUsersPage, AdminUserPage, AdminRewardsPage } from "./admin";

export const LoginPage = lazyLoad(
  () => import("./login"),
  module => module.default,
);

export const SubscriptionPlansPage = lazyLoad(
  () => import("./subscription-plans"),
  module => module.default,
);

export const LandingPage = lazyLoad(
  () => import("./landing"),
  module => module.default,
);

export const NotFoundPage = lazyLoad(
  () => import("./not-found-page"),
  module => module.default,
);

export const CreateAccountPage = lazyLoad(
  () => import("./create-account"),
  module => module.default,
);

export const CreateUserAccountPage = lazyLoad(
  () => import("./create-user-account"),
  module => module.default,
);

export const Web3Mail = lazyLoad(
  () => import("./submit-web3-mail"),
  module => module.default,
);

export const CreateBusinessAccountPage = lazyLoad(
  () => import("./create-business-account"),
  module => module.default,
);

export const CreateBusinessAccountOnboardingPage = lazyLoad(
  () => import("./create-business-account-onboarding"),
  module => module.default,
);

export const DiscoverSurveyPage = lazyLoad(
  () => import("./discover-survey"),
  module => module.default,
);

export const ForYouPage = lazyLoad(
  () => import("./for-you"),
  module => module.default,
);

export const DiscoverBusinessesPage = lazyLoad(
  () => import("./discover-businesses"),
  module => module.default,
);

export const AdminLeaderBoardsPage = lazyLoad(
  () => import("./leader-boards"),
  module => module.default,
);

export const ProfileInfoPage = lazyLoad(
  () => import("./profile-info"),
  module => module.default,
);

export const LoginAccountPage = lazyLoad(
  () => import("./login-account"),
  module => module.default,
);

export const SurveyFillingGhostStartPage = lazyLoad(
  () => import("./survey-filling-ghost"),
  module => module.default,
);

export const SurveyFillingGhostPage = lazyLoad(
  () => import("./survey-filling-ghost/FilingComplete"),
  module => module.default,
);

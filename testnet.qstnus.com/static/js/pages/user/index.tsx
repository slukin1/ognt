import { lazyLoad } from "utils";

export const UserSurveysPage = lazyLoad(
  () => import("./surveys"),
  module => module.default,
);

export const SurveyFillingStartPage = lazyLoad(
  () => import("./survey-filling-start"),
  module => module.default,
);

export const SurveyFillingPage = lazyLoad(
  () => import("./survey-filling"),
  module => module.default,
);

export const ReceiveRewardPage = lazyLoad(
  () => import("./receive-reward"),
  module => module.default,
);

export const ProtectDataPage = lazyLoad(
  () => import("./protect-data"),
  module => module.default,
);

export const ReferralsPage = lazyLoad(
  () => import("./referrals"),
  module => module.default,
);

export const BalancePage = lazyLoad(
  () => import("./balance"),
  module => module.default,
);

export const StripePayoutsPage = lazyLoad(
  () => import("./stripe-payouts"),
  module => module.default,
);

export const StripeOnboardPage = lazyLoad(
  () => import("./stripe-onboarding"),
  module => module.default,
);

export const UserProfilePage = lazyLoad(
  () => import("./profile"),
  module => module.default,
);

export const VerifyKYCPage = lazyLoad(
  () => import("./verify-kyc"),
  module => module.default,
);

export const MediaPage = lazyLoad(
  () => import("./media"),
  module => module.default,
);

export const UserSurveyAnswersPage = lazyLoad(
  () => import("./user-survey-answers-page"),
  module => module.default,
);

export const OnboardingInvite = lazyLoad(
  () => import("./onboarding-invite"),
  module => module.default,
);

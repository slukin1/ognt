import { lazyLoad } from "utils";

export const BusinessSurveyCreatePage = lazyLoad(
  () => import("./create-survey"),
  module => module.default,
);

export const PayWithCryptoPage = lazyLoad(
  () => import("./pay-with-crypto"),
  module => module.default,
);

export const SurveySettingsPage = lazyLoad(
  () => import("./survey-settings"),
  module => module.default,
);

export const FundYourSurveyPage = lazyLoad(
  () => import("./fund-your-survey"),
  module => module.default,
);

export const UpdateSurveyContentPage = lazyLoad(
  () => import("./update-survey-content"),
  module => module.default,
);

export const UpdateSurveyAnswersPage = lazyLoad(
  () => import("./update-survey-answers"),
  module => module.default,
);

export const WhitelistPage = lazyLoad(
  () => import("./whitelist"),
  module => module.default,
);

export const SurveyStatUsersPage = lazyLoad(
  () => import("./survey-stats-users"),
  module => module.default,
);

export const SurveyStatAnswersPage = lazyLoad(
  () => import("./survey-stats-answers"),
  module => module.default,
);

export const CreateNFTPage = lazyLoad(
  () => import("./create-nft"),
  module => module.default,
);

export const SurveyAccessGatingPage = lazyLoad(
  () => import("./survey-access-gating"),
  module => module.default,
);

export const SurveyRewardConditionsPage = lazyLoad(
  () => import("./reward-conditions"),
  module => module.default,
);

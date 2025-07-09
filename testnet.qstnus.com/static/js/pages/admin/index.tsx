import { lazyLoad } from "utils";

export const AdminSurveysPage = lazyLoad(
  () => import("./surveys"),
  module => module.default,
);

export const AdminUsersPage = lazyLoad(
  () => import("./users"),
  module => module.default,
);

export const AdminUserPage = lazyLoad(
  () => import("./user"),
  module => module.default,
);

export const AdminRewardsPage = lazyLoad(
  () => import("./rewards"),
  module => module.default,
);

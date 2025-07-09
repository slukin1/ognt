import { lazyLoad } from "utils";

export const AuthOutlet = lazyLoad(
  () => import("./auth-outlet"),
  module => module.default,
);

export const MainOutlet = lazyLoad(
  () => import("./main-outlet"),
  module => module.default,
);

export const DashboardOutlet = lazyLoad(
  () => import("./dashboard-outlet"),
  module => module.default,
);

export const DiscoverOutlet = lazyLoad(
  () => import("./discover-outlet"),
  module => module.default,
);

export { getNavItemsBusiness, getNavItemsUser } from "./dashboard-outlet/constants";

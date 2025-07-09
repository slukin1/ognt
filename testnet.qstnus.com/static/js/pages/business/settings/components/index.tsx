import { lazyLoad } from "utils";

export const ConnectNetworkPage = lazyLoad(
  () => import("./connect-networks"),
  module => module.default,
);

export { default as PaymentMethodCard } from "./PaymentsMethodCard";
export { default as NetworkCard } from "./connect-card";
export { default as StripeCard } from "./stripe-card";

import { Network } from "configs/web3";
import { CHOOSE_PAYMENT_COMPONENT_TYPES } from "components/choose-payment-type/types";

export const SUPPORTED_NETWORKS = [Network.POLYGON_AMOY];

export const CONTENT = {
  [CHOOSE_PAYMENT_COMPONENT_TYPES.PLAN]: {
    subheader: "You can pay your plan using the following blockchain networks",
  },
  [CHOOSE_PAYMENT_COMPONENT_TYPES.SURVEY]: {
    subheader: "You can fund your campaign using the following blockchain networks",
  },
};

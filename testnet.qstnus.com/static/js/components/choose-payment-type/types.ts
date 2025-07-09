export enum CHOOSE_PAYMENT_COMPONENT_TYPES {
  PLAN = "plan",
  SURVEY = "survey",
}

export enum PAYMENT_TYPES {
  CARD = "card",
  CRYPTO = "crypto",
}

export type ChoosePaymentTypeProps = {
  type: CHOOSE_PAYMENT_COMPONENT_TYPES;
  chooseHandler: (paymentType: PAYMENT_TYPES) => void;
};

import { Network } from "configs/web3";
import { ErrorResult } from "services/types";
import { SurveyResponseItem } from "store/business/campaigns/types";
import { SurveyTags } from "../survey-tags/types";
import { WhitelistedEmail } from "../whitelist/types";

export type CreateSurveyState = {
  pending: boolean;
  error: ErrorResult | null;
  surveyDetail?: SurveyDetailResponseItem;
  surveyData?: SurveyData;
  paymentMethod?: PaymentMethod;
  paymentCryptoType: PaymentCryptoType;
  paymentNetwork?: PaymentNetwork;
  surveyGenerateType?: SurveyGenerateTypeEnum;
  answers: SurveyAnswers;
  participants: number;
  reward: number;
  totalRewardAmount: number;
  surveyObjective?: SurveyObjectiveEnum;
  surveyType?: SurveyTypeEnum;
  cryptoPaymentData: SurveyPaymentTrxData | null;
  fiatPaymentData: SurveyPaymentFiatData | null;
};

export type SurveyAnswers = { [key: string]: string | boolean | string[] };

export enum PaymentMethod {
  CRYPTO = "crypto",
  CARD = "card",
  FIAT = "fiat",
}

export enum PaymentCryptoType {
  native = "native",
  nft = "nft",
}

export enum SurveyGenerateTypeEnum {
  quiz = "quiz",
  campaign = "campaign",
}

export type PaymentNetwork = {
  image: string;
  chainId: number | string;
  network: Network;
  networkName: string;
  token: string;
  minAmount?: number;
  maxAmount?: number;
  isNFT?: boolean;
  isViemChain?: boolean;
};

export enum SurveyObjectiveEnum {
  qualitative = "QUALITATIVE",
  quantitative = "QUANTITATIVE",
}

export enum SurveyTypeEnum {
  private = "private",
  public = "public",
}

export type SurveyData = {
  title?: string;
  description?: string;
  logoPosition?: string;
  logo?: string;
  pages?: SurveyPage[];
};

export type SurveyPage = {
  name: string;
  elements: SurveyPageElement[];
  title: string;
  description: string;
};

export type SurveyChoice = {
  value: string;
  text?: string;
};

export type SurveyPageElement = {
  type: SurveyElement;
  name: string;
  title?: string;
  correctAnswer: string | boolean | string[];
  choices?: Array<SurveyChoice | string>;
  choicesOrder?: "random" | "asc" | "desc";
  isRequired?: boolean;
};

export enum SurveyType {
  quiz = "quiz",
  campaign = "campaign",
}

export enum SurveyElement {
  radiogroup = "radiogroup",
  text = "text",
  boolean = "boolean",
  checkbox = "checkbox",
}

export type CreateSurveyResponse = {
  id: string;
};

export interface CreateSurveyPayload extends SurveyData {
  isFree?: boolean;
  isQuiz?: boolean;
  isPrivate?: boolean;
  isQualitative?: boolean;
  score?: number;
  isMultiAttempt?: boolean;
  useDataProtector?: boolean;
}

export type CreateSurveyWithAIPayload = {
  keyword: string;
  questionCount: number;
  isQuiz?: boolean;
};

export type UpdateSurveyPayload = {
  data: CreateSurveyPayload | FormData;
  id: string;
};

export type SurveyInfoPayload = {
  id: string;
  isAnon?: boolean;
  data?: {
    txHash: string;
  };
};

export type DeleteSurveyPayload = {
  id: string;
};

export type SendInvitesPayload = {
  surveyId: string;
  data: {
    emails: string[];
  };
};

export interface SurveyDetailResponseItem extends SurveyResponseItem {
  pages: SurveyPage[];
  tags: SurveyTags[];
  whitelists: WhitelistedEmail[];
  pendingNftReward: boolean;
  pendingNativeCryptoReward: boolean;
}

export type SurveyPaymentData = {
  data: SurveyPaymentTrxDataPayload;
  isTonProof: boolean;
  isSolanaProof: boolean;
  isRootstockProof: boolean;
  isKakarotProof: boolean;
  isBobaProof: boolean;
  isSomniaProof: boolean;
  isSkaleProof: boolean;
  isNearProof: boolean;
};

export type SurveyPaymentFiatDataPayload = {
  surveyId: string;
  participantLimit: number;
  currencyType: PaymentMethod;
  currencyCode: string;
  amount: string;
};

export type SurveyPaymentTrxDataPayload = {
  surveyId: string;
  participantLimit: number;
  chainId: string;
  currencyType: PaymentMethod;
  currencyCode: PaymentNetwork["token"];
  amount: string;
  walletAddress?: string;
};

export type ConfirmSurveyPaymentTrxPayload = {
  surveyId: string;
  txHash: string;
};

export type ConfirmPaymentData = {
  data: ConfirmSurveyPaymentTrxPayload;
  isTonProof?: boolean;
  isSolanaProof?: boolean;
  isRootstockProof?: boolean;
  isKakarotProof?: boolean;
  isSkaleProof?: boolean;
  isBobaProof?: boolean;
  isSomniaProof?: boolean;
};

export type SurveyPaymentTrxData = {
  signature: `0x${string}`;
  token: `0x${string}`;
  timeToExpire: number;
  message: `0x${string}`;
  owner: string;
  surveyId: string;
  participantsLimit: number;
  rewardAmount: string;
  surveyHash: `0x${string}`;
  amountFee: string;
};

export type SurveyPaymentFiatData = {
  timeToExpire: number;
  message: string;
  owner: string;
  surveyId: string;
  participantsLimit: number;
  rewardAmount: string;
  paymentId: string;
  amountFee: string;
};

export type PaymentAnsrSurveyPayload = {
  surveyId: string;
  data: PaymentAnsrSurveyData;
};

export type PaymentAnsrSurveyData = {
  amount: string;
  participantLimit: number;
};

export type SetSurveyAnswersPayload = {
  key: string;
  value: string | boolean | string[];
};

import { ErrorResult } from "services/types";

export type UserSurveyState = {
  pending: boolean;
  error: ErrorResult | null;
  activeTab: string;
  surveys: ActiveSurveyItem[];
  totalSurveys?: number;
  surveyPayload: UserSurveyPayload;
};

export type UserSurveyPayload = {
  pageSize: number;
  pageNumber: number;
  pageOrderBy: string;
  pageOrder: string;
  search?: string;
  status?: UserSurveyStatus[];
};

export type ActiveSurveyItem = {
  id: string;
  title: string;
  createdAt: string;
  businessName: string;
  status: UserSurveyStatus;
  logo?: string;
  answersCount: number;
  questionsCount: number;
  reward?: SurveyReward;
  isQuiz?: boolean;
  isPrivate?: boolean;
  isMultiAttempt?: boolean;
};

export type ActiveSurveyResponse = {
  total: number;
  items: ActiveSurveyItem[];
};

export type SurveyReward = {
  amount: string;
  chainId: string;
  currencyType: CurrencyType;
  currencyCode: string;
};
export enum CurrencyType {
  crypto = "crypto",
  fiat = "fiat",
  virtual = "virtual",
}

export enum UserSurveyStatus {
  active = "active",
  done = "done",
  claim = "claim",
  skaleClaim = "skale_claim",
  protector = "dataprotector",
  failed = "failed",
}

export const statusInfo = {
  [UserSurveyStatus.active]: { text: "Active", color: "purple" },
  [UserSurveyStatus.claim]: { text: "Claim", color: "gray" },
  [UserSurveyStatus.skaleClaim]: { text: "Claim", color: "gray" },
  [UserSurveyStatus.done]: { text: "Done", color: "green" },
  [UserSurveyStatus.protector]: { text: "Data Protect", color: "gray" },
  [UserSurveyStatus.failed]: { text: "Failed", color: "red" },
};

export const statusActionText = {
  [UserSurveyStatus.active]: "Continue",
  [UserSurveyStatus.skaleClaim]: "Claim",
  [UserSurveyStatus.claim]: "Claim",
  [UserSurveyStatus.protector]: "Data Protect",
  [UserSurveyStatus.done]: "Done",
  [UserSurveyStatus.failed]: "Failed",
};

export enum UserActiveSurveysActiveTab {
  all = "All",
  active = "Active",
  claim = "Claim",
  done = "Done",
}

export const currencyTypeText = {
  [CurrencyType.crypto]: "Blockchain",
  [CurrencyType.fiat]: "Fiat",
  [CurrencyType.virtual]: "ANSR",
};

export const userActiveSurveysOptions = [
  UserActiveSurveysActiveTab.all,
  UserActiveSurveysActiveTab.active,
  UserActiveSurveysActiveTab.claim,
  UserActiveSurveysActiveTab.done,
];

export const userActiveSurveyStatuses = {
  [UserActiveSurveysActiveTab.all]: [UserSurveyStatus.active, UserSurveyStatus.done, UserSurveyStatus.claim],
  [UserActiveSurveysActiveTab.active]: [UserSurveyStatus.active],
  [UserActiveSurveysActiveTab.claim]: [UserSurveyStatus.claim],
  [UserActiveSurveysActiveTab.done]: [UserSurveyStatus.done],
};

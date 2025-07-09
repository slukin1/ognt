import { ErrorResult } from "services/types";

export type CampaignsState = {
  pending: boolean;
  surveys: SurveyResponseItem[];
  error: ErrorResult | null;
  activeTab: string;
  totalCampaignSurveys?: number;
  campaignPayload: CampaignPayload;
};

export type CampaignPayload = {
  pageOrder: string;
  pageNumber: number;
  pageSize: number;
  search?: string;
  pageOrderBy: string;
  statuses: SurveyStatus[];
  chainId?: string;
};

export type CampaignsResponse = {
  total: number;
  items: SurveyResponseItem[];
};

export type SurveyResponseItem = {
  id: string;
  did?: string;
  createdAt?: string;
  title: string;
  description?: string;
  logo?: string;
  status: SurveyStatus;
  isFree?: boolean;
  isQuiz?: boolean;
  isPrivate?: boolean;
  isQualitative?: boolean;
  reward?: SurveyResponseReward;
  participantLimit?: number;
  participantCompleted?: number;
  score?: number;
  survey?: number;
  isMultiAttempt?: boolean;
  useDataProtector?: boolean;
};

export type SurveyResponseReward = {
  transactionId: string;
  contractAddress: string;
  ownerAddress: string;
  amount: string;
  reward: string;
  chainId: string;
  transactionCurrencyCode: string;
  currencyType: string;
  currencyCode: string;
};

export enum SurveyStatus {
  drafted = "drafted",
  active = "active",
  paused = "paused",
  ended = "ended",
  deleted = "deleted",
}

export enum CampaignActiveTab {
  all = "All",
  active = "Active",
  unpublished = "Not published",
  completed = "Completed",
}

export const campaignStatuses = {
  [CampaignActiveTab.all]: [SurveyStatus.active, SurveyStatus.drafted, SurveyStatus.ended, SurveyStatus.paused],
  [CampaignActiveTab.active]: [SurveyStatus.active],
  [CampaignActiveTab.unpublished]: [SurveyStatus.drafted, SurveyStatus.paused],
  [CampaignActiveTab.completed]: [SurveyStatus.ended],
};

export const campaignTabPanelOptions = [
  CampaignActiveTab.all,
  CampaignActiveTab.active,
  CampaignActiveTab.unpublished,
  CampaignActiveTab.completed,
];

export const statusInfo = {
  [SurveyStatus.paused]: { text: "Paused", color: "purple" },
  [SurveyStatus.active]: { text: "Active", color: "green" },
  [SurveyStatus.ended]: { text: "Finished", color: "yellow" },
  [SurveyStatus.drafted]: { text: "Not Published", color: "gray" },
  [SurveyStatus.deleted]: { text: "Deleted", color: "red" },
};

export const emptyCampaignText = {
  [CampaignActiveTab.all]: "You have no published surveys",
  [CampaignActiveTab.active]: "You have no active surveys",
  [CampaignActiveTab.unpublished]: "You have no unpublished surveys",
  [CampaignActiveTab.completed]: "You have no completed surveys",
};

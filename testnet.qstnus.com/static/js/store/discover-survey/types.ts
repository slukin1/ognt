import { ErrorResult } from "services/types";
import { SurveyStatus } from "store/business/campaigns/types";
import { SurveyTags } from "store/create-survey/survey-tags/types";

export type DiscoverSurveyState = {
  pending: boolean;
  discoveredSurveys: SurveyItem[];
  tags: SurveyTags[];
  selectedTags: SurveyTags[];
  totalSurveys?: number;
  error: ErrorResult | null;
  surveyPayload: SurveyPayload;
  activeTab: string;
};

export enum SearchRequestTypes {
  Businesses = "BUSINESSES",
  Marketplace = "MARKETPLACE",
  Surveys = "SURVEYS",
}

export type SurveyItem = {
  id: string;
  title: string;
  businessName: string;
  logo: string;
  status: SurveyItemStatus;
  description: string;
  isFree: boolean;
  isPremium: boolean;
  isQuiz: boolean;
  reward?: SurveyReward;
};

export type SurveyReward = {
  participantLimit: number;
  participantCompleted: number;
  amount?: string;
  currencyCode?: string;
  currencyType?: string;
  chainId?: string;
};

export enum SurveyItemStatus {
  active = "active",
}

export type SurveyPayload = {
  tagsIds?: Array<number | string>;
  isPremium?: boolean;
  pageNumber: number;
  businessDid?: string;
  // verified?: string;
  pageSize: number;
  pageOrderBy?: string;
  pageOrder?: string;
  search?: string;
  statuses?: SurveyStatus[];
  chainId?: string;
  currencyCode?: string;
};

export type DiscoveredSurveysResponse = {
  total: number;
  items: SurveyItem[];
};

export enum DiscoverSurveysActiveTab {
  all = "All",
  active = "Active",
  finished = "Finished",
}

export const discoverSurveysOptions = [
  DiscoverSurveysActiveTab.all,
  DiscoverSurveysActiveTab.active,
  DiscoverSurveysActiveTab.finished,
];

export const discoverSurveyStatuses = {
  [DiscoverSurveysActiveTab.all]: [SurveyStatus.active, SurveyStatus.ended],
  [DiscoverSurveysActiveTab.active]: [SurveyStatus.active],
  [DiscoverSurveysActiveTab.finished]: [SurveyStatus.ended],
};

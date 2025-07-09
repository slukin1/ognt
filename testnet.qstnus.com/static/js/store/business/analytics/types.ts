import { ErrorResult } from "services/types";
import { SurveyItem } from "store/discover-survey/types";

export enum AnalyticsPeriods {
  ALL = "",
  SEVEN_DAY = "last7Days",
  FOURTEEN_DAY = "last14Days",
  THIRTY_DAY = "last30Days",
}

export type AnalyticsState = {
  pending: boolean;
  analyticsSurveys: SurveyItem[];
  analyticsStats: UserAnalyticsResponse;
  error: ErrorResult | null;
  activeTab: string;
  analyticsPayload: AnalyticsPayload;
};

export type AnalyticsPayload = {
  period?: AnalyticsPeriods;
};

//TODO: check it if needed
export type AnalyticsStats = {
  labels: string[];
  pageViews: number[];
  completions: number[];
  totalSurveys: number;
  totalCompletions: number;
  totalBusiness: number;
  avgCompletionsTime: string;
  totalPageViews: number;
  rankingCompletions: Array<{
    surveyId: string;
    completions: number;
  } | null> | null;
};

export type UserAnalyticsResponse = {
  totalSurveys: number;
  totalPageViews: number;
  totalCompletions: number;
  avgCompletionsTime: string;
  dataViews: AnalyticsDataView[];
  dataCompletions: AnalyticsDataView[];
};

export type AnalyticsDataView = {
  date: string;
  count: number;
};

export enum AnalyticsTabsNames {
  ALL = "All",
  SEVEN_DAY = "7 days",
  FOURTEEN_DAY = "14 days",
  THIRTY_DAY = "30 days",
}

export const AnalyticsTabsData = {
  [AnalyticsTabsNames.ALL]: AnalyticsPeriods.ALL,
  [AnalyticsTabsNames.SEVEN_DAY]: AnalyticsPeriods.SEVEN_DAY,
  [AnalyticsTabsNames.FOURTEEN_DAY]: AnalyticsPeriods.FOURTEEN_DAY,
  [AnalyticsTabsNames.THIRTY_DAY]: AnalyticsPeriods.THIRTY_DAY,
};

export const analyticsTab = [
  AnalyticsTabsNames.ALL,
  AnalyticsTabsNames.SEVEN_DAY,
  AnalyticsTabsNames.FOURTEEN_DAY,
  AnalyticsTabsNames.THIRTY_DAY,
];

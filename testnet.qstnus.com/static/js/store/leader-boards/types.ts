import { ErrorResult } from "services/types";

export type LeaderBoardState = {
  pending: boolean;
  error: ErrorResult | null;
  leaderBoardData: LeaderBoardItem[];
  userLeaderBoardItem?: LeaderBoardItem;
  leaderBoardPayload: LeaderBoardPayload;
  activeTab: string;
};

export type LeaderBoardPayload = {
  period: Period;
  chainId?: string;
};

export enum Period {
  week = "week",
  month = "month",
  year = "year",
}

export type SurveyDetail = {
  profit: string;
  iconSrc: string;
};

export type LeaderBoardItem = {
  place: string;
  did: string;
  name: string;
  nickName: string;
  surveyCount: number;
  earnedAmount: string;
  avatar?: string;
  rewards?: LoaderBoardReward[];
};

export type LoaderBoardReward = {
  amount: string;
  currencyCode: string;
};

export type LeaderBoardResponse = {
  items: LeaderBoardItem[];
  me: LeaderBoardItem;
};

export enum LeaderBoardActiveTab {
  week = "Week",
  month = "Month",
  year = "Year",
}

export const leaderBoardOptions = [LeaderBoardActiveTab.week, LeaderBoardActiveTab.month, LeaderBoardActiveTab.year];

export const leaderBoardPeriod = {
  [LeaderBoardActiveTab.week]: Period.week,
  [LeaderBoardActiveTab.month]: Period.month,
  [LeaderBoardActiveTab.year]: Period.year,
};

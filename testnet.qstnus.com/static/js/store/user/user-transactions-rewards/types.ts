import { ErrorResult } from "services/types";
import { CurrencyType } from "../survey/types";
import { TransactionStatus, TransactionType } from "store/business/business-transactions/types";

export type UserTransactionsState = {
  pending: boolean;
  error: ErrorResult | null;
  transactions: UserTransactionItem[];
  totalItems?: number;
  platformType: string;
  rewards: UserRewardItem[];
  activeTab: string;
  dateFilter: DateFilterTypeEnum;
  rewardPayload: UserTransactionPayload;
};

export type UserTransactionItem = {
  id?: string;
  type: TransactionType;
  status: TransactionStatus;
  txHash?: string;
  chainId: string;
  currencyType: CurrencyType;
  currencyCode: string;
  amount: string;
  amountInUsd: string;
  createdAt: string;
};

export type UserRewardItem = {
  status: TransactionStatus;
  type: TransactionRewardType;
  chainId: string;
  currencyType: CurrencyType;
  currencyCode: string;
  amount: string;
  amountInUsd: string;
  createdAt: string;
};

export type UserTransactionPayload = {
  pageNumber: number;
  pageSize: number;
  pageOrder: string;
  pageOrderBy: string;
  currencyType?: CurrencyType;
  chainId?: string;
  endDate?: string;
  startDate?: string;
};

export type UserTransactionResponse = {
  total: number;
  items: UserTransactionItem[];
};

export type UserRewardsResponse = {
  total: number;
  items: UserRewardItem[];
};

export enum TransactionRewardType {
  registration = "registration",
  referral = "referral",
  surveyResponse = "survey_response",
}

export const transactionRewardTypeInfo = {
  [TransactionRewardType.registration]: { text: "Registration reward", color: "" },
  [TransactionRewardType.referral]: { text: "Referral reward", color: "" },
  [TransactionRewardType.surveyResponse]: { text: "Survey response reward", color: "" },
};

export enum BalanceActiveTab {
  REWARD = "Rewards",
  TRANSACTIONS = "Transactions",
}

export enum DateFilterTypeEnum {
  ALL = "All",
  SEVEN_DAY = "7 days",
  FOURTEEN_DAY = "14 days",
  THIRTY_DAY = "30 days",
}

export const balanceTabPanelOptions = [BalanceActiveTab.REWARD, BalanceActiveTab.TRANSACTIONS];

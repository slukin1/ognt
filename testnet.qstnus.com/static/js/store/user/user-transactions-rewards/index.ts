import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { getUserTransactions, getUserRewards } from "./actions";

import { BalanceActiveTab, DateFilterTypeEnum, UserTransactionPayload, UserTransactionsState } from "./types";

const initialState: UserTransactionsState = {
  pending: false,
  error: null,
  activeTab: BalanceActiveTab.REWARD,
  platformType: "all",
  transactions: [],
  rewards: [],
  dateFilter: DateFilterTypeEnum.ALL,
  rewardPayload: {
    pageNumber: 1,
    pageOrder: "desc",
    pageSize: 10,
    pageOrderBy: "createdAt",
  },
};

const userTransactionsRewardsSlice = createSlice({
  name: "userTransactionsRewards",
  initialState: {
    ...initialState,
  },
  reducers: {
    resetUserTransactionsRewardsState: () => {
      return initialState;
    },
    setUserBalanceActiveTab: (state, action: PayloadAction<string>) => {
      state.totalItems = undefined;
      state.activeTab = action.payload;
      state.transactions = [];
      state.rewards = [];
      state.rewardPayload = initialState.rewardPayload;
    },
    setPlatformType: (state, action: PayloadAction<string>) => {
      state.platformType = action.payload;
    },
    setDateFilter: (state, action: PayloadAction<DateFilterTypeEnum>) => {
      state.dateFilter = action.payload;
    },
    setTransactionRewardPayload: (state, action: PayloadAction<Partial<UserTransactionPayload | undefined>>) => {
      state.rewardPayload = { ...state.rewardPayload, ...action.payload };
    },
  },
  extraReducers: builder => {
    builder
      // Get Transactions
      .addCase(getUserTransactions.pending, state => {
        state.pending = true;
      })
      .addCase(getUserTransactions.fulfilled, (state, action) => {
        const { items, total } = action.payload;
        if (state.rewardPayload.pageNumber === 1) {
          state.transactions = items;
        } else {
          state.transactions = [...state.transactions, ...items];
        }
        state.totalItems = total;
        state.error = null;
        state.pending = false;
      })
      .addCase(getUserTransactions.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // Get Rewards
      .addCase(getUserRewards.pending, state => {
        state.pending = true;
      })
      .addCase(getUserRewards.fulfilled, (state, action) => {
        const { items, total } = action.payload;
        if (state.rewardPayload.pageNumber === 1) {
          state.rewards = items;
        } else {
          state.rewards = [...state.rewards, ...items];
        }
        state.totalItems = total;
        state.error = null;
        state.pending = false;
      })
      .addCase(getUserRewards.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      });
  },
});

export const {
  resetUserTransactionsRewardsState,
  setUserBalanceActiveTab,
  setPlatformType,
  setTransactionRewardPayload,
  setDateFilter,
} = userTransactionsRewardsSlice.actions;

export default userTransactionsRewardsSlice;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { getUserAnalytics } from "./actions";

import { AnalyticsState, AnalyticsTabsData, AnalyticsTabsNames } from "./types";

const initialState: AnalyticsState = {
  pending: false,
  analyticsSurveys: [],
  analyticsStats: {
    totalSurveys: 0,
    totalPageViews: 0,
    totalCompletions: 0,
    avgCompletionsTime: "",
    dataViews: [],
    dataCompletions: [],
  },
  error: null,
  activeTab: AnalyticsTabsNames.ALL,
  analyticsPayload: {},
};

const analyticsSlice = createSlice({
  name: "analytics",
  initialState: {
    ...initialState,
  },
  reducers: {
    resetAnalyticsState: () => {
      return initialState;
    },
    setAnalyticsActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;
      state.analyticsPayload = {
        ...state.analyticsPayload,
        period: AnalyticsTabsData[action.payload as AnalyticsTabsNames],
      };
    },
  },
  extraReducers: builder => {
    builder
      // get user's analytics
      .addCase(getUserAnalytics.pending, state => {
        state.pending = true;
      })
      .addCase(getUserAnalytics.fulfilled, (state, action) => {
        state.analyticsStats = action.payload;
        state.error = null;
        state.pending = false;
      })
      .addCase(getUserAnalytics.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      });
  },
});

export const { resetAnalyticsState, setAnalyticsActiveTab } = analyticsSlice.actions;

export default analyticsSlice;

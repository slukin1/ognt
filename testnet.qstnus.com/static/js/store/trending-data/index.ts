import { createSlice } from "@reduxjs/toolkit";

import { TrendingDataState } from "./types";
import { getAllDiscoveredSurveys } from "store/discover-survey/actions";
import { getAllDiscoveredBusinesses } from "store/discover-businesses/actions";

const initialState: TrendingDataState = {
  pending: false,
  error: null,
  trendingSurveys: [],
  trendingBusinesses: [],
};

const trendingDataSlice = createSlice({
  name: "trendingData",
  initialState: {
    ...initialState,
  },
  reducers: {
    resetTrendingDataState: () => {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder
      // get trending surveys
      .addCase(getAllDiscoveredSurveys.pending, state => {
        state.pending = true;
      })
      .addCase(getAllDiscoveredSurveys.fulfilled, (state, action) => {
        const { items } = action.payload;
        state.trendingSurveys = items;
        state.error = null;
        state.pending = false;
      })
      .addCase(getAllDiscoveredSurveys.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // get trending businesses
      .addCase(getAllDiscoveredBusinesses.pending, state => {
        state.pending = true;
      })
      .addCase(getAllDiscoveredBusinesses.fulfilled, (state, action) => {
        const { items } = action.payload;
        state.trendingBusinesses = items;
        state.error = null;
        state.pending = false;
      })
      .addCase(getAllDiscoveredBusinesses.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      });
  },
});

export const { resetTrendingDataState } = trendingDataSlice.actions;

export default trendingDataSlice;

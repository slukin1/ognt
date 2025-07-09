import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { CampaignsState, CampaignPayload, campaignStatuses, CampaignActiveTab } from "./types";
import { getAllSurveys } from "./actions";

const initialState: CampaignsState = {
  pending: false,
  surveys: [],
  error: null,
  activeTab: CampaignActiveTab.all,
  campaignPayload: {
    pageNumber: 1,
    pageSize: 10,
    pageOrder: "desc",
    pageOrderBy: "createdAt",
    statuses: campaignStatuses[CampaignActiveTab.all],
    chainId: "all",
  },
};

const campaignsSlice = createSlice({
  name: "campaigns",
  initialState: {
    ...initialState,
  },
  reducers: {
    resetCampaignsState: () => {
      return initialState;
    },
    resetCampaignsSurveys: state => {
      state.surveys = [];
    },
    setCampaignsActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;
      state.campaignPayload = {
        ...state.campaignPayload,
        statuses: campaignStatuses[action.payload as CampaignActiveTab],
      };
    },
    setCampaignPayload: (state, action: PayloadAction<Partial<CampaignPayload>>) => {
      state.campaignPayload = { ...state.campaignPayload, ...action.payload };
    },
  },
  extraReducers: builder => {
    builder
      // Get Survey
      .addCase(getAllSurveys.pending, state => {
        state.pending = true;
      })
      .addCase(getAllSurveys.fulfilled, (state, action) => {
        const { items, total } = action.payload;
        if (state.campaignPayload.pageNumber === 1) {
          state.surveys = items;
        } else {
          state.surveys = [...state.surveys, ...items];
        }
        state.totalCampaignSurveys = total;
        state.error = null;
        state.pending = false;
      })
      .addCase(getAllSurveys.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      });
  },
});

export const { resetCampaignsState, setCampaignsActiveTab, setCampaignPayload, resetCampaignsSurveys } =
  campaignsSlice.actions;

export default campaignsSlice;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { SurveyPayload, DiscoverSurveyState, discoverSurveyStatuses, DiscoverSurveysActiveTab } from "./types";
import { getAllDiscoveredSurveys } from "./actions";
import { getSurveyTags } from "store/create-survey/survey-tags/actions";
import { SurveyTags } from "store/create-survey/survey-tags/types";

const initialState: DiscoverSurveyState = {
  pending: false,
  discoveredSurveys: [],
  tags: [],
  selectedTags: [],
  error: null,
  activeTab: "All",
  surveyPayload: {
    pageNumber: 1,
    pageOrder: "desc",
    pageSize: 12,
    pageOrderBy: "publishedAt",
    statuses: discoverSurveyStatuses[DiscoverSurveysActiveTab.all],
    chainId: "all",
    currencyCode: "all",
  },
};

const discoverSurveySlice = createSlice({
  name: "discoverSurvey",
  initialState: {
    ...initialState,
  },
  reducers: {
    resetDiscoverSurveyState: () => {
      return initialState;
    },
    resetDiscoverSurveys: state => {
      state.discoveredSurveys = [];
    },
    resetSurveysPayload: state => {
      state.surveyPayload = initialState.surveyPayload;
    },
    resetSelectedTags: state => {
      state.selectedTags = initialState.selectedTags;
    },
    setDiscoverSurveyPayload: (state, action: PayloadAction<Partial<SurveyPayload | undefined>>) => {
      state.surveyPayload = { ...state.surveyPayload, ...action.payload };
    },

    setDiscoverSelectedTags: (state, action: PayloadAction<SurveyTags[]>) => {
      state.selectedTags = action.payload;

      state.surveyPayload = {
        ...state.surveyPayload,
        tagsIds: action.payload.map(({ id }) => id),
        pageNumber: 1,
        pageSize: 12,
      };
    },
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;

      state.surveyPayload = {
        ...state.surveyPayload,
        statuses: discoverSurveyStatuses[action.payload as DiscoverSurveysActiveTab],
      };
    },
  },
  extraReducers: builder => {
    builder
      // Get Discovered Survey
      .addCase(getAllDiscoveredSurveys.pending, state => {
        state.pending = true;
      })
      .addCase(getAllDiscoveredSurveys.fulfilled, (state, action) => {
        const { items, total } = action.payload;
        state.totalSurveys = total;
        if (state.surveyPayload.pageNumber === 1) {
          state.discoveredSurveys = items;
        } else {
          state.discoveredSurveys = [...state.discoveredSurveys, ...items];
        }
        state.error = null;
        state.pending = false;
      })
      .addCase(getAllDiscoveredSurveys.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // get Survey Tags
      .addCase(getSurveyTags.pending, state => {
        state.pending = true;
      })
      .addCase(getSurveyTags.fulfilled, (state, action) => {
        const { items } = action.payload;
        state.tags = items;
        state.error = null;
        state.pending = false;
      })
      .addCase(getSurveyTags.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      });
  },
});

export const {
  resetDiscoverSurveyState,
  resetDiscoverSurveys,
  resetSurveysPayload,
  setDiscoverSurveyPayload,
  setActiveTab,
  setDiscoverSelectedTags,
  resetSelectedTags,
} = discoverSurveySlice.actions;

export default discoverSurveySlice;

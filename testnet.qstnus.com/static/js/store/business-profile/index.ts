import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { getDiscoveredBusinessItem, getBusinessNftCollections } from "./actions";
import { getAllDiscoveredSurveys } from "store/discover-survey/actions";

import { BusinessItemState, CollectionsPayload } from "./types";
import { DiscoverSurveysActiveTab, SurveyPayload, discoverSurveyStatuses } from "store/discover-survey/types";

const initialState: BusinessItemState = {
  pending: false,
  error: null,
  businessSurveys: [],
  businessCollections: [],
  surveyBusinessPayload: {
    pageNumber: 1,
    pageOrder: "desc",
    pageSize: 12,
    pageOrderBy: "publishedAt",
    statuses: discoverSurveyStatuses[DiscoverSurveysActiveTab.all],
  },
  businessCollectionPayload: {
    pageOrderBy: "createdAt",
    pageOrder: "desc",
    pageNumber: 1,
    pageSize: 12,
  },
};

const businessItemSlice = createSlice({
  name: "businessItem",
  initialState: {
    ...initialState,
  },
  reducers: {
    resetBusinessItemState: () => {
      return initialState;
    },
    resetBusinessItemData: state => {
      const newState = { ...initialState, businessItem: state.businessItem };
      return newState;
    },
    setBusinessItemPayload: (state, action: PayloadAction<Partial<SurveyPayload | undefined>>) => {
      state.surveyBusinessPayload = { ...state.surveyBusinessPayload, ...action.payload };
    },
    setBusinessCollectionPayload: (state, action: PayloadAction<Partial<CollectionsPayload | undefined>>) => {
      state.businessCollectionPayload = { ...state.businessCollectionPayload, ...action.payload };
    },
  },
  extraReducers: builder => {
    builder
      // get Business Item
      .addCase(getDiscoveredBusinessItem.pending, state => {
        state.pending = true;
      })
      .addCase(getDiscoveredBusinessItem.fulfilled, (state, action) => {
        state.businessItem = action.payload;
        state.error = null;
        state.pending = false;
      })
      .addCase(getDiscoveredBusinessItem.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // Get Discovered Survey
      .addCase(getAllDiscoveredSurveys.pending, state => {
        state.pending = true;
      })
      .addCase(getAllDiscoveredSurveys.fulfilled, (state, action) => {
        const { items, total } = action.payload;
        state.totalSurveys = total;
        if (state.surveyBusinessPayload.pageNumber === 1) {
          state.businessSurveys = items;
        } else {
          state.businessSurveys = [...state.businessSurveys, ...items];
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
      // Get Business Collections
      .addCase(getBusinessNftCollections.pending, state => {
        state.pending = true;
      })
      .addCase(getBusinessNftCollections.fulfilled, (state, action) => {
        const { items, total } = action.payload;
        state.totalCollections = total;
        if (state.businessCollectionPayload.pageNumber === 1) {
          state.businessCollections = items;
        } else {
          state.businessCollections = [...state.businessCollections, ...items];
        }
        state.error = null;
        state.pending = false;
      })
      .addCase(getBusinessNftCollections.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      });
  },
});

export const { resetBusinessItemState, setBusinessItemPayload, setBusinessCollectionPayload, resetBusinessItemData } =
  businessItemSlice.actions;

export default businessItemSlice;

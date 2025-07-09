import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { getAllDiscoveredBusinesses } from "./actions";

import { BusinessesPayload, DiscoverBusinessesState } from "./types";
import { SurveyTags } from "store/create-survey/survey-tags/types";
import { getSurveyTags } from "store/create-survey/survey-tags/actions";

const initialState: DiscoverBusinessesState = {
  pending: false,
  error: null,
  discoveredBusinesses: [],
  selectedTags: [],
  tags: [],
  businessesPayload: {
    pageNumber: 1,
    pageOrder: "desc",
    pageSize: 12,
    pageOrderBy: "createdAt",
  },
};

const discoverBusinessesSlice = createSlice({
  name: "discoverBusinesses",
  initialState: {
    ...initialState,
  },
  reducers: {
    resetDiscoverBusinessesState: () => {
      return initialState;
    },
    resetDiscoverBusinesses: state => {
      state.discoveredBusinesses = [];
    },
    setDiscoverBusinessSelectedTags: (state, action: PayloadAction<SurveyTags[]>) => {
      state.selectedTags = action.payload;

      state.businessesPayload = {
        ...state.businessesPayload,
        tagsIds: action.payload.map(({ id }) => id),
        pageNumber: 1,
        pageSize: 12,
      };
    },
    setDiscoverBusinessesPayload: (state, action: PayloadAction<Partial<BusinessesPayload | undefined>>) => {
      state.businessesPayload = { ...state.businessesPayload, ...action.payload };
    },
  },
  extraReducers: builder => {
    builder

      .addCase(getAllDiscoveredBusinesses.pending, state => {
        state.pending = true;
      })
      .addCase(getAllDiscoveredBusinesses.fulfilled, (state, action) => {
        const { items, total } = action.payload;
        state.totalBusinesses = total;
        if (state.businessesPayload.pageNumber === 1) {
          state.discoveredBusinesses = items;
        } else {
          state.discoveredBusinesses = [...state.discoveredBusinesses, ...items];
        }
        state.error = null;
        state.pending = false;
      })
      .addCase(getAllDiscoveredBusinesses.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // get Business Tags
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
  resetDiscoverBusinessesState,
  setDiscoverBusinessSelectedTags,
  resetDiscoverBusinesses,
  setDiscoverBusinessesPayload,
} = discoverBusinessesSlice.actions;

export default discoverBusinessesSlice;

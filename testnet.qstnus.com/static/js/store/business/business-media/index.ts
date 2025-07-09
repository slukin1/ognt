import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { BusinessMediaPayload, BusinessMediaState } from "./types";

import { getBusinessMediaData } from "./actions";

const initialState: BusinessMediaState = {
  pending: false,
  error: null,
  collections: [],
  businessMediaPayload: {
    pageOrderBy: "createdAt",
    pageOrder: "desc",
    pageSize: 10,
    pageNumber: 1,
  },
};

const businessMediaSlice = createSlice({
  name: "businessMedia",
  initialState: {
    ...initialState,
  },
  reducers: {
    resetBusinessMediaState: () => {
      return initialState;
    },
    resetBusinessCollections: state => {
      state.collections = [];
    },

    setBusinessMediaPayload: (state, action: PayloadAction<Partial<BusinessMediaPayload>>) => {
      state.businessMediaPayload = { ...state.businessMediaPayload, ...action.payload };
    },
  },
  extraReducers: builder => {
    builder
      // Get Business Media Data
      .addCase(getBusinessMediaData.pending, state => {
        state.pending = true;
      })
      .addCase(getBusinessMediaData.fulfilled, (state, action) => {
        const { items, total } = action.payload;
        state.totalNftItems = total;
        if (state.businessMediaPayload.pageNumber === 1) {
          state.collections = items;
        } else {
          state.collections = [...state.collections, ...items];
        }
        state.error = null;
        state.pending = false;
      })
      .addCase(getBusinessMediaData.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      });
  },
});

export const { resetBusinessMediaState, resetBusinessCollections, setBusinessMediaPayload } =
  businessMediaSlice.actions;

export default businessMediaSlice;

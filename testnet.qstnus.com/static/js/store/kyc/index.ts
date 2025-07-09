import { createSlice } from "@reduxjs/toolkit";

import { updateKYC, getKYCUrl } from "./actions";

import { KYCState } from "./types";

const initialState: KYCState = {
  pending: false,
  error: null,
};

const kycSlice = createSlice({
  name: "kyc",
  initialState: {
    ...initialState,
  },
  reducers: {
    resetKYCState: () => {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder
      // update KYC
      .addCase(updateKYC.pending, state => {
        state.pending = true;
      })
      .addCase(updateKYC.fulfilled, state => {
        state.error = null;
        state.pending = false;
      })
      .addCase(updateKYC.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // get KYC url
      .addCase(getKYCUrl.pending, state => {
        state.pending = true;
      })
      .addCase(getKYCUrl.fulfilled, (state, action) => {
        const { url } = action.payload;
        state.kYCUrl = url;
        state.error = null;
        state.pending = false;
      })
      .addCase(getKYCUrl.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      });
  },
});

export const { resetKYCState } = kycSlice.actions;

export default kycSlice;

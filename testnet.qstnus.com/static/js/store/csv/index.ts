import { createSlice } from "@reduxjs/toolkit";

import { getSurveyCSV, getSurveyUserCSV } from "./actions";

import { DownloadCSVState } from "./types";

const initialState: DownloadCSVState = {
  pending: false,
  error: null,
  csvData: "",
  csvUserData: "",
};

const CSVSlice = createSlice({
  name: "csv",
  initialState: {
    ...initialState,
  },
  reducers: {
    resetCSVState: () => {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder

      .addCase(getSurveyCSV.pending, state => {
        state.pending = true;
      })
      .addCase(getSurveyCSV.fulfilled, (state, action) => {
        state.csvData = action.payload;
        state.error = null;
        state.pending = false;
      })
      .addCase(getSurveyCSV.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      .addCase(getSurveyUserCSV.pending, state => {
        state.pending = true;
      })
      .addCase(getSurveyUserCSV.fulfilled, (state, action) => {
        state.csvUserData = action.payload;
        state.error = null;
        state.pending = false;
      })
      .addCase(getSurveyUserCSV.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      });
  },
});

export const { resetCSVState } = CSVSlice.actions;

export default CSVSlice;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getConfigs, getSurveyTemplates } from "./actions";

import { UtilsState, SurveyTemplateItem } from "./types";

const initialState: UtilsState = {
  configs: null,
  ghostSession: null,
  surveyTemplates: null,
  activeTemplate: null,
  pending: false,
  error: null,
};

const utilsSlice = createSlice({
  name: "utils",
  initialState: {
    ...initialState,
  },
  reducers: {
    resetUtilsState: () => {
      return initialState;
    },
    setGhostToken: (state, action: PayloadAction<string>) => {
      const session = { ghostToken: action.payload, isAnyReward: false };
      state.ghostSession = session;
    },
    setGhostSessionReward: (state, action: PayloadAction<boolean>) => {
      if (state.ghostSession) {
        const session = { ...state.ghostSession, isAnyReward: action.payload };
        state.ghostSession = session;
      }
    },
    setActiveTemplate: (state, action: PayloadAction<SurveyTemplateItem>) => {
      state.activeTemplate = action.payload;
    },
    resetGhostSession: state => {
      state.ghostSession = null;
    },
    resetActiveTemplate: state => {
      state.activeTemplate = null;
    },
  },
  extraReducers: builder => {
    builder
      // get configs
      .addCase(getConfigs.pending, state => {
        state.pending = true;
      })
      .addCase(getConfigs.fulfilled, (state, action) => {
        state.configs = action.payload.config;
        state.error = null;
        state.pending = false;
      })
      .addCase(getConfigs.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // get survey templates
      .addCase(getSurveyTemplates.pending, state => {
        state.pending = true;
      })
      .addCase(getSurveyTemplates.fulfilled, (state, action) => {
        state.surveyTemplates = action.payload;
        state.error = null;
        state.pending = false;
      })
      .addCase(getSurveyTemplates.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      });
  },
});

export const {
  resetUtilsState,
  setGhostToken,
  resetGhostSession,
  setGhostSessionReward,
  setActiveTemplate,
  resetActiveTemplate,
} = utilsSlice.actions;

export default utilsSlice;

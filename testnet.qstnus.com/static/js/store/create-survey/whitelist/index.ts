import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { inviteUsersToSurvey, saveUsersToWhitelist } from "./actions";
import { getSurveyInfo } from "../survey/actions";
import { SurveyWhitelistState, WhitelistedEmail } from "./types";

const initialState: SurveyWhitelistState = {
  pending: false,
  error: null,
  whitelistEmails: [],
  updatedWhitelistEmails: [],
};

const surveyWhiteListSlice = createSlice({
  name: "surveyWhitelist",
  initialState: {
    ...initialState,
  },
  reducers: {
    resetSurveyWhitelistState: () => {
      return initialState;
    },
    addWhitelistEmail: (state, action: PayloadAction<WhitelistedEmail>) => {
      state.whitelistEmails = [...state.whitelistEmails, action.payload];
    },
    addWhitelistEmails: (state, action: PayloadAction<WhitelistedEmail[]>) => {
      const existingEmails = new Set(state.whitelistEmails.map(we => we.email));

      const filteredPayload = action.payload.filter(we => !existingEmails.has(we.email));

      state.whitelistEmails = [...state.whitelistEmails, ...filteredPayload];
    },
    updateWhitelistEmail: state => {
      state.updatedWhitelistEmails = state.whitelistEmails;
    },
    removeWhitelistEmail: (state, action: PayloadAction<string>) => {
      state.whitelistEmails = state.whitelistEmails.filter(({ email }) => email !== action.payload);
    },
    changeWhitelistEmailOnSuccess: state => {
      const updatedData = state.whitelistEmails.map(item => ({ ...item, emailSent: true }));
      state.whitelistEmails = updatedData;
      state.updatedWhitelistEmails = updatedData;
    },
  },
  extraReducers: builder => {
    builder
      // get Survey Info
      .addCase(getSurveyInfo.pending, state => {
        state.pending = true;
      })
      .addCase(getSurveyInfo.fulfilled, (state, action) => {
        const { whitelists } = action.payload;
        state.whitelistEmails = whitelists;
        state.updatedWhitelistEmails = whitelists;
        state.error = null;
        state.pending = false;
      })
      .addCase(getSurveyInfo.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // send invite to survey
      .addCase(inviteUsersToSurvey.pending, state => {
        state.pending = true;
      })
      .addCase(inviteUsersToSurvey.fulfilled, state => {
        state.error = null;
        state.pending = false;
      })
      .addCase(inviteUsersToSurvey.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // save users to survey whitelist
      .addCase(saveUsersToWhitelist.pending, state => {
        state.pending = true;
      })
      .addCase(saveUsersToWhitelist.fulfilled, state => {
        state.error = null;
        state.pending = false;
      })
      .addCase(saveUsersToWhitelist.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      });
  },
});

export const {
  addWhitelistEmail,
  removeWhitelistEmail,
  resetSurveyWhitelistState,
  updateWhitelistEmail,
  changeWhitelistEmailOnSuccess,
  addWhitelistEmails,
} = surveyWhiteListSlice.actions;

export default surveyWhiteListSlice;

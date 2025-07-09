import { createSlice } from "@reduxjs/toolkit";

import { CompleteSurveyState } from "./types";
import {
  getSurveyFillingInfo,
  getSurveyAnswers,
  sendSurveyAnswers,
  sendClaimRequest,
  updateTimeCompleted,
  checkClaim,
  getStripeAccountId,
  getStripeSessionSecret,
  sendProtectRequest,
} from "./actions";

const initialState: CompleteSurveyState = {
  pending: false,
  error: null,
  answers: {},
  stripeData: null,
};

const completeSurveySlice = createSlice({
  name: "completeSurvey",
  initialState: {
    ...initialState,
  },
  reducers: {
    resetCompleteSurveyState: () => {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder
      // Get Survey Info
      .addCase(getSurveyFillingInfo.pending, state => {
        state.pending = true;
      })
      .addCase(getSurveyFillingInfo.fulfilled, (state, action) => {
        state.surveyData = action.payload;
        state.error = null;
        state.pending = false;
      })
      .addCase(getSurveyFillingInfo.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // Get Survey Answers
      .addCase(getSurveyAnswers.pending, state => {
        state.pending = true;
      })
      .addCase(getSurveyAnswers.fulfilled, (state, action) => {
        const { answers, status, score, id } = action.payload;
        state.status = status;
        state.score = score;
        if (id) {
          state.responseId = id;
        }
        if (answers && answers.length > 0) {
          state.answers = answers.reduce((acc, curr) => ({ ...acc, [curr.key]: curr.answer }), {});
        }
        state.error = null;
        state.pending = false;
      })
      .addCase(getSurveyAnswers.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // Send Survey Answers
      .addCase(sendSurveyAnswers.pending, state => {
        state.pending = true;
      })
      .addCase(sendSurveyAnswers.fulfilled, state => {
        state.error = null;
        state.pending = false;
      })
      .addCase(sendSurveyAnswers.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // Send Claim Request
      .addCase(sendClaimRequest.pending, state => {
        state.pending = true;
      })
      .addCase(sendClaimRequest.fulfilled, state => {
        state.error = null;
        state.pending = false;
      })
      .addCase(sendClaimRequest.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // Update Time Completed
      .addCase(updateTimeCompleted.pending, state => {
        state.pending = true;
      })
      .addCase(updateTimeCompleted.fulfilled, state => {
        state.error = null;
        state.pending = false;
      })
      .addCase(updateTimeCompleted.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // Check claim
      .addCase(checkClaim.pending, state => {
        state.pending = true;
      })
      .addCase(checkClaim.fulfilled, state => {
        state.error = null;
        state.pending = false;
      })
      .addCase(checkClaim.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // Get stripe account ID
      .addCase(getStripeAccountId.pending, state => {
        state.pending = true;
      })
      .addCase(getStripeAccountId.fulfilled, (state, action) => {
        const { accountId } = action.payload;
        state.stripeData = { accountId };
        state.error = null;
        state.pending = false;
      })
      .addCase(getStripeAccountId.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // Get stripe session key
      .addCase(getStripeSessionSecret.pending, state => {
        state.pending = true;
      })
      .addCase(getStripeSessionSecret.fulfilled, (state, action) => {
        const { clientSecret } = action.payload;
        if (state.stripeData) {
          state.stripeData = { ...state.stripeData, clientSecret };
        }
        state.error = null;
        state.pending = false;
      })
      .addCase(getStripeSessionSecret.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      })
      // Protect Survey Data
      .addCase(sendProtectRequest.pending, state => {
        state.pending = true;
      })
      .addCase(sendProtectRequest.fulfilled, state => {
        state.error = null;
        state.pending = false;
      })
      .addCase(sendProtectRequest.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      });
  },
});

export const { resetCompleteSurveyState } = completeSurveySlice.actions;

export default completeSurveySlice;

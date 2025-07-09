import { createSlice } from "@reduxjs/toolkit";

import { getSurveyAnswers } from "../complete-survey/actions";

import { UserSurveyAnswersState } from "./types";

const initialState: UserSurveyAnswersState = {
  pending: false,
  error: null,
  answers: [],
  pages: [],
};

const userSurveyAnswersSlice = createSlice({
  name: "userSurveyAnswers",
  initialState: {
    ...initialState,
  },
  reducers: {
    resetSurveyAnswersState: () => {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder
      // Get Survey Answers
      .addCase(getSurveyAnswers.pending, state => {
        state.pending = true;
      })
      .addCase(getSurveyAnswers.fulfilled, (state, action) => {
        const { answers, pages, title } = action.payload;
        state.answers = answers;
        state.pages = pages;
        state.title = title;
        state.error = null;
        state.pending = false;
      })
      .addCase(getSurveyAnswers.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.pending = false;
        }
      });
  },
});

export const { resetSurveyAnswersState } = userSurveyAnswersSlice.actions;

export default userSurveyAnswersSlice;

import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "store/store";
import { GenerateSurveyModalProps } from "./types";

export const selectCombinedData = createSelector(
  [
    (state: AppState) => state.createSurvey.pending,
    (state: AppState) => (state.modal.props as unknown as GenerateSurveyModalProps).isQuiz,
  ],
  (pending, isQuiz) => ({
    pending,
    isQuiz,
  }),
);

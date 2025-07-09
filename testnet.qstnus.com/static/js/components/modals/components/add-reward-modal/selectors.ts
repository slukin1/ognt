import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "store/store";
import { AddRewardModalProps } from "./types";

export const selectCombinedData = createSelector(
  [
    (state: AppState) => state.adminSurvey.pending,
    (state: AppState) => (state.modal.props as unknown as AddRewardModalProps).surveyId,
    (state: AppState) => (state.modal.props as unknown as AddRewardModalProps).name,
    (state: AppState) => (state.modal.props as unknown as AddRewardModalProps).isQuiz,
    (state: AppState) => state.adminSurvey.adminSurveyPayload,
  ],
  (pending, surveyId, name, isQuiz, adminSurveyPayload) => ({
    pending,
    surveyId,
    name,
    isQuiz,
    adminSurveyPayload,
  }),
);

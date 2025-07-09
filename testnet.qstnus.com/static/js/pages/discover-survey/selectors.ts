import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "store/store";

export const selectCombinedData = createSelector(
  [
    (state: AppState) => state.discoverSurvey.discoveredSurveys,
    (state: AppState) => state.discoverSurvey.pending,
    (state: AppState) => state.discoverSurvey.surveyPayload,
    (state: AppState) => state.discoverSurvey.activeTab,
    (state: AppState) => state.discoverSurvey.totalSurveys,
    (state: AppState) => state.discoverSurvey.selectedTags,
    (state: AppState) => state.discoverSurvey.tags,
  ],
  (discoveredSurveys, pending, surveyPayload, activeTab, totalSurveys, selectedTags, tags) => ({
    discoveredSurveys,
    pending,
    surveyPayload,
    activeTab,
    totalSurveys,
    selectedTags,
    tags,
  }),
);

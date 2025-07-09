import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "store/store";

export const selectCombinedData = createSelector(
  [
    (state: AppState) => state.discoverBusinesses.discoveredBusinesses,
    (state: AppState) => state.discoverBusinesses.pending,
    (state: AppState) => state.discoverBusinesses.businessesPayload,
    (state: AppState) => state.discoverBusinesses.totalBusinesses,
    (state: AppState) => state.discoverBusinesses.tags,
    (state: AppState) => state.discoverBusinesses.selectedTags,
  ],
  (discoveredBusinesses, pending, businessesPayload, totalBusinesses, tags, selectedTags) => ({
    discoveredBusinesses,
    pending,
    businessesPayload,
    totalBusinesses,
    tags,
    selectedTags,
  }),
);

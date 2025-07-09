import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "store/store";

export const selectCombinedData = createSelector(
  [
    (state: AppState) => state.createSurvey.pending,
    (state: AppState) => state.createSurvey.reward,
    (state: AppState) => state.createSurvey.participants,
    (state: AppState) => state.createSurvey.totalRewardAmount,
    (state: AppState) => state.createSurvey.fiatPaymentData,
    (state: AppState) => state.createSurvey.paymentNetwork,
    (state: AppState) => state.createSurvey.cryptoPaymentData,
  ],
  (
    createSurveyPending,
    reward,
    participants,
    totalRewardAmount,
    fiatPaymentData,
    paymentNetwork,
    cryptoPaymentData,
  ) => ({
    createSurveyPending,
    reward,
    participants,
    totalRewardAmount,
    fiatPaymentData,
    paymentNetwork,
    cryptoPaymentData,
  }),
);

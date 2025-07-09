import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "store/store";
import { ActionModalProps } from "./types";

export const selectCombinedData = createSelector(
  [
    (state: AppState) => (state.modal.props as unknown as ActionModalProps).title,
    (state: AppState) => (state.modal.props as unknown as ActionModalProps).description,
    (state: AppState) => (state.modal.props as unknown as ActionModalProps).btnArr,
    (state: AppState) => (state.modal.props as unknown as ActionModalProps).isLoading,
  ],
  (title, description, btnArr, isLoading) => ({
    title,
    description,
    btnArr,
    isLoading,
  }),
);

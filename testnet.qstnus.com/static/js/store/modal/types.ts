import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { ROUTES } from "router/routes";

export type ModalState<T> = {
  modalName: null | keyof typeof ModalNames;
  hiddenModalName: null | keyof typeof ModalNames;
  rootId: (typeof ROUTES)[keyof typeof ROUTES] | "modal-story" | "modal";
  props?: T;
  title?: string | React.ReactNode;
  modalType?: keyof typeof ModalType;
  clickOutsideHandler?: (() => void) | null;
};

export type ShowModalProps<T> = {
  modalName: ModalState<T>["modalName"];
  rootId?: ModalState<T>["rootId"];
  props?: T;
  title?: string | React.ReactNode;
  modalType?: ModalState<T>["modalType"];
  clickOutsideHandler?: (() => void) | null;
};

export interface ModalProps<T> extends ActionCreatorWithPayload<ShowModalProps<T>, string> {}

export enum ModalNames {
  actionModal = "actionModal",
  generateSurveyModal = "generateSurveyModal",
  addRewardModal = "addRewardModal",
}

export enum ModalType {
  modal = "modal",
}

export type PartialUpdateModalProps<T> = ActionCreatorWithPayload<Partial<ShowModalProps<T>["props"]>>;

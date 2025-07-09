import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalNames, ModalState, ShowModalProps } from "./types";

const initialState: ModalState<undefined> = {
  modalName: null,
  hiddenModalName: null,
  modalType: "modal",
  rootId: "modal",
  props: undefined,
  clickOutsideHandler: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: <T>(state: ModalState<T>, action: PayloadAction<ShowModalProps<T>>) => {
      state.modalName = action.payload.modalName;
      state.rootId = action.payload.rootId ? action.payload.rootId : "modal";
      state.props = action.payload.props;
      state.title = action.payload.title;
      state.modalType = action.payload.modalType ? action.payload.modalType : "modal";
      state.clickOutsideHandler = action.payload.clickOutsideHandler;
    },

    partialUpdateModalProps: <T>(state: ModalState<T>, action: PayloadAction<ShowModalProps<T>["props"]>) => {
      state.props = action.payload ? { ...state.props, ...action.payload } : state.props;
    },

    hideModal: () => initialState,

    temporaryHideModal: <T>(state: ModalState<T>) => {
      state.hiddenModalName = state.modalName;
      state.modalName = null;
    },

    restoreTemporaryHiddenModal: <T>(state: ModalState<T>) => {
      state.modalName = state.hiddenModalName;
      state.hiddenModalName = null;
    },
  },
});

export const { showModal, hideModal, partialUpdateModalProps, temporaryHideModal, restoreTemporaryHiddenModal } =
  modalSlice.actions;
export { ModalNames };
export default modalSlice;

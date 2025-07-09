import React from "react";

import { ModalWrapper } from "./components";

import { hideModal } from "store/modal";
import { useAppDispatch, useAppSelector } from "store/store";

import { components } from "./constants";

const Modal: React.FC = () => {
  const modalName = useAppSelector(state => state.modal.modalName);
  const rootId = useAppSelector(state => state.modal.rootId);
  const clickOutsideHandler = useAppSelector(state => state.modal.clickOutsideHandler);

  const dispatch = useAppDispatch();
  const ModalComponent = modalName ? components[modalName] : null;

  const onOutsideClick = () => {
    if (clickOutsideHandler) {
      clickOutsideHandler();
    } else {
      dispatch(hideModal());
    }
  };

  if (!ModalComponent) {
    return null;
  }

  return (
    <>
      {ModalComponent && (
        <ModalWrapper onOutsideClick={onOutsideClick} id={rootId}>
          <ModalComponent />
        </ModalWrapper>
      )}
    </>
  );
};

export default Modal;

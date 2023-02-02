import React from "react";
import ReactDOM from "react-dom";
import { ModalStateContext, ModalDispatchContext } from "./ModalContext"; // 경로 변경

import { ModalContainer, ModalBackground, ModalContentWrapper, ModalContent } from "./Modal.style";

const appRoot = document.getElementById("root");

const Modal = () => {
  const { modalContent, isOpen } = React.useContext(ModalStateContext);
  const { closeModal } = React.useContext(ModalDispatchContext);

  return isOpen
    ? ReactDOM.createPortal(
        <ModalContainer>
          <ModalBackground onClick={closeModal}></ModalBackground>
          <ModalContentWrapper>
            <ModalContent>{modalContent}</ModalContent>
          </ModalContentWrapper>
        </ModalContainer>,
        appRoot
      )
    : null;
};

export default Modal;

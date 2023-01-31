import React from "react";

import { ModalContainer, ModalBackground, ModalContentWrapper, ModalContent } from "./Modal.style";

const Modal = ({ onClose, children }) => {
  return (
    <ModalContainer>
      <ModalBackground onClick={onClose}></ModalBackground>
      <ModalContentWrapper>
        <ModalContent>{children}</ModalContent>
      </ModalContentWrapper>
    </ModalContainer>
  );
};

export default Modal;

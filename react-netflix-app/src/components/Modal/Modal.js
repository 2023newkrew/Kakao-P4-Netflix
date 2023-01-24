import { ModalContainer, ModalWrapper } from "./Modal.style";
import reactDom from "react-dom";

const Portal = ({ children }) => {
  const modalElement = document.getElementById("modal");
  return reactDom.createPortal(children, modalElement);
};

const Modal = ({ onClose, children }) => {
  return (
    <Portal>
      <ModalContainer onClick={onClose}>
        <ModalWrapper onClick={(e) => e.stopPropagation()}>{children}</ModalWrapper>
      </ModalContainer>
    </Portal>
  );
};

export default Modal;

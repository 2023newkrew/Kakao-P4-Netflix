import { ModalContainer, ModalWrapper } from "@styles/modal/Modal.style";
// TODO : reactDom의 크기 133.5k 생각보다 크다 로직 변경 요망
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

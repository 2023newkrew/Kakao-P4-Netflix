import "@scss/modal/modal.scss";
import { useEffect, useRef } from "react";

const Modal = ({ onClose, children }) => {
  return (
    <div className="modal_container" onClick={onClose}>
      <div className="modal_wrapper" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;

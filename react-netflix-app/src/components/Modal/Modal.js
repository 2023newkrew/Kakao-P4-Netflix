import "@scss/modal/modal.scss";
import Portal from "./Portal";

const Modal = ({ onClose, children }) => {
  return (
    <Portal>
      <div className="modal_container" onClick={onClose}>
        <div className="modal_wrapper" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;

import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom";
import { Modal } from "components";

const appRoot = document.getElementById("root");

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    console.log("modal opened");
    setIsOpen(() => true);
  }, []);

  const close = useCallback(() => {
    console.log("modal closed");
    setIsOpen(() => false);
  }, []);

  return {
    Modal: isOpen
      ? ({ children }) => ReactDOM.createPortal(<Modal onClose={close}>{children}</Modal>, appRoot)
      : () => null,
    open,
    close,
    isOpen,
  };
};

export default useModal;

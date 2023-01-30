import React, { useMemo } from "react";
import useModal from "hooks/useModal";
import { Modal } from "components";

const ModalStateContext = React.createContext();
const ModalDispatchContext = React.createContext();

const ModalProvider = ({ children }) => {
  const { openModal, closeModal, modalContent, isOpen } = useModal();

  const dispatch = useMemo(() => {
    return {
      openModal,
      closeModal,
    };
  }, []);

  return (
    <ModalDispatchContext.Provider value={dispatch}>
      <ModalStateContext.Provider value={{ modalContent, isOpen }}>
        <Modal />
        {children}
      </ModalStateContext.Provider>
    </ModalDispatchContext.Provider>
  );
};

export { ModalStateContext, ModalDispatchContext, ModalProvider };

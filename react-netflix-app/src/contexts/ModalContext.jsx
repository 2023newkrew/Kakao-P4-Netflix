// 컴포넌트 말고 위치 옮기기
import React from "react";
import useModal from "hooks/useModal";
import { Modal } from "components";
import { useState } from "react";

const ModalStateContext = React.createContext();
const ModalDispatchContext = React.createContext();

const ModalProvider = ({ children }) => {
  const { openModal, closeModal, modalContent, isOpen } = useModal();
  /*
   ModalDispatchContext value로 넘겨주는 객체가 변하지 않고 유지되도록 하기 위함
   참고: https://ko.reactjs.org/docs/context.html#caveats
  */
  const [dispatch] = useState({
    openModal,
    closeModal,
  });

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

import { createContext, useContext } from 'react';

const initModalContext = {
  isOpen: false,
  close() {},
  open() {},
  setPosition() {},
};
export const ModalContext = createContext(initModalContext);

export const useModalContext = () => {
  const context = useContext(ModalContext);
  return context;
};

import { ReactNode, createContext, useContext } from 'react';

export type ModalOpenParameters = { node: ReactNode; onClose?: () => void };

export type ModalContextType = {
  isOpen: boolean;
  close: (onClose?: () => void) => void;
  open: (payload: ModalOpenParameters) => void;
  setPosition: (position: DOMRect) => void;
};
const initModalContext: ModalContextType = {
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

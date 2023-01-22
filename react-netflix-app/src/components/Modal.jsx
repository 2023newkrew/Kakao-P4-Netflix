import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import tw from 'twin.macro';
import PropTypes from 'prop-types';
import Portal from './Portal';
import useBodyScrollLock from '@/utils/hooks/useBodyScrollLock';

const Container = tw.dialog`bg-[rgba(0, 0, 0, 0.7)] fixed inset-0 z-[1000] flex h-full w-full flex-col items-center justify-center overflow-y-auto transition-all`;
const Content = tw.div`
  absolute left-[auto] top-10 mb-10 flex h-full max-h-[70%] w-full max-w-[70%] flex-col items-center justify-center bg-[#222222] text-white
  [transform-origin: 50% 12.5%] 
  [transform: translateX(0%) translateY(0px) scale(1) translateZ(0px)]
`;

const initModalContext = {
  isOpen: false,
  close() {},
  open() {},
};
const ModalContext = createContext(initModalContext);

export const useModalContext = () => {
  const context = useContext(ModalContext);
  return context;
};

export const ModalProvider = ({ children, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [node, setNode] = useState(null);
  useBodyScrollLock(isOpen);

  const open = useCallback(({ node }) => {
    setNode(node);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setNode(null);
    setIsOpen(false);
  }, []);

  const context = useMemo(() => {
    return {
      isOpen,
      open,
      close,
    };
  }, [isOpen]);

  return (
    <ModalContext.Provider value={context}>
      {children}
      {isOpen ? (
        <Portal portalId={id}>
          <Container>
            <Content>{node}</Content>
          </Container>
        </Portal>
      ) : null}
    </ModalContext.Provider>
  );
};
ModalProvider.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
};

export const useModal = (node) => {
  const { open, close } = useModalContext();

  const openModal = useCallback(() => {
    open({
      node,
    });
  }, [node, open, close]);

  return openModal;
};

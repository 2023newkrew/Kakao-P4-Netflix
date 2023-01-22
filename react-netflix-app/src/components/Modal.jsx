import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import tw from 'twin.macro';
import PropTypes from 'prop-types';
import Portal from './Portal';
import useBodyScrollLock from '@/utils/hooks/useBodyScrollLock';

const Container = tw.dialog`bg-[rgba(0, 0, 0, 0.7)] fixed inset-0 z-[1000] flex h-full w-full flex-col items-center justify-center overflow-y-auto [transition: opacity 250ms ease-in-out] opacity-0 [will-change: opacity]`;
const Content = tw.div`
  absolute overflow-y-auto left-[auto] top-0 md:top-10 flex h-full md:h-[calc(100vh - 5rem)] max-h-full w-full max-w-full md:max-w-[70%] flex-col items-center justify-center bg-[#222222] text-white
  [transform-origin: 50% 12.5%] 
  [transform: translateX(0%) translateY(0px) scale(1) translateZ(0px)]
`;
const CloseButton = tw.button`fixed right-5 top-5 rounded-full bg-[rgb(66,66,66,0.7)] text-white font-light w-10 h-10 text-xl hover:opacity-70 z-[1]`;

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
const useCloseOnEscape = (node, onEscape) => {
  useEffect(() => {
    if (!node) {
      return;
    }

    const closeOnEscape = (event) => {
      if (event.code === 'Escape') {
        onEscape();
      }
    };
    document.addEventListener('keydown', closeOnEscape);

    return () => {
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [node]);
};

export const ModalProvider = ({ children, id }) => {
  const containerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [node, setNode] = useState(null);

  const open = useCallback(({ node }) => {
    setNode(node);
    setIsOpen(true);
    setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.style.setProperty('opacity', 1);
      }
    }, 0);
  }, []);

  const close = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty('opacity', 0);
    }
    setTimeout(() => {
      setNode(null);
      setIsOpen(false);
    }, 250);
  }, []);

  useBodyScrollLock(isOpen);
  useCloseOnEscape(node, close);

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
          <Container ref={containerRef}>
            <Content>
              <CloseButton
                onClick={() => {
                  close();
                }}
              >
                X
              </CloseButton>
              {node}
            </Content>
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

export const useModal = () => {
  const { open, close } = useModalContext();

  const openModal = useCallback(
    ({ node }) => {
      open({
        node,
      });
    },
    [open, close],
  );

  return openModal;
};

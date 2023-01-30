import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import Portal from '@components/Portal';
import { CloseButton, Container, Content } from '@components/Modal/Modal.style';
import { ModalContext, useModalContext } from '@components/Modal/ModalContext';

import useBodyScrollLock from '@hooks/useBodyScrollLock';
import useEscapeKey from '@hooks/useEscapeKey';

export const ModalProvider = ({ children, id }) => {
  const containerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [node, setNode] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    const getMousePosition = (event) => {
      if (!mousePosition.x && !mousePosition.y) {
        setMousePosition({ x: event.clientX, y: event.clientY });
      }
    };

    window.addEventListener('click', getMousePosition);
    return () => {
      window.removeEventListener('click', getMousePosition);
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current || !isOpen) {
      return;
    }

    containerRef.current.style.setProperty('transform-origin', `${mousePosition.x}px ${mousePosition.y}px`);
    setTimeout(() => {
      containerRef.current.style.setProperty('--scale', 'scale(1)');
    }, 0);
  }, [isOpen, mousePosition]);

  const open = useCallback(({ node }) => {
    setNode(node);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    containerRef.current.style.setProperty('--scale', 'scale(0)');
    setTimeout(() => {
      setNode(null);
      setIsOpen(false);
    }, 250);
  }, []);

  useBodyScrollLock(isOpen);
  useEscapeKey(close);

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
                onClick={(e) => {
                  e.stopPropagation();
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

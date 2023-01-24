import { useCallback, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import Portal from '@components/Portal';
import { CloseButton, Container, Content } from '@components/Modal/Modal.style';
import { ModalContext, useModalContext } from '@components/Modal/ModalContext';

import useBodyScrollLock from '@utils/hooks/useBodyScrollLock';
import useEscapeKey from '@utils/hooks/useEscapeKey';

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

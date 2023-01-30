import { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import Portal from '@components/Portal';
import { CloseButton, Container, Content } from '@components/Modal/Modal.style';
import { ModalContext, useModalContext } from '@components/Modal/ModalContext';

import useBodyScrollLock from '@hooks/useBodyScrollLock';
import useEscapeKey from '@hooks/useEscapeKey';

export const ModalProvider = ({ children, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [node, setNode] = useState(null);
  const [containerEl, setContainerEl] = useState(null);
  const [transformOrigin, setTransformOrigin] = useState({ x: null, y: null });

  const callbackContainerRef = useCallback(
    (ref) => {
      setContainerEl(ref);
      if (ref) {
        ref.style.setProperty('transform-origin', `${transformOrigin.x}px ${transformOrigin.y}px`);
        setTimeout(() => {
          ref.style.setProperty('--scale', '1');
        }, 0);
      }
    },
    [transformOrigin],
  );

  const open = useCallback(({ node, position }) => {
    const x = position?.x ?? window.innerWidth / 2;
    const y = position?.y ?? window.innerHeight / 2;
    const width = position?.width ?? 0;
    const height = position?.height ?? 0;

    setTransformOrigin({ x: x + width / 2, y: y + height / 2 });
    setNode(node);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    containerEl.style.setProperty('--scale', '0');
    setTimeout(() => {
      setNode(null);
      setIsOpen(false);
    }, 250);
  }, [containerEl]);

  useBodyScrollLock(isOpen);
  useEscapeKey(close);

  const context = useMemo(() => {
    return {
      isOpen,
      open,
      close,
    };
  }, [isOpen, close]);

  return (
    <ModalContext.Provider value={context}>
      {children}
      {isOpen ? (
        <Portal portalId={id}>
          <Container ref={callbackContainerRef}>
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
    (payload) => {
      open(payload);
    },
    [open, close],
  );

  return openModal;
};

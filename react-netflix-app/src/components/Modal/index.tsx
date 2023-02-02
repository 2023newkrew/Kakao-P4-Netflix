import { ReactNode, useCallback, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import Portal from '@components/Portal';
import { CloseButton, Container, Content } from '@components/Modal/Modal.style';
import { ModalContext, ModalOpenParameters, useModalContext } from '@components/Modal/ModalContext';

import useBodyScrollLock from '@utilHooks/useBodyScrollLock';
import useEscapeKey from '@utilHooks/useEscapeKey';

type ModalProviderProps = {
  children: ReactNode;
  id: string;
};
export const ModalProvider = ({ children, id }: ModalProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [node, setNode] = useState<ReactNode | null>(null);
  const [containerEl, setContainerEl] = useState<HTMLElement | null>(null);
  const [transformOrigin, setTransformOrigin] = useState<{ x: number | null; y: number | null }>({ x: null, y: null });
  const handleClose = useRef<() => void>();

  const callbackContainerRef = useCallback(
    (ref: HTMLDialogElement) => {
      setContainerEl(ref);
      if (ref) {
        ref.style.setProperty('transform-origin', `${transformOrigin.x}px ${transformOrigin.y}px`);
        setTimeout(() => {
          ref.style.setProperty('--scale', '1');
        }, 50);
      }
    },
    [transformOrigin],
  );

  const open = useCallback(({ node, onClose }: { node: ReactNode; onClose?: () => void }) => {
    handleClose.current = onClose;
    setNode(node);
    setIsOpen(true);
  }, []);

  const close = useCallback(
    (onClose?: () => void) => {
      if (containerEl) {
        containerEl.style.setProperty('--scale', '0');
      }
      setTimeout(() => {
        setNode(null);
        setIsOpen(false);
        if (onClose && typeof onClose === 'function') {
          onClose();
        }
      }, 250);
    },
    [containerEl],
  );

  const setPosition = useCallback((position: DOMRect) => {
    const x = position?.x ?? window.innerWidth / 2;
    const y = position?.y ?? window.innerHeight / 2;
    const width = position?.width ?? 0;
    const height = position?.height ?? 0;

    setTransformOrigin({ x: x + width / 2, y: y + height / 2 });
  }, []);

  useBodyScrollLock(isOpen);
  useEscapeKey(() => {
    close(handleClose.current);
  });

  const context = useMemo(() => {
    return {
      isOpen,
      open,
      close,
      setPosition,
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
                  close(handleClose.current);
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
    (payload: ModalOpenParameters) => {
      open(payload);
    },
    [open, close],
  );

  return openModal;
};

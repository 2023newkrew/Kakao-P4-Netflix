import React, { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const modalRoot = document.getElementById('modal-root');

const StyledDiv = styled.div`
  z-index: 2;
  position: absolute;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  ${({ idDisplayed }) => (idDisplayed ? '' : 'display: none;')}
  background-color: rgba(0, 0, 0, 0.875);

  will-change: opacity;
  animation: fade-in 0.15s ease;
  @keyframes fade-in {
    from {
      opacity: 0;
    }
  }
`;

const PaperWrapper = styled.div`
  overflow: hidden;
  padding: 1rem;
`;

const Paper = styled.div`
  background-color: #181818;
  width: 100%;
  max-width: 1024px;
  margin: auto;
  border-radius: 8px;
  overflow: hidden;
  position: relative;

  will-change: transform, filter;
  animation: slide-up 0.25s ease-out;
  @keyframes slide-up {
    from {
      filter: blur(8px);
      transform: translateY(2rem);
    }
  }
`;

const CloseButton = styled.button`
  font-size: 2rem;
  line-height: 2rem;
  padding: 1rem;
  width: 4rem;
  aspect-ratio: 1/1;
  background-color: rgba(0, 0, 0, 0.75);
  color: white;
  border: none;
  border-radius: 50%;
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
`;

function Modal({ children, onClose }) {
  const elementRef = useRef(null);
  const [isClosing, setIsClosing] = useState(false);

  const handleCloseClick = () => {
    if (isClosing) return;
    setIsClosing(true);

    const keyframes = [{ opacity: 0 }];
    const options = {
      duration: 150,
      easing: 'ease',
      fill: 'forwards',
    };
    const animation = elementRef.current.animate(keyframes, options);
    animation.addEventListener('finish', onClose);
  };

  return createPortal(
    <StyledDiv
      ref={elementRef}
      idDisplayed={!!children}
      onClick={handleCloseClick}
    >
      <PaperWrapper>
        <Paper
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          {children}
          <CloseButton type="button" onClick={handleCloseClick}>
            X
          </CloseButton>
        </Paper>
      </PaperWrapper>
    </StyledDiv>,
    modalRoot
  );
}

export default Modal;

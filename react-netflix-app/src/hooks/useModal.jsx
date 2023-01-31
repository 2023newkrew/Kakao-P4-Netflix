import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  padding: 0 10vw;
  display: flex;
  justify-contents: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  animation: ${(props) => (props.isClosing ? fadeOut : fadeIn)} 0.2s forwards;
  z-index: 1;
`;

export default function useModal() {
  const [isOpened, setIsOpened] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const openModal = () => {
    setIsClosing(false);
    setIsOpened(true);
    document.body.style.overflowY = 'hidden';
  };

  const closeModal = () => {
    setIsClosing(true);
  };

  const handleAnimationEnd = () => {
    if (!isClosing) return;

    setIsOpened(false);
    document.body.style.removeProperty('overflow-y');
  };

  function ModalContainer({ children }) {
    if (!isOpened) return null;

    return ReactDOM.createPortal(
      <ModalWrapper
        isClosing={isClosing}
        onClick={closeModal}
        onAnimationEnd={handleAnimationEnd}
      >
        {children}
      </ModalWrapper>,
      document.body
    );
  }

  ModalContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return [ModalContainer, openModal, closeModal];
}

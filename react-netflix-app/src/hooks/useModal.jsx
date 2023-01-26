import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
  z-index: 1;
`;

export default function useModal() {
  const [isOpened, setIsOpened] = useState(false);

  const open = () => {
    setIsOpened(true);
    document.body.style.overflowY = 'hidden';
  };

  const close = () => {
    setIsOpened(false);
    document.body.style.removeProperty('overflow-y');
  };

  function Modal({ children }) {
    return isOpened
      ? ReactDOM.createPortal(
          <ModalWrapper onClick={close}>{children}</ModalWrapper>,
          document.body
        )
      : null;
  }

  Modal.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return [Modal, open, close];
}

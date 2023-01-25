import React from 'react';
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
  background-color: rgba(0, 0, 0, 0.75);
`;

const PaperWrapper = styled.div`
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

function Modal({ children }) {
  return createPortal(
    <StyledDiv idDisplayed={!!children}>
      <PaperWrapper>
        <Paper>
          <CloseButton type="button">X</CloseButton>
          {children}
        </Paper>
      </PaperWrapper>
    </StyledDiv>,
    modalRoot
  );
}

export default Modal;

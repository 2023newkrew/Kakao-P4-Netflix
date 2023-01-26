import { COLORS } from '@/constants/colors.contant';
import { GlobalPortal } from '@/GlobalPortal';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface ModalProps {
  children: ReactNode
}

export function Modal({ children } : ModalProps) {
  return (
    <GlobalPortal.Consumer>
      <ModalContainer>
        {children}
      </ModalContainer>
    </GlobalPortal.Consumer>
  );
}

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${COLORS.blackTrans};
`;

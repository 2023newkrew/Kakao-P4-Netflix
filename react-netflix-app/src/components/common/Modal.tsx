import { COLORS } from '@/constants/colors.contant';
import { GlobalPortal } from '@/GlobalPortal';
import { isModalOpenState } from '@/recoil/modal.recoil';
import { MouseEvent, ReactNode, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

interface ModalProps {
  children: ReactNode
}

export function Modal({ children } : ModalProps) {
  const setIsOpen = useSetRecoilState(isModalOpenState);
  
  const handleClose = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const y = window.scrollY;
    document.body.style.setProperty('overflow-y', 'scroll');
    document.body.style.setProperty('position', 'fixed');
    document.body.style.setProperty('inset', `-${y}px 0px 0px`);

    return (() => {
      document.body.style.removeProperty('overflow-y');
      document.body.style.removeProperty('position');
      document.body.style.removeProperty('inset');
      window.scrollTo(0, y);
    });
  }, []);
  
  return (
    <GlobalPortal.Consumer>
      <ModalContainer onClick={handleClose}>
        {children}
      </ModalContainer>
    </GlobalPortal.Consumer>
  );
}

const ModalContainer = styled.div`
  position: fixed;
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

import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@assets/close-icon.svg';
import { Background, CloseButton, ModalContainer } from './styles';
import useOutsideClick from '@/hooks/use-outside-click';
import ModalPortal from '../modal-portal';

const BasicModal = ({ children, onClose }) => {
  const modalRef = useRef(null);

  useOutsideClick(modalRef, onClose);

  useEffect(() => {
    const body = document.querySelector('body');
    const defaultOverflow = body.style.overflow;

    body.style.overflow = 'hidden';

    return () => {
      body.style.overflow = defaultOverflow;
    };
  }, []);

  return (
    <ModalPortal>
      <Background>
        <ModalContainer ref={modalRef}>
          <CloseButton onClick={onClose} src={CloseIcon} alt="Close Modal" />
          {children}
        </ModalContainer>
      </Background>
    </ModalPortal>
  );
};

BasicModal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

BasicModal.defaultProps = {
  children: null,
};

export default BasicModal;

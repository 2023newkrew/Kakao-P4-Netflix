import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@assets/close-icon.svg';
import { Background, CloseButton, ModalContainer } from './styles';

const BasicModal = ({ children, onClose }) => (
  <Background>
    <ModalContainer>
      <CloseButton onClick={onClose} src={CloseIcon} alt="Close Modal" />
      {children}
    </ModalContainer>
  </Background>
);

BasicModal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

BasicModal.defaultProps = {
  children: null,
};

export default BasicModal;

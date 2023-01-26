import React from 'react';
import PropTypes from 'prop-types';
import { IMAGE_URL_MAP } from '@/configs/image';
import BasicModal from '../basic-modal';
import { ModalContent, ModalOverview, ModalTitle, MovieBackdrop } from './styles';

const MovieModal = ({ movie, onClose }) => {
  const { title, backdrop_path: backdropPath, overview } = movie || {};

  return (
    <BasicModal onClose={onClose}>
      <MovieBackdrop src={`${IMAGE_URL_MAP.ORIGINAL}${backdropPath}`} />
      <ModalContent>
        <ModalTitle>{title}</ModalTitle>
        <ModalOverview>{overview}</ModalOverview>
      </ModalContent>
    </BasicModal>
  );
};

MovieModal.propTypes = {
  movie: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default React.memo(MovieModal);

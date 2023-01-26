import React from 'react';
import PropTypes from 'prop-types';
import { IMAGE_URL_MAP } from '@/configs/image';
import BasicModal from '../basic-modal';
import {
  ModalContent,
  ModalOverview,
  ModalSpinnerContainer,
  ModalTitle,
  MovieBackdrop,
} from './styles';
import Spinner from '@/components/common/spinner';

const MovieModal = ({ movie, onClose }) => {
  const { title, backdrop_path: backdropPath, overview } = movie || {};

  return (
    <BasicModal onClose={onClose}>
      {movie ? (
        <>
          <MovieBackdrop src={`${IMAGE_URL_MAP.ORIGINAL}${backdropPath}`} />
          <ModalContent>
            <ModalTitle>{title}</ModalTitle>
            <ModalOverview>{overview}</ModalOverview>
          </ModalContent>
        </>
      ) : (
        <ModalSpinnerContainer>
          <Spinner />
        </ModalSpinnerContainer>
      )}
    </BasicModal>
  );
};

MovieModal.propTypes = {
  movie: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default React.memo(MovieModal);

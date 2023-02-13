import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { IMAGE_URL_MAP } from '@/configs/image';
import BasicModal from '../basic-modal';
import {
  ModalContainer,
  ModalContent,
  ModalOverview,
  ModalPlayButton,
  ModalSpinnerContainer,
  ModalTitle,
  MovieBackdrop,
} from './styles';
import Spinner from '@/components/common/spinner';
import { ROUTE, ROUTE_PATH } from '@/constants/route';

const MovieModal = ({ movie, onClose }) => {
  const { title, backdrop_path: backdropPath, overview, id } = movie || {};
  const navigate = useNavigate();

  const onPlayButtonClick = () => {
    onClose();
    navigate(`${ROUTE_PATH[ROUTE.MOVIE]}/${id}`);
  };

  return (
    <BasicModal onClose={onClose}>
      {movie ? (
        <>
          {backdropPath && <MovieBackdrop src={`${IMAGE_URL_MAP.ORIGINAL}${backdropPath}`} />}
          <ModalContainer>
            <ModalContent>
              <ModalTitle>{title}</ModalTitle>
              <ModalOverview>{overview}</ModalOverview>
              <ModalPlayButton onClick={onPlayButtonClick}>시청하기</ModalPlayButton>
            </ModalContent>
          </ModalContainer>
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

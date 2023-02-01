import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MovieImage from '@components/image/MovieImage';
import CircleButton from '@components/button/CircleButton';
import { ReactComponent as CloseIcon } from '@assets/x.svg';

const ModalLayout = styled.div`
  position: relative;
  width: 80vw;
  max-height: 90vh;
  border-radius: 6px;
  background-color: black;
  overflow: auto;
`;

const CloseButton = styled(CircleButton)`
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 1;
`;

const Backdrop = styled(MovieImage).attrs({ type: 'backdrop' })`
  height: 45vw;
  mask-image: linear-gradient(black, transparent);
`;

const InfoContainer = styled.div`
  margin-top: -10%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.div`
  font-size: 3vw;
`;

const Overview = styled.div`
  font-size: 1.6vw;
`;

export default function InfoModal({ close, movie }) {
  const { backdrop_path, title, overview } = movie;

  return (
    <ModalLayout onClick={(e) => e.stopPropagation()}>
      <CloseButton
        color="white"
        backgroundColor="rgba(0, 0, 0, 0.5)"
        onClick={close}
      >
        <CloseIcon />
      </CloseButton>
      <Backdrop path={backdrop_path} alt={title} />
      <InfoContainer>
        <Title>{title}</Title>
        <Overview>{overview}</Overview>
      </InfoContainer>
    </ModalLayout>
  );
}

InfoModal.propTypes = {
  close: PropTypes.func.isRequired,
  movie: PropTypes.shape({
    backdrop_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }),
};

InfoModal.defaultProps = {
  movie: {
    backdrop_path: null,
  },
};

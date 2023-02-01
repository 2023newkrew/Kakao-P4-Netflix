import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MovieImage from '@components/image/MovieImage';
import InfoModal from '@components/modal/InfoModal';
import useModal from '@hooks/useModal';

const MovieCardLayout = styled.div`
  box-sizing: border-box;
  padding: 0 0.4vw;
`;

const ContentContainer = styled.div`
  position: relative;
  aspect-ratio: 2 / 3;
  cursor: pointer;
`;

const Poster = styled(MovieImage).attrs({ type: 'poster' })`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const Title = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 1.4vw;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;

  &:hover {
    opacity: 1;
  }
`;

export default function MovieCard({ movie }) {
  const { poster_path, title } = movie;
  const [ModalContainer, openModal, closeModal] = useModal();

  return (
    <MovieCardLayout>
      <ContentContainer onClick={openModal}>
        <Poster path={poster_path} alt={title} />
        <Title>{title}</Title>
      </ContentContainer>
      <ModalContainer>
        <InfoModal close={closeModal} movie={movie} />
      </ModalContainer>
    </MovieCardLayout>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
  }),
};

MovieCard.defaultProps = {
  movie: {
    poster_path: null,
  },
};

import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SwiperSlide } from 'swiper/react';
import InfoModal from '@components/modal/InfoModal';
import useModal from '@hooks/useModal';
import TMDBImage from '../TMDBImage';

const MovieItemLayout = styled(SwiperSlide)`
  box-sizing: border-box;
  padding: 0 0.4vw;
`;

const ContentContainer = styled.div`
  position: relative;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  aspect-ratio: 2 / 3;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const Poster = styled(TMDBImage)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const Title = styled.div`
  font-size: 1.4vw;
  text-align: center;
`;

export default function MovieItem({ movie }) {
  const { poster_path, title } = movie;
  const [isHovered, setIsHovered] = useState(false);
  const [ModalContainer, open, close] = useModal();

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <MovieItemLayout>
      <ContentContainer
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={open}
      >
        <Poster type="poster" path={poster_path} alt={title} />
        {isHovered && <Title>{title}</Title>}
      </ContentContainer>
      <ModalContainer>
        <InfoModal close={close} movie={movie} />
      </ModalContainer>
    </MovieItemLayout>
  );
}

MovieItem.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

// https://github.com/nolimits4web/swiper/issues/4413#issuecomment-1021387492
MovieItem.displayName = 'SwiperSlide';

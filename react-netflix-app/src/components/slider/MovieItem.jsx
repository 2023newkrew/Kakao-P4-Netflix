import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SwiperSlide } from 'swiper/react';
import InfoModal from '@components/modal/InfoModal';
import useModal from '@hooks/useModal';

const MovieItemLayout = styled(SwiperSlide)`
  box-sizing: border-box;
  padding: 0 0.4vw;
`;

const Poster = styled.div`
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  aspect-ratio: 2 / 3;
  background: url(${(props) =>
      `${process.env.REACT_APP_IMAGE_BASE_URL}${props.backgroundUrl}`})
    no-repeat center/cover;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: overlay;
  }
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
      <Poster
        backgroundUrl={poster_path}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={open}
      >
        {isHovered && <Title>{title}</Title>}
      </Poster>
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

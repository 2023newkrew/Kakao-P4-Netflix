import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SwiperSlide } from 'swiper/react';

const MovieItemLayout = styled(SwiperSlide)`
  box-sizing: border-box;
  padding: 0 0.4vw;
`;

const Poster = styled.div`
  aspect-ratio: 2 / 3;
  background: url(${(props) =>
      `${process.env.REACT_APP_IMAGE_BASE_URL}${props.backgroundUrl}`})
    no-repeat center/cover;
`;

export default function MovieItem({ movie }) {
  const { poster_path } = movie;

  return (
    <MovieItemLayout>
      <Poster backgroundUrl={poster_path} />
    </MovieItemLayout>
  );
}

MovieItem.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
  }).isRequired,
};

// https://github.com/nolimits4web/swiper/issues/4413#issuecomment-1021387492
MovieItem.displayName = 'SwiperSlide';

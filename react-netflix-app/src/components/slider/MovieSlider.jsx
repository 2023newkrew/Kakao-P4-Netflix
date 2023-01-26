import React from 'react';
import PropTypes from 'prop-types';
import Slider from '@components/slider/Slider';
import MovieItem from '@components/slider/MovieItem';

export default function MovieSlider({ name, movies }) {
  return (
    <Slider name={name}>
      {movies.map((movie) => {
        return <MovieItem key={movie.id} movie={movie} />;
      })}
    </Slider>
  );
}

MovieSlider.propTypes = {
  name: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

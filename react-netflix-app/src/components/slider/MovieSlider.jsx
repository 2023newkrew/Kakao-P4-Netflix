import React from 'react';
import PropTypes from 'prop-types';
import Slider from '@components/slider/base/Slider';
import MovieCard from '@components/card/MovieCard';

export default function MovieSlider({ name, movies }) {
  return (
    <Slider name={name}>
      {movies.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />;
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

import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@components/grid/base/Grid';
import MovieCard from '@components/card/MovieCard';

export default function MovieGrid({ movies }) {
  return (
    <Grid>
      {movies.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </Grid>
  );
}

MovieGrid.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

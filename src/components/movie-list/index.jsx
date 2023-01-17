import './index.scss';
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card';
import useScreenWidthSize from '../../hooks';

function MovieList({ movies }) {
  const screenWidthSize = useScreenWidthSize();

  return (
    <>
      <div>
        스크린 너비 사이즈:
        {' '}
        {screenWidthSize}
      </div>
      <ul className="movie-list">
        {
        movies.map((movie) => (
          <li className="movie-list-item" key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))
      }
      </ul>
    </>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired })).isRequired,
};

export default MovieList;

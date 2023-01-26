import PropTypes from 'prop-types';
import React from 'react';
import { MovieCardContainer } from './styles';

const MovieCard = ({ movie }) => <MovieCardContainer backdropPath={movie.backdrop_path} />;

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default React.memo(MovieCard);

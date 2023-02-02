import React from 'react';
import PropTypes from 'prop-types';
import NoMovieImage from '@components/image/NoMovieImage';

function getSrcSet(type, path) {
  const widths = {
    backdrop: [300, 780, 1280],
    poster: [92, 154, 185, 342, 500, 780],
  };

  return widths[type]
    .map(
      (width) =>
        `${process.env.REACT_APP_IMAGE_BASE_URL}w${width}${path} ${width}w`
    )
    .join(', ');
}

export default function MovieImage({ className, type, path, alt }) {
  if (!path) return <NoMovieImage className={className} />;

  return <img className={className} srcSet={getSrcSet(type, path)} alt={alt} />;
}

MovieImage.propTypes = {
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  path: PropTypes.string,
  alt: PropTypes.string.isRequired,
};

MovieImage.defaultProps = {
  path: null,
};

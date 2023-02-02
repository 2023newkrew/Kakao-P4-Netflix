import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ReactComponent as MovieIcon } from '@assets/movie.svg';

const NoMovieImageLayout = styled.div`
  box-sizing: border-box;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #808080;
`;

const NoMovieIcon = styled(MovieIcon)`
  width: 25%;
`;

export default function NoMovieImage({ className }) {
  return (
    <NoMovieImageLayout className={className}>
      <NoMovieIcon />
    </NoMovieImageLayout>
  );
}

NoMovieImage.propTypes = {
  className: PropTypes.string.isRequired,
};

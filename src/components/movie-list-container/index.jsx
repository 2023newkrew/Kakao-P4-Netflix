import React from 'react';
import styled from 'styled-components';
import MovieList from '../movie-list';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledTitle = styled.h3`
  z-index: 1;
  padding-left: var(--lr-padding);
  font-weight: 400;
`;

function MovieListContainer({ title, movies }) {
  return (
    <StyledDiv>
      <StyledTitle>{title}</StyledTitle>
      <MovieList movies={movies} />
    </StyledDiv>
  );
}

export default MovieListContainer;

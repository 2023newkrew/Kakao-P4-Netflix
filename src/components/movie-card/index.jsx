import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
`;

function MovieCard({ movie }) {
  return (
    <StyledDiv>
      <img
        alt="movie poster"
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
      />
    </StyledDiv>
  );
}

export default MovieCard;

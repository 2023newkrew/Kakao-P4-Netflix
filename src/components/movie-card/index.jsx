import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #000000, $alpha: 0.5);
`;

function MovieCard() {
  return <StyledDiv>MovieCard</StyledDiv>;
}

export default MovieCard;

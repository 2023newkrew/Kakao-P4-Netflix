import React from 'react';
import styled from 'styled-components';

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

function MovieListContainer({ title, children }) {
  return (
    <StyledDiv>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </StyledDiv>
  );
}

export default MovieListContainer;

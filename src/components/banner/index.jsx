import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  z-index: 0;
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  margin-top: -3.5rem;
  margin-bottom: -6.25%;
  background: no-repeat url(${({ url }) => url});
  background-size: cover;

  &::before {
    position: absolute;
    content: '';
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    background: linear-gradient(transparent, black);
  }
`;

const StyledSection = styled.section`
  width: 40%;
  position: absolute;
  bottom: 25%;
  left: var(--lr-padding);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

const StyledDescription = styled.div``;
const StyledTitle = styled.h2``;

const StyledButtonContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
`;

const StyledButton = styled.button`
  cursor: pointer;
  font-size: 70%;
  font-weight: 700;
  border: none;
  border-radius: 4px;
  padding: 2% 4%;
`;

const StyledInfoButton = styled(StyledButton)`
  background-color: rgba(120, 120, 120, 0.8);
  color: white;
`;

function Banner({ movie, onDetailClick }) {
  const description = movie.overview.slice(0, 100);
  const isOverflow = description.length !== movie.overview.length;

  return (
    <StyledDiv
      url={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
    >
      <StyledSection>
        <StyledTitle>{movie.title}</StyledTitle>
        <StyledDescription>
          {description}
          {isOverflow ? '...' : null}
        </StyledDescription>
        <StyledButtonContainer>
          <StyledButton type="button">► 재생</StyledButton>
          <StyledInfoButton type="button" onClick={onDetailClick}>
            상세 정보
          </StyledInfoButton>
        </StyledButtonContainer>
      </StyledSection>
    </StyledDiv>
  );
}

export default Banner;

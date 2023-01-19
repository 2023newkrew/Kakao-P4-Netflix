import React from 'react';
import {
  StyledButton,
  StyledButtonContainer,
  StyledDescription,
  StyledDiv,
  StyledInfoButton,
  StyledSection,
  StyledTitle,
} from './styled';

function Banner({ movie }) {
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
          {isOverflow ? '...' : ''}
        </StyledDescription>
        <StyledButtonContainer>
          <StyledButton type="button">재생</StyledButton>
          <StyledInfoButton type="button">상세 정보</StyledInfoButton>
        </StyledButtonContainer>
      </StyledSection>
    </StyledDiv>
  );
}

export default Banner;

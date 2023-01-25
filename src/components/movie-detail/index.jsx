import React from 'react';
import styled from 'styled-components';

const ImageDiv = styled.div`
  position: relative;
  background: no-repeat url(${({ url }) => url});
  background-size: cover;
  width: 100%;
  aspect-ratio: 16/9;
`;

const ContentWrapper = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Title = styled.h2`
  font-size: 2rem;
`;

const Description = styled.div`
  font-size: 1rem;
`;

const PlayButton = styled.button`
  position: absolute;
  bottom: 1.5rem;
  left: 2rem;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 700;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
`;

function MovieDetail({ movie }) {
  return (
    <div>
      <ImageDiv
        url={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
      >
        <PlayButton>► 재생</PlayButton>
      </ImageDiv>
      <ContentWrapper>
        <Title>{movie.title}</Title>
        <Description>{movie.overview}</Description>
      </ContentWrapper>
    </div>
  );
}

export default MovieDetail;

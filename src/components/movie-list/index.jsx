import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import MovieCard from '../movie-card';
import useScreenWidthSize from '../../hooks/useScreenWidthSize';

const ScreenWidthSizeToDisplayNumber = {
  xs: 2,
  s: 3,
  m: 4,
  l: 5,
  xl: 6,
};

const StyledList = styled.ul`
  --display-gap: 0.4%;
  --display-number: 2;
  --lr-padding: 4%;

  @media screen and (min-width: 480px) {
    --display-number: 3;
  }

  @media screen and (min-width: 768px) {
    --display-number: 4;
  }

  @media screen and (min-width: 1024px) {
    --display-number: 5;
  }

  @media screen and (min-width: 1280px) {
    --display-number: 6;
  }

  --item-and-gap-width: calc(
    (100% - var(--lr-padding) * 2 + var(--display-gap)) / var(--display-number)
  );

  padding: 0 var(--lr-padding);
  width: 100%;
  display: flex;
  gap: var(--display-gap);
`;

const StyledListItem = styled.li`
  flex-shrink: 0;
  border: 1px solid black;

  display: flex;
  width: calc(
    (100% - var(--display-gap) * (var(--display-number) - 1)) /
      var(--display-number)
  );
  aspect-ratio: 16/9;
`;

function MovieList({ movies }) {
  const screenWidthSize = useScreenWidthSize();
  const displayNumber = ScreenWidthSizeToDisplayNumber[screenWidthSize];

  const [page, setPage] = useState(0);

  const movieListElementRef = useRef(null);
  const animateMoveListElement = (currentPage, nextPage) => {
    const keyframes = [
      {
        transform: `translateX(calc(-1 * ${currentPage} * var(--item-and-gap-width)))`,
      },
      {
        transform: `translateX(calc(-1 * ${nextPage} * var(--item-and-gap-width)))`,
      },
    ];

    const options = {
      duration: 500,
      easing: 'ease',
      fill: 'forwards',
    };

    movieListElementRef.current.animate(keyframes, options);
  };

  useEffect(() => {
    const handleKeydownEvent = (event) => {
      if (event.code === 'ArrowRight') {
        setPage((currentPage) => {
          const nextPage = currentPage + 1;
          animateMoveListElement(currentPage, nextPage);
          return nextPage;
        });
      }

      if (event.code === 'ArrowLeft') {
        setPage((currentPage) => {
          const nextPage = currentPage - 1;
          animateMoveListElement(currentPage, nextPage);
          return nextPage;
        });
      }
    };

    window.addEventListener('keydown', handleKeydownEvent);
    return () => window.removeEventListener('keydown', handleKeydownEvent);
  }, []);

  return (
    <>
      <div>반응형 스크린 너비 사이즈: {screenWidthSize}</div>
      <div>한 화면에 보이는 항목 수: {displayNumber}</div>
      <div
        style={{
          color:
            page < 0 || page > movies.length - displayNumber ? 'red' : 'unset',
        }}
      >
        페이지: {page} / {movies.length - displayNumber} (좌우 방향키로 변경)
      </div>
      <StyledList ref={movieListElementRef}>
        {movies.map((movie) => (
          <StyledListItem key={movie.id}>
            <MovieCard movie={movie} />
          </StyledListItem>
        ))}
      </StyledList>
    </>
  );
}

export default MovieList;

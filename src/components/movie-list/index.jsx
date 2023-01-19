import React, { useEffect, useRef, useState } from 'react';
import MovieCard from '../movie-card';
import useChange from '../../hooks/useChange';
import {
  StyledDiv,
  StyledLeftButton,
  StyledList,
  StyledListItem,
  StyledRightButton,
} from './styled';

const ScreenWidthQuery = {
  XS: '(max-width: 479px)',
  S: '(min-width: 480px) and (max-width: 767px)',
  M: '(min-width: 768px) and (max-width: 1023px)',
  L: '(min-width: 1024px) and (max-width: 1279px)',
  XL: '(min-width: 1280px)',
};

const ScreenWidthQueryToDisplayNumber = {
  [ScreenWidthQuery.XS]: 2,
  [ScreenWidthQuery.S]: 3,
  [ScreenWidthQuery.M]: 4,
  [ScreenWidthQuery.L]: 5,
  [ScreenWidthQuery.XL]: 6,
};

const mediaQueryLists = Object.values(ScreenWidthQuery).map(window.matchMedia);

function MovieListWrapper({ movies }) {
  const { length } = movies;

  const [displayNumber, setDisplayNumber] = useState(
    () =>
      ScreenWidthQueryToDisplayNumber[
        mediaQueryLists.find(({ matches }) => matches).media
      ]
  );
  const [offset, setOffset] = useState(0);

  if (offset < 0) {
    setOffset(0);
  }

  if (offset > length - displayNumber) {
    setOffset(length - displayNumber);
  }

  useEffect(() => {
    const handleChangeEvent = ({ matches, media }) => {
      if (matches) {
        setDisplayNumber(ScreenWidthQueryToDisplayNumber[media]);
      }
    };

    mediaQueryLists.forEach((MediaQueryList) =>
      MediaQueryList.addEventListener('change', handleChangeEvent)
    );
    return () => {
      mediaQueryLists.forEach((MediaQueryList) =>
        MediaQueryList.removeEventListener('change', handleChangeEvent)
      );
    };
  }, []);

  return (
    <MovieList
      movies={movies}
      displayNumber={displayNumber}
      offset={offset}
      setOffset={setOffset}
    />
  );
}

function MovieList({ movies, displayNumber, offset, setOffset }) {
  const { length } = movies;

  const handleLeftScrollButtonClick = () => {
    setOffset(offset - displayNumber);
  };

  const handleRightScrollButtonClick = () => {
    setOffset(offset + displayNumber);
  };

  const movieListElementRef = useRef(null);
  const animateMoveListElement = (from, to) => {
    const keyframes = [
      {
        transform: `translateX(calc(-1 * ${from} * var(--item-and-gap-width)))`,
      },
      { transform: `translateX(calc(-1 * ${to} * var(--item-and-gap-width)))` },
    ];

    const options = {
      duration: 500,
      easing: 'ease',
      fill: 'forwards',
    };

    movieListElementRef.current.animate(keyframes, options);
  };

  useChange((prevOffset) => {
    animateMoveListElement(prevOffset, offset);
  }, offset);

  const maxOffset = length - displayNumber;

  return (
    <StyledDiv>
      <StyledList ref={movieListElementRef}>
        {movies.map((movie) => (
          <StyledListItem className="movie-list-item" key={movie.id}>
            <MovieCard movie={movie} />
          </StyledListItem>
        ))}
      </StyledList>
      <StyledLeftButton
        type="button"
        onClick={handleLeftScrollButtonClick}
        disabled={offset === 0}
      >
        ◀
      </StyledLeftButton>
      <StyledRightButton
        type="button"
        onClick={handleRightScrollButtonClick}
        disabled={offset === maxOffset}
      >
        ▶
      </StyledRightButton>
    </StyledDiv>
  );
}

export default MovieListWrapper;

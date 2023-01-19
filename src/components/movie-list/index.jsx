import React, { useEffect, useState } from 'react';
import MovieList from './movieList';

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

// getDerivedStateFromProps를 달성하기 위한 Wrapper 컴포넌트
// (https://reactjs.org/docs/hooks-faq.html#how-do-i-implement-getderivedstatefromprops)
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

export default MovieListWrapper;

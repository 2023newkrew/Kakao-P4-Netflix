import './index.scss';
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card';
import useScreenWidthSize from '../../hooks/useScreenWidthSize';

const ScreenWidthSizeToDisplayNumber = {
  xs: 2,
  s: 3,
  m: 4,
  l: 5,
  xl: 6,
};

function MovieList({ movies }) {
  const screenWidthSize = useScreenWidthSize();
  const displayNumber = ScreenWidthSizeToDisplayNumber[screenWidthSize];

  const [page, setPage] = useState(0);

  const movieListElementRef = useRef(null);
  const animateMoveListElement = (currentPage, nextPage) => {
    const keyframes = [
      { transform: `translateX(calc(-1 * ${currentPage} * var(--item-and-gap-width)))` },
      { transform: `translateX(calc(-1 * ${nextPage} * var(--item-and-gap-width)))` },
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
      <div>
        반응형 스크린 너비 사이즈:
        {' '}
        {screenWidthSize}
      </div>
      <div>
        한 화면에 보이는 항목 수:
        {' '}
        {displayNumber}
      </div>
      <div style={{ color: page < 0 || page > movies.length - displayNumber ? 'red' : 'unset' }}>
        페이지:
        {' '}
        {page}
        {' '}
        /
        {' '}
        {movies.length - displayNumber}
        {' '}
        (좌우 방향키로 변경)
      </div>
      <ul className="movie-list" ref={movieListElementRef}>
        {
        movies.map((movie) => (
          <li className="movie-list-item" key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))
      }
      </ul>
    </>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired })).isRequired,
};

export default MovieList;

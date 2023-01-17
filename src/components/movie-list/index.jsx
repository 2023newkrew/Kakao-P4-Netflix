import './index.scss';
import React, {
  useEffect, useReducer, useRef,
} from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card';
import useChange from '../../hooks/useChange';
import useConst from '../../hooks/useConst';

const reducer = (state, action) => {
  const { length, page, displayNumber } = state;

  switch (action.type) {
    case 'page':
    {
      const { value } = action;
      if (value < 0 || value > length - displayNumber) return state;
      return { ...state, page: value };
    }
    case 'displayNumber':
    {
      const { value } = action;
      if (page > length - value) {
        return { ...state, page: length - value, displayNumber: value };
      }
      return { ...state, displayNumber: value };
    }
    default:
      throw new Error();
  }
};

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

const createMqls = () => Object.values(ScreenWidthQuery).map(window.matchMedia);

function MovieList({ initialMovies }) {
  const movies = useConst(initialMovies);
  const mqls = useConst(createMqls);

  const [{ page, length, displayNumber }, dispatch] = useReducer(
    reducer,
    {
      page: 0,
      length: movies.length,
      displayNumber: ScreenWidthQueryToDisplayNumber[mqls.find(({ matches }) => matches).media],
    },
  );

  useEffect(() => {
    const handleChangeEvent = ({ matches, media }) => {
      if (matches) {
        dispatch({ type: 'displayNumber', value: ScreenWidthQueryToDisplayNumber[media] });
      }
    };

    mqls.forEach((mql) => mql.addEventListener('change', handleChangeEvent));
    return () => { mqls.forEach((mql) => mql.removeEventListener('change', handleChangeEvent)); };
  }, []);

  const maxPage = length - displayNumber;

  const handleLeftScrollButtonClick = () => {
    if (page === 0) return;
    const nextPage = page - 1;
    dispatch({ type: 'page', value: nextPage });
  };

  const handleRightScrollButtonClick = () => {
    if (page === maxPage) return;
    const nextPage = page + 1;
    dispatch({ type: 'page', value: nextPage });
  };

  const movieListElementRef = useRef(null);
  const animateMoveListElement = (from, to) => {
    const keyframes = [
      { transform: `translateX(calc(-1 * ${from} * var(--item-and-gap-width)))` },
      { transform: `translateX(calc(-1 * ${to} * var(--item-and-gap-width)))` },
    ];

    const options = {
      duration: 500,
      easing: 'ease',
      fill: 'forwards',
    };

    movieListElementRef.current.animate(keyframes, options);
  };

  useChange((prevPage) => {
    animateMoveListElement(prevPage, page);
  }, page);

  return (
    <>
      <div>
        한 화면에 보이는 항목 수:
        {' '}
        {displayNumber}
      </div>
      <div style={{ color: page < 0 || page > maxPage ? 'red' : 'unset' }}>
        페이지:
        {' '}
        {page}
        {' '}
        /
        {' '}
        {maxPage}
        {' '}
        (좌우 방향키로 변경)
      </div>
      <div className="movie-list-wrapper">
        <ul className="movie-list" ref={movieListElementRef}>
          {
            movies.map((movie) => (
              <li className="movie-list-item" key={movie.id}>
                <MovieCard movie={movie} />
              </li>
            ))
          }
        </ul>
        <button type="button" className="scroll-left-button" onClick={handleLeftScrollButtonClick} disabled={page === 0}>left</button>
        <button type="button" className="scroll-right-button" onClick={handleRightScrollButtonClick} disabled={page === maxPage}>right</button>
      </div>
    </>
  );
}

MovieList.propTypes = {
  initialMovies: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired })).isRequired,
};

export default MovieList;

import './index.scss';
import React, {
  useEffect, useReducer, useRef,
} from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card';
import useChange from '../../hooks/useChange';
import useConst from '../../hooks/useConst';

const reducer = (state, action) => {
  const { offset, length, displayNumber } = state;
  const maxOffset = length - displayNumber;

  switch (action.type) {
    case 'offset':
    {
      const { value } = action;

      if (value < 0) {
        return { ...state, offset: 0 };
      }

      if (value > maxOffset) {
        return { ...state, offset: maxOffset };
      }

      return { ...state, offset: value };
    }
    case 'displayNumber':
    {
      const { value } = action;

      if (offset > length - value) {
        return { ...state, offset: length - value, displayNumber: value };
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

  const [{ offset, length, displayNumber }, dispatch] = useReducer(
    reducer,
    {
      offset: 0,
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

  const handleLeftScrollButtonClick = () => {
    const nextOffset = offset - displayNumber;
    dispatch({ type: 'offset', value: nextOffset });
  };

  const handleRightScrollButtonClick = () => {
    const nextOffset = offset + displayNumber;
    dispatch({ type: 'offset', value: nextOffset });
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

  useChange((prevOffset) => {
    animateMoveListElement(prevOffset, offset);
  }, offset);

  const maxOffset = length - displayNumber;

  return (
    <>
      <div>
        한 화면에 보이는 항목 수:
        {' '}
        {displayNumber}
      </div>
      <div style={{ color: offset < 0 || offset > maxOffset ? 'red' : 'unset' }}>
        페이지:
        {' '}
        {offset}
        {' '}
        /
        {' '}
        {maxOffset}
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
        <button type="button" className="scroll-left-button" onClick={handleLeftScrollButtonClick} disabled={offset === 0}>◀</button>
        <button type="button" className="scroll-right-button" onClick={handleRightScrollButtonClick} disabled={offset === maxOffset}>▶</button>
      </div>
    </>
  );
}

MovieList.propTypes = {
  initialMovies: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired })).isRequired,
};

export default MovieList;

import React, { useEffect, useReducer, useRef } from 'react';
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

function MovieList({ movies }) {
  const { length } = movies;

  // MovieList는 2개의 상태값을 가집니다.
  // offset과 displayNumber 입니다.
  // offset은 화면 상에서 첫번째로 보여지는 MovieListItem의 index를 의미합니다.
  // displayNumber는 화면 상에서 보여지는 MovieListItem의 개수를 의미합니다.
  // 이 두 상태값은 상호 영향을 주고받기 때문에 useReducer를 통해 관리됩니다.

  // offset은 0보다 크거나 같고, movies.length - displayNumber보다 작거나 같아야합니다.
  // 그런데 movies.length는 MovieList의 프로퍼티입니다.
  // 프로퍼티 movies의 변경에 따라 상태 offset가 규칙에 맞는 값을 동기적으로 가지도록 할 수 있는 방법이 없을지 고민입니다.
  const reducer = (state, action) => {
    const { offset, displayNumber } = state;
    const maxOffset = length - displayNumber;

    switch (action.type) {
      case 'offset': {
        const { value } = action;

        if (value < 0) {
          return { ...state, offset: 0 };
        }

        if (value > maxOffset) {
          return { ...state, offset: maxOffset };
        }

        return { ...state, offset: value };
      }
      case 'displayNumber': {
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

  const [{ offset, displayNumber }, dispatch] = useReducer(reducer, {
    offset: 0,
    displayNumber:
      ScreenWidthQueryToDisplayNumber[
        mediaQueryLists.find(({ matches }) => matches).media
      ],
  });

  useEffect(() => {
    const handleChangeEvent = ({ matches, media }) => {
      if (matches) {
        dispatch({
          type: 'displayNumber',
          value: ScreenWidthQueryToDisplayNumber[media],
        });
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
    <>
      <div>한 화면에 보이는 항목 수: {displayNumber}</div>
      <div
        style={{ color: offset < 0 || offset > maxOffset ? 'red' : 'unset' }}
      >
        페이지: {offset} / {maxOffset}
      </div>
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
    </>
  );
}

export default MovieList;

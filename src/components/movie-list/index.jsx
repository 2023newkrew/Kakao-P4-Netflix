import React, { useEffect, useReducer, useRef } from 'react';
import styled from 'styled-components';
import MovieCard from '../movie-card';
import useChange from '../../hooks/useChange';
import useConst from '../../hooks/useConst';

const StyledDiv = styled.div`
  position: relative;

  --display-gap: 0.4%;
  --display-number: 2;
  --lr-padding: 4%;
  --border-radius: 4px;

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
`;

const StyledList = styled.ul`
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
  border-radius: var(--border-radius);

  display: flex;
  width: calc(
    (100% - var(--display-gap) * (var(--display-number) - 1)) /
      var(--display-number)
  );
  aspect-ratio: 2/3;
`;

const StyledButton = styled.button`
  position: absolute;
  top: 0;
  height: 100%;
  width: calc(var(--lr-padding) - var(--display-gap));

  border: none;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  color: white;
  transition: 0.2s;
  border-radius: var(--border-radius);

  &:disabled {
    cursor: initial;
    opacity: 0;
  }
`;

const StyledLeftButton = styled(StyledButton)`
  left: 0;
`;

const StyledRightButton = styled(StyledButton)`
  right: 0;
`;

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

const createMediaQueryLists = () =>
  Object.values(ScreenWidthQuery).map(window.matchMedia);

const reducer = (state, action) => {
  const { offset, length, displayNumber } = state;
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

function MovieList({ initialMovies }) {
  const movies = useConst(initialMovies);
  const MediaQueryLists = useConst(createMediaQueryLists);

  const [{ offset, length, displayNumber }, dispatch] = useReducer(reducer, {
    offset: 0,
    length: movies.length,
    displayNumber:
      ScreenWidthQueryToDisplayNumber[
        MediaQueryLists.find(({ matches }) => matches).media
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

    MediaQueryLists.forEach((MediaQueryList) =>
      MediaQueryList.addEventListener('change', handleChangeEvent)
    );
    return () => {
      MediaQueryLists.forEach((MediaQueryList) =>
        MediaQueryList.removeEventListener('change', handleChangeEvent)
      );
    };
  }, [MediaQueryLists]);

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

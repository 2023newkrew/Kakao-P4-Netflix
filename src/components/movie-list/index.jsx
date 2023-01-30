import React, { useEffect, useReducer, useRef } from 'react';
import styled from 'styled-components';
import useChange from '../../hooks/useChange';

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

  overflow: hidden;
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

const mediaQueryLists = Object.values(ScreenWidthQuery).map(window.matchMedia);

const useMovieListReducer = ({ length }) => {
  const buildState = ({ offset, displayNumber }) => {
    const maxOffset = length - displayNumber;

    const resultState = {
      offset,
      displayNumber,
      isLeftButtonDisabled: false,
      isRightButtonDisabled: false,
    };

    if (resultState.offset < 0) {
      resultState.offset = 0;
    }

    if (resultState.offset > maxOffset) {
      resultState.offset = maxOffset;
    }

    if (resultState.offset === 0) {
      resultState.isLeftButtonDisabled = true;
    }

    if (resultState.offset === maxOffset) {
      resultState.isRightButtonDisabled = true;
    }

    return resultState;
  };

  return useReducer(
    (state, action) => {
      const { offset, displayNumber } = state;

      switch (action.type) {
        case 'prevPage': {
          return buildState({ offset: offset - displayNumber, displayNumber });
        }
        case 'nextPage': {
          return buildState({ offset: offset + displayNumber, displayNumber });
        }
        case 'updateDisplayNumber': {
          return buildState({
            offset,
            displayNumber: ScreenWidthQueryToDisplayNumber[action.media],
          });
        }
        default:
          throw new Error('유효하지 않은 action type');
      }
    },
    null,
    () =>
      buildState({
        offset: 0,
        displayNumber:
          ScreenWidthQueryToDisplayNumber[
            mediaQueryLists.find(({ matches }) => matches).media
          ],
      })
  );
};

function MovieList({ children }) {
  const { length } = children;

  const [{ offset, isLeftButtonDisabled, isRightButtonDisabled }, dispatch] =
    useMovieListReducer({ length });

  useEffect(() => {
    const handleChangeEvent = ({ matches, media }) => {
      if (matches) {
        dispatch({
          type: 'updateDisplayNumber',
          media,
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
  }, [dispatch]);

  const handleLeftScrollButtonClick = () => {
    dispatch({ type: 'prevPage' });
  };

  const handleRightScrollButtonClick = () => {
    dispatch({ type: 'nextPage' });
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

  return (
    <StyledDiv>
      <StyledList ref={movieListElementRef}>{children}</StyledList>
      <StyledLeftButton
        type="button"
        onClick={handleLeftScrollButtonClick}
        disabled={isLeftButtonDisabled}
      >
        ◀
      </StyledLeftButton>
      <StyledRightButton
        type="button"
        onClick={handleRightScrollButtonClick}
        disabled={isRightButtonDisabled}
      >
        ▶
      </StyledRightButton>
    </StyledDiv>
  );
}

export default MovieList;

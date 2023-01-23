import React, { useRef } from 'react';
import styled from 'styled-components';
import MovieCard from '../movie-card';
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

export default MovieList;

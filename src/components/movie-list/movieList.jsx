import React, { useRef } from 'react';
import MovieCard from '../movie-card';
import useChange from '../../hooks/useChange';
import {
  StyledDiv,
  StyledLeftButton,
  StyledList,
  StyledListItem,
  StyledRightButton,
} from './styled';

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

import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { divideArray } from '@utils/array';
import { MAX_MOVIES_PER_PAGE } from '@constants/home';
import MovieCard from './movie-card';
import {
  MovieCardInner,
  MovieItemContainer,
  MovieItemContent,
  MovieListContainer,
  MovieListTitle,
  MovieNextButton,
  MoviePrevButton,
} from './styles';

const MovieList = ({ title, movies }) => {
  const movieItemContentRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const splitMovies = divideArray(movies, MAX_MOVIES_PER_PAGE);

  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === splitMovies.length - 1;

  const onClickPrev = () => {
    if (isFirstPage) return;

    setCurrentPage((current) => current - 1);
  };

  const onClickNext = () => {
    if (isLastPage) return;

    setCurrentPage((current) => current + 1);
  };

  useEffect(() => {
    if (movieItemContentRef.current === null) return;

    movieItemContentRef.current.style.transform = `translateX(-${currentPage * 100}%)`;
  }, [currentPage]);

  return (
    <MovieListContainer>
      <MovieListTitle>{title}</MovieListTitle>
      <MovieItemContainer>
        <MovieItemContent ref={movieItemContentRef}>
          {splitMovies &&
            splitMovies.map((moviesArr) => (
              <MovieCardInner key={`${moviesArr[0].title}-list`}>
                {moviesArr.map((movie) => (
                  <MovieCard key={movie.title} movie={movie} />
                ))}
              </MovieCardInner>
            ))}
        </MovieItemContent>
        <MoviePrevButton disabled={isFirstPage} onClick={onClickPrev} />
        <MovieNextButton disabled={isLastPage} onClick={onClickNext} />
      </MovieItemContainer>
    </MovieListContainer>
  );
};

MovieList.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object),
};

MovieList.defaultProps = {
  movies: [],
};

export default MovieList;

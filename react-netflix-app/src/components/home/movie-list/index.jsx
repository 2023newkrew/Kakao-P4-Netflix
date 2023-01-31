import { useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { divideArray } from '@utils/array';
import { MAX_MOVIES_PER_PAGE } from '@constants/home';
import MovieCard from './movie-card';
import {
  MovieCardInner,
  MovieCardInnerContent,
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

  const splitMovies = useMemo(() => divideArray(movies, MAX_MOVIES_PER_PAGE), [movies]);

  const isFirstPage = useMemo(() => currentPage === 0, [currentPage]);
  const isLastPage = useMemo(
    () => currentPage === splitMovies.length - 1,
    [currentPage, splitMovies.length],
  );

  const onClickPrev = () => {
    if (isFirstPage) return;

    setCurrentPage((current) => current - 1);
  };

  const onClickNext = () => {
    if (isLastPage) return;

    setCurrentPage((current) => current + 1);
  };

  useEffect(() => {
    movieItemContentRef.current.style.transform = `translateX(-${currentPage * 100}%)`;
  }, [currentPage]);

  return (
    <MovieListContainer>
      <MovieListTitle>{title}</MovieListTitle>
      <MovieItemContainer>
        <MovieItemContent ref={movieItemContentRef}>
          {splitMovies.map((moviesArr) => (
            <MovieCardInner key={`${moviesArr[0].id}-list`}>
              <MovieCardInnerContent>
                {moviesArr.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </MovieCardInnerContent>
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

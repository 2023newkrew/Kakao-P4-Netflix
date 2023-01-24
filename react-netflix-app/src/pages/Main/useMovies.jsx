import { useEffect, useState } from 'react';
import { getPopularMovies, getTopRatedMovies } from '@api/movies';

export const useTopRatedMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState({});

  useEffect(() => {
    (async function () {
      try {
        const response = await getTopRatedMovies();
        setMovies(response.data);
      } catch (error) {
        console.error('Fetch Error: top rated movies', error);
        setIsError(true);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return {
    isLoading,
    isError,
    error,
    data: movies,
  };
};
export const usePopularMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState({});

  useEffect(() => {
    (async function () {
      try {
        const response = await getPopularMovies();
        setMovies(response.data);
      } catch (error) {
        console.error('Fetch Error: popular movies', error);
        setIsError(true);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return {
    isLoading,
    isError,
    error,
    data: movies,
  };
};
export const useMovieList = () => {
  const {
    isLoading: topRatedMoviesLoading,
    data: topRatedMovies,
    isError: isTopRatedMoviesError,
  } = useTopRatedMovies();
  const { isLoading: popularMoviesLoading, data: popularMovies, isError: isPopularMoviesError } = usePopularMovies();
  const isLoading = {
    topRated: topRatedMoviesLoading,
    popular: popularMoviesLoading,
  };
  const isError = {
    topRated: isTopRatedMoviesError,
    popular: isPopularMoviesError,
  };
  return {
    isLoading,
    isError,
    topRatedMovies,
    popularMovies,
  };
};

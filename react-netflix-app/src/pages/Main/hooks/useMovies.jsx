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
  const { isLoading: isTopRatedLoading, data: topRatedMovies, isError: isTopRatedError } = useTopRatedMovies();
  const { isLoading: isPopularLoading, data: popularMovies, isError: isPopularError } = usePopularMovies();
  const isLoading = {
    topRated: isTopRatedLoading,
    popular: isPopularLoading,
  };
  const isError = {
    topRated: isTopRatedError,
    popular: isPopularError,
  };
  return {
    isLoading,
    isError,
    topRatedMovies,
    popularMovies,
  };
};

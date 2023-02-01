import { useEffect, useState } from 'react';
import { MoviesResponse, getPopularMovies, getTopRatedMovies } from '@api/movies';

export const useTopRatedMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const [movies, setMovies] = useState<MoviesResponse | undefined>();

  useEffect(() => {
    (async function () {
      try {
        const response = await getTopRatedMovies();
        setMovies(response.data);
      } catch (error) {
        console.error('Fetch Error: top rated movies', error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return {
    isLoading,
    error,
    data: movies,
  };
};
export const usePopularMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const [movies, setMovies] = useState<MoviesResponse | undefined>();

  useEffect(() => {
    (async function () {
      try {
        const response = await getPopularMovies();
        setMovies(response.data);
      } catch (error) {
        console.error('Fetch Error: popular movies', error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return {
    isLoading,
    error,
    data: movies,
  };
};
export const useMovieList = () => {
  const { isLoading: isTopRatedLoading, data: topRatedMovies, error: topRatedError } = useTopRatedMovies();
  const { isLoading: isPopularLoading, data: popularMovies, error: popularError } = usePopularMovies();
  const isLoading = {
    topRated: isTopRatedLoading,
    popular: isPopularLoading,
  };
  const errors = {
    topRated: topRatedError,
    popular: popularError,
  };
  return {
    isLoading,
    errors,
    topRatedMovies,
    popularMovies,
  };
};

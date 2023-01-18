import { useEffect, useState } from 'react';
import { getPopularMovies, getTopRatedMovies } from '@api/movies';

const useTopRatedMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const response = await getTopRatedMovies();
        setMovies(response.data);
      } catch (error) {
        console.error('Fetch Error: top rated movies', error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return {
    isLoading,
    data: movies,
  };
};
const usePopularMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const response = await getPopularMovies();
        setMovies(response.data);
      } catch (error) {
        console.error('Fetch Error: popular movies', error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return {
    isLoading,
    data: movies,
  };
};
export const useMovieList = () => {
  const { isLoading: topRatedMoviesLoading, data: topRatedMovies } = useTopRatedMovies();
  const { isLoading: popularMoviesLoading, data: popularMovies } = usePopularMovies();
  const isLoading = {
    topRated: topRatedMoviesLoading,
    popular: popularMoviesLoading,
  };
  return {
    isLoading,
    topRatedMovies,
    popularMovies,
  };
};

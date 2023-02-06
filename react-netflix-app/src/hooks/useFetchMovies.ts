import { getMovies } from '@/apis/movies';
import { MovieSortType, MovieType } from '@/models/movies.model';
import { useEffect, useState } from 'react';

export function useFetchMovies (sortType: MovieSortType): [movies: MovieType[], isError: boolean, isLoading: boolean] {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchPopularMovies = async () => {
      const { data: { results }} = await getMovies(sortType);
      setMovies(results || []);
      
      return results;
    };
    
    fetchPopularMovies()
      .then(() => {
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
      });
  }, [sortType]);
  
  return [ movies, isError, isLoading ];
}
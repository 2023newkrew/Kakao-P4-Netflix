import { getMovie } from '@/apis/movies';
import { MovieType } from '@/models/movies.model';
import { useEffect, useState } from 'react';

export function useFetchMovie (movieID: number): [movies: MovieType | undefined, isError: boolean, isLoading: boolean] {
  const [movie, setMovie] = useState<MovieType | undefined>();
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchPopularMovies = async () => {
      const { data } = await getMovie(movieID);
      
      return data;
    };
    
    fetchPopularMovies()
      .then((data) => {
        setMovie(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
      });
  }, [movieID]);
  
  return [ movie, isError, isLoading ];
}
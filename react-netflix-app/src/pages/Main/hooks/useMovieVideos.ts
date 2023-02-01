import { useEffect, useState } from 'react';
import { getMovieVideos } from '@api/movies';
import { MovieVideo } from '@/types/movie';

const useMovieVideos = (movieId: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown | null>(null);
  const [data, setData] = useState<MovieVideo[]>([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    (async function () {
      try {
        const { data } = await getMovieVideos(movieId);
        setData(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieId]);

  return {
    isLoading,
    error,
    data,
  };
};
export default useMovieVideos;

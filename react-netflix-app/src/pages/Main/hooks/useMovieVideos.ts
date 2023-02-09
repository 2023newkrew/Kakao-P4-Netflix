import { useEffect, useState } from 'react';
import { getMovieVideos } from '@api/movies';
import { MovieVideo } from '@/types/movie';

const useMovieVideos = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);
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

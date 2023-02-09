import { useEffect, useState } from 'react';
import { getMovieDetail } from '@api/movies';
import { MovieDetail } from '@/types/movie';

const useMovieDetail = (movieId: number | null) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const [detail, setDetail] = useState<MovieDetail | null>(null);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    (async function () {
      try {
        setIsLoading(true);
        const { data } = await getMovieDetail(movieId);
        setDetail(data);
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
    data: detail,
  };
};
export default useMovieDetail;

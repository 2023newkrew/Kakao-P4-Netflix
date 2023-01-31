import { useEffect, useState } from 'react';
import { getMovieDetail } from '@api/movies';

const useMovieDetail = (movieId) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [detail, setDetail] = useState(null);

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

import { useEffect, useState } from 'react';
import { getMovieDetail } from '@api/movies';

const useMovieDetail = (movieId) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    if (detail || !movieId) {
      return;
    }

    (async function () {
      try {
        const { data } = await getMovieDetail(movieId);
        setDetail(data);
      } catch (error) {
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
    data: detail,
  };
};
export default useMovieDetail;

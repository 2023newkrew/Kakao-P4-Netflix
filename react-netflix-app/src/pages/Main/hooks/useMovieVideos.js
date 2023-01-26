import { useEffect, useState } from 'react';
import { getMovieVideos } from '@api/movies';

const useMovieVideos = (movieId) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

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

import { getMovieVideo } from '@/apis/movies';
import { MovieDetailType, MovieType } from '@/models/movies.model';
import { isModalOpenState } from '@/recoil/modal.recoil';
import { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

export function useFetchMovieDetail(): [(movie: MovieType) => void, MovieDetailType | undefined, boolean] {
  const [isModalOpen, setIsModalOpen] = useRecoilState(isModalOpenState);
  const [movieInfo, setMovieInfo] = useState<MovieDetailType | undefined>(undefined);
  const [isError, setIsError] = useState<boolean>(false);

  const handleSelectMovie = useCallback(async (movie: MovieType) => {
    try {
      const { data: { results } } = await getMovieVideo(movie.id);
      setMovieInfo({
        isYoutube: results.length > 0,
        path: results.length > 0 ? results[0].key : movie.poster_path
      });
    } catch {
      setIsError(true);
    }
    setIsModalOpen(true);
  }, []);

  useEffect(() => {
    if (isModalOpen === false) {
      setMovieInfo(undefined); 
    }
  }, [isModalOpen]);

  return [ handleSelectMovie, movieInfo, isError ];
}
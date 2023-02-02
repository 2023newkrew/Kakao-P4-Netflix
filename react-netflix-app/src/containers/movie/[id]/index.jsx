import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetail } from '@/apis/movie';
import { IMAGE_URL_MAP } from '@/configs/image';
import { MovieContainer, MovieImage, MovieTitle } from './styles';

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const { title, backdrop_path: backdropPath } = useMemo(() => movie || {}, [movie]);

  useEffect(() => {
    const fetchDetailedMovie = async () => {
      const detailedMovie = await getMovieDetail(id);
      setMovie(detailedMovie);
    };

    fetchDetailedMovie();
  }, [id]);

  return (
    <MovieContainer>
      <MovieTitle>{title}</MovieTitle>
      {backdropPath && <MovieImage src={`${IMAGE_URL_MAP.ORIGINAL}${backdropPath}`} />}
    </MovieContainer>
  );
};

export default Movie;

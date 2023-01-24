import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getMovieDetail } from '@api/movies';
import {
  Container,
  ThumbnailContainer,
  ThumbnailImage,
  DetailInfos,
  DetailContainer,
  Genres,
} from '@pages/Main/components/MovieCard.style';
import { THUMBNAIL_BASE_URL } from '@constants/tmdb';
import { useModal } from '@components/Modal';
import MovieDetail from '@pages/Main/[id]';

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

const DetailMovieCard = ({ movie }) => {
  const { data: detail, isLoading } = useMovieDetail(movie.id);
  const openModal = useModal();

  const showMovieDetailModal = () => {
    openModal({ node: <MovieDetail movie={detail} /> });
  };

  return (
    <DetailContainer
      className="movie-detail"
      onClick={() => {
        showMovieDetailModal();
      }}
    >
      <ThumbnailContainer>
        <ThumbnailImage src={THUMBNAIL_BASE_URL + movie.backdrop_path} alt="썸네일" />
      </ThumbnailContainer>
      <DetailInfos>
        <h4>{movie.title}</h4>
        <Genres>{!isLoading && detail?.genres.map((genre) => genre.name).join(' / ')}</Genres>
      </DetailInfos>
    </DetailContainer>
  );
};
DetailMovieCard.propTypes = {
  movie: PropTypes.object,
};

const MovieCard = ({ movie }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <Container
        onMouseEnter={() => {
          setIsHover(true);
        }}
      >
        <ThumbnailContainer>
          <ThumbnailImage src={THUMBNAIL_BASE_URL + movie.backdrop_path} alt="썸네일" />
        </ThumbnailContainer>
      </Container>
      {isHover && <DetailMovieCard movie={movie} />}
    </>
  );
};
MovieCard.propTypes = {
  movie: PropTypes.object,
};
export default MovieCard;

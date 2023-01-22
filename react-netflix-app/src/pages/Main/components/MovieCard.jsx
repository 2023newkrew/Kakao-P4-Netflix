import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getMovieDetail } from '@/api/movies';
import {
  Container,
  ThumbnailContainer,
  ThumbnailImage,
  DetailInfos,
  DetailContainer,
  Genres,
} from '@pages/Main/components/MovieCard.style';
import { THUMBNAIL_BASE_URL } from '@/constants/tmdb';
import { useModal } from '@/components/Modal';
import MovieDetail from '../[id]';

const useMovieDetail = (movieId, { fetch }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [detail, setDetail] = useState(null);
  useEffect(() => {
    if (!fetch || detail) {
      return;
    }
    getMovieDetail(movieId)
      .then((response) => {
        setDetail(response.data);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, [fetch]);
  return {
    isLoading,
    data: detail,
  };
};

const MovieCard = ({ movie }) => {
  const [detailFetch, setDetailFetch] = useState(false);
  const { data: detail, isLoading } = useMovieDetail(movie.id, { fetch: detailFetch });
  const openModal = useModal();

  const showMovieDetailModal = () => {
    openModal({ node: <MovieDetail movie={detail} /> });
  };

  return (
    <>
      <Container
        onMouseEnter={() => {
          setDetailFetch(true);
        }}
      >
        <ThumbnailContainer>
          <ThumbnailImage src={THUMBNAIL_BASE_URL + movie.backdrop_path} alt="썸네일" />
        </ThumbnailContainer>
      </Container>
      <DetailContainer
        className="movie-detail"
        onClick={() => {
          showMovieDetailModal();
        }}
      >
        {detailFetch && (
          <>
            <ThumbnailContainer>
              <ThumbnailImage src={THUMBNAIL_BASE_URL + movie.backdrop_path} alt="썸네일" />
            </ThumbnailContainer>
            <DetailInfos>
              <h4>{movie.title}</h4>
              <Genres>{!isLoading && detail?.genres.map((genre) => genre.name).join(' / ')}</Genres>
            </DetailInfos>
          </>
        )}
      </DetailContainer>
    </>
  );
};
MovieCard.propTypes = {
  movie: PropTypes.object,
};
export default MovieCard;

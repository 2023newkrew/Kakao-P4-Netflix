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
  InfoRow,
  UserVote,
  UtilsWrapper,
  UtilButton,
  PlayButton,
  MoreButton,
} from '@pages/Main/components/MovieCard.style';
import { THUMBNAIL_BASE_URL } from '@constants/tmdb';
import { useModal } from '@components/Modal';
import MovieDetail from '@pages/Main/[id]';
import playIcon from '@assets/icons/play.svg';
import plusIcon from '@assets/icons/plus.svg';
import thumbsUpIcon from '@assets/icons/thumbsUp.svg';
import arrowDownIcon from '@assets/icons/arrowDown.svg';

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
    <DetailContainer className="movie-detail" onClick={showMovieDetailModal}>
      <ThumbnailContainer>
        <ThumbnailImage src={THUMBNAIL_BASE_URL + movie.backdrop_path} alt="썸네일" />
      </ThumbnailContainer>
      <DetailInfos>
        <h4>{movie.title}</h4>
        <UtilsWrapper
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <PlayButton>
            <img src={playIcon} alt="재생 아이콘" height="18" width="18" />
          </PlayButton>
          <UtilButton>
            <img src={plusIcon} alt="추가 아이콘" height="18" width="18" />
          </UtilButton>
          <UtilButton>
            <img src={thumbsUpIcon} alt="좋아요 아이콘" height="18" width="18" />
          </UtilButton>
          <MoreButton onClick={showMovieDetailModal}>
            <img src={arrowDownIcon} alt="더보기 아이콘" height="18" width="18" />
          </MoreButton>
        </UtilsWrapper>
        <InfoRow>
          {!isLoading && detail?.vote_average && <UserVote>{Math.round(detail.vote_average * 10)}점</UserVote>}
        </InfoRow>
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

import { useState } from 'react';
import PropTypes from 'prop-types';
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
} from '@components/Movie/MovieCard.style';
import useMovieDetail from '@components/Movie/useMovieDetail';
import MovieDetail from '@pages/Main/[id]';

import { useModal } from '@components/Modal';

import { BACKDROP_W300_URL, BACKDROP_W780_URL } from '@constants/tmdb';
import usePreviewImage from '@utils/hooks/usePreviewImage';

import { ReactComponent as PlayIcon } from '@assets/icons/play.svg';
import { ReactComponent as PlusIcon } from '@assets/icons/plus.svg';
import { ReactComponent as ThumbsUpIcon } from '@assets/icons/thumbsUp.svg';
import { ReactComponent as ArrowDownIcon } from '@assets/icons/arrowDown.svg';

const DetailMovieCard = ({ movie }) => {
  const { data: detail, isLoading } = useMovieDetail(movie.id);
  const openModal = useModal();

  const showMovieDetailModal = () => {
    openModal({ node: <MovieDetail movie={detail} /> });
  };

  return (
    <DetailContainer className="movie-detail" onClick={showMovieDetailModal}>
      <DetailInfos>
        <h4>{movie.title}</h4>
        <UtilsWrapper>
          <PlayButton>
            <PlayIcon width={18} height={18} />
          </PlayButton>
          <UtilButton>
            <PlusIcon width={18} height={18} />
          </UtilButton>
          <UtilButton>
            <ThumbsUpIcon width={18} height={18} />
          </UtilButton>
          <MoreButton onClick={showMovieDetailModal}>
            <ArrowDownIcon width={18} height={18} />
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
  const thumbnailUrl = usePreviewImage({
    previewUrl: BACKDROP_W300_URL + movie.backdrop_path,
    originalUrl: BACKDROP_W780_URL + movie.backdrop_path,
    load: isHover,
  });

  return (
    <Container
      onMouseEnter={() => {
        setIsHover(true);
      }}
    >
      <ThumbnailContainer>
        <ThumbnailImage src={thumbnailUrl} alt="썸네일" />
      </ThumbnailContainer>
      {isHover && <DetailMovieCard movie={movie} />}
    </Container>
  );
};
MovieCard.propTypes = {
  movie: PropTypes.object,
};
export default MovieCard;

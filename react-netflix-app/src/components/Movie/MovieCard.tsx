import { MouseEvent, memo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
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
  NoImage,
} from '@components/Movie/MovieCard.style';
import useMovieDetail from '@components/Movie/useMovieDetail';
import { useModalContext } from '@components/Modal/ModalContext';

import { BACKDROP_W300_URL, BACKDROP_W780_URL } from '@constants/tmdb';
import usePreviewImage from '@utilHooks/usePreviewImage';

import { ReactComponent as PlayIcon } from '@assets/icons/play.svg';
import { ReactComponent as PlusIcon } from '@assets/icons/plus.svg';
import { ReactComponent as ThumbsUpIcon } from '@assets/icons/thumbsUp.svg';
import { ReactComponent as ArrowDownIcon } from '@assets/icons/arrowDown.svg';
import { Movie } from '@/types/movie';

type DetailMovieCardProps = {
  movie: Movie;
};
const DetailMovieCard = ({ movie }: DetailMovieCardProps) => {
  const { setPosition } = useModalContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: detail, isLoading } = useMovieDetail(movie.id);
  const cardRef = useRef<HTMLDivElement>(null);

  const showMovieDetailModal = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    if (!cardRef.current) {
      return;
    }

    const position = cardRef.current.getBoundingClientRect();
    setPosition(position);

    searchParams.append('movie', movie.id + '');
    setSearchParams(searchParams);
  };

  return (
    <DetailContainer ref={cardRef} className="movie-detail" onClick={showMovieDetailModal}>
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
          {!isLoading && detail?.vote_average && detail.vote_average > 0 && (
            <UserVote>{Math.round(detail.vote_average * 10)}점</UserVote>
          )}
        </InfoRow>
        <Genres>{!isLoading && detail?.genres?.map((genre) => genre.name).join(' / ')}</Genres>
      </DetailInfos>
    </DetailContainer>
  );
};

type MovieCardProps = {
  movie: Movie;
};
const MovieCard = ({ movie }: MovieCardProps) => {
  const [isHover, setIsHover] = useState(false);
  const thumbnailUrl = usePreviewImage({
    previewUrl: BACKDROP_W300_URL + movie.backdrop_path,
    originalUrl: BACKDROP_W780_URL + movie.backdrop_path,
    load: isHover && !!movie.backdrop_path,
  });

  return (
    <Container
      onMouseEnter={() => {
        setIsHover(true);
      }}
    >
      <ThumbnailContainer>
        {movie.backdrop_path && <ThumbnailImage src={thumbnailUrl} alt="썸네일" />}
        {!movie.backdrop_path && <NoImage>{movie.title}</NoImage>}
      </ThumbnailContainer>
      {isHover && <DetailMovieCard movie={movie} />}
    </Container>
  );
};
export default memo(MovieCard, (prev, current) => {
  return prev.movie.id === current.movie.id;
});

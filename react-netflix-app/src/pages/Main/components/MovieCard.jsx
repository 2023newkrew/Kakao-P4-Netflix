import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getMovieDetail } from '@/api/movies';
import {
  Container,
  Content,
  ThumbnailContainer,
  ThumbnailImage,
  GenreList,
  GenreItem,
  DetailInfos,
} from '@pages/Main/components/MovieCard.style';

const THUMBNAIL_BASE_URL = `https://www.themoviedb.org/t/p/w500`;

const useMovieDetail = (movieId) => {
  const [isLoading, setIsLoading] = useState(true);
  const [detail, setDetail] = useState(null);
  useEffect(() => {
    getMovieDetail(movieId)
      .then((response) => {
        setDetail(response.data);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, []);
  return {
    isLoading,
    data: detail,
  };
};

const MovieCard = ({ movie }) => {
  const { data: detail, isLoading } = useMovieDetail(movie.id);

  return (
    <Container>
      <Content>
        <ThumbnailContainer>
          <ThumbnailImage src={THUMBNAIL_BASE_URL + movie.backdrop_path} alt="썸네일" />
        </ThumbnailContainer>
        <DetailInfos>
          <h4>{movie.title}</h4>
          <h5>장르</h5>
          <GenreList>
            {!isLoading && detail?.genres.map((genre) => <GenreItem key={genre.id}>{genre.name}</GenreItem>)}
          </GenreList>
        </DetailInfos>
      </Content>
    </Container>
  );
};
MovieCard.propTypes = {
  movie: PropTypes.object,
};
export default MovieCard;

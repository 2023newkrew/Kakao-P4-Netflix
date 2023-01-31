import PropTypes from 'prop-types';
import DownIconImg from '@assets/down-icon.svg';
import StartIconImg from '@assets/start-icon.svg';
import {
  GenresContainer,
  GenreText,
  DetailButtonContainer,
  DetailIconButton,
  DetailInfoContainer,
  MovieCardDetailContainer,
  MovieCardDetailContent,
  TitleContainer,
} from './styles';

const MovieCardDetail = ({ isShow, movie }) => {
  if (!isShow) return null;

  const { title, genres } = movie || {};

  return (
    <MovieCardDetailContainer>
      <MovieCardDetailContent>
        <DetailButtonContainer>
          <DetailIconButton src={StartIconImg} />
          <DetailIconButton src={DownIconImg} />
        </DetailButtonContainer>
        <DetailInfoContainer>
          <TitleContainer>{title ?? ''}</TitleContainer>
          <GenresContainer>
            {genres?.map(({ name }) => <GenreText key={name}>{name}</GenreText>) ?? ''}
          </GenresContainer>
        </DetailInfoContainer>
      </MovieCardDetailContent>
    </MovieCardDetailContainer>
  );
};

MovieCardDetail.propTypes = {
  isShow: PropTypes.bool.isRequired,
  movie: PropTypes.object,
};

MovieCardDetail.defaultProps = {
  movie: {},
};

export default MovieCardDetail;

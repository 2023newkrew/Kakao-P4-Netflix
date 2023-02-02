import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import { getMovieDetail } from '@/apis/movie';
import MovieCardDetail from './movie-card-detail';
import { MovieCardContainer } from './styles';
import MovieModal from '@/components/modal/movie-modal';

const MovieCard = ({ movie }) => {
  const [isShowDetail, setIsShowDetail] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [detailedMovie, setDetailedMovie] = useState(null);

  const { backdrop_path: backdropPath, id } = movie;

  const onMouseEnter = useCallback(async () => {
    setIsShowDetail(true);

    if (detailedMovie === null) {
      setDetailedMovie(await getMovieDetail(id));
    }
  }, [detailedMovie, id]);

  const onMouseLeave = useCallback(() => setIsShowDetail(false), []);

  const onClick = useCallback(() => setIsShowModal(true), []);
  const onClose = useCallback(() => setIsShowModal(false), []);

  return (
    <>
      <MovieCardContainer
        backdropPath={backdropPath}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      >
        <MovieCardDetail isShow={isShowDetail} movie={detailedMovie} />
      </MovieCardContainer>
      {isShowModal && <MovieModal onClose={onClose} movie={detailedMovie} />}
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default React.memo(MovieCard);

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { getMovieDetail } from '@/apis/movie';
import MovieCardDetail from './movie-card-detail';
import { MovieCardContainer } from './styles';

const MovieCard = ({ movie }) => {
  const [isShowDetail, setIsShowDetail] = useState(false);
  const [detailedMovie, setDetailedMovie] = useState(null);

  const { backdrop_path: backdropPath, id } = movie;

  const getMovieDetailData = async (movidId) => {
    const data = await getMovieDetail(movidId);
    return data;
  };

  const handleMouseEnter = async () => {
    setIsShowDetail(true);

    if (detailedMovie === null) {
      setDetailedMovie(await getMovieDetailData(id));
    }
  };

  const handleMouseLeave = () => setIsShowDetail(false);

  return (
    <MovieCardContainer
      backdropPath={backdropPath}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <MovieCardDetail isAppear={isShowDetail} movie={detailedMovie} />
    </MovieCardContainer>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default React.memo(MovieCard);

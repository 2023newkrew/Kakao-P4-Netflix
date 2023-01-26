import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { getDetail } from '@/apis/home';
import MovieCardDetail from './movie-card-detail';
import { MovieCardContainer } from './styles';

const MovieCard = ({ movie }) => {
  const movieCardRef = useRef(null);

  const [isShowDetail, setIsShowDetail] = useState(false);
  const [detailedMovie, setDetailedMovie] = useState(null);

  const { backdrop_path: backdropPath, id } = movie;

  const getMovieDetail = async (movidId) => {
    const data = await getDetail(movidId);
    return data;
  };

  useEffect(() => {
    movieCardRef.current.addEventListener('mouseenter', async () => {
      setIsShowDetail(true);

      if (detailedMovie === null) {
        setDetailedMovie(await getMovieDetail(id));
      }
    });

    movieCardRef.current.addEventListener('mouseleave', () => setIsShowDetail(false));
  });

  return (
    <MovieCardContainer ref={movieCardRef} backdropPath={backdropPath}>
      <MovieCardDetail isAppear={isShowDetail} movie={detailedMovie} />
    </MovieCardContainer>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default React.memo(MovieCard);

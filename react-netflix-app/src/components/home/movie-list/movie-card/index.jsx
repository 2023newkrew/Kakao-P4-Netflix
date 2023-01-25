import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { getDetail } from '@/apis/home';
import MovieCardModal from './movie-card-modal';
import { MovieCardContainer } from './styles';

const MovieCard = ({ movie }) => {
  const movieCardRef = useRef(null);

  const [isShowModal, setIsShowModal] = useState(false);
  const [detailedMovie, setDetailedMovie] = useState(null);

  const { backdrop_path: backdropPath, id } = movie;

  const getMovieDetail = async (movidId) => {
    const data = await getDetail(movidId);
    return data;
  };

  useEffect(() => {
    if (movieCardRef.current === null) return;

    movieCardRef.current.addEventListener('mouseenter', async () => {
      setIsShowModal(true);

      if (detailedMovie === null) {
        setDetailedMovie(await getMovieDetail(id));
      }
    });

    movieCardRef.current.addEventListener('mouseleave', () => setIsShowModal(false));
  });

  return (
    <MovieCardContainer ref={movieCardRef} backdropPath={backdropPath}>
      <MovieCardModal isAppear={isShowModal} movie={detailedMovie} />
    </MovieCardContainer>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;

import useModal from "@hooks/useModal";
import MovieModal from "@components/modal/MovieModal";

import { MovieCardContainer } from "@styles/movieList/movieCard.style";

const MovieCard = ({ movie }) => {
  const { Modal, open } = useModal();

  const movieImageURL = process.env.REACT_APP_SMALL_IMAGE_API_URL + `/${movie.poster_path || movie.backdrop_path}`;
  return (
    <MovieCardContainer>
      <img src={movieImageURL} alt={movie.title} onClick={open} />

      <Modal>
        <MovieModal movie={movie} />
      </Modal>
    </MovieCardContainer>
  );
};

export default MovieCard;

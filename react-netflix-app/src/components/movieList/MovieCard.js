import styled from "styled-components";

import useModal from "@hooks/useModal";
import MovieModal from "@components/modal/MovieModal";

const MovieCardContainer = styled.div`
  width: 260px;
  height: 380px;
  overflow: hidden;
  cursor: pointer;

  background-color: rgb(24, 24, 24);

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;

const MovieCard = ({ movie }) => {
  const { Modal, open } = useModal();

  const movieImageURL = process.env.REACT_APP_IMAGE_API_URL + `/${movie.poster_path || movie.backdrop_path}`;
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

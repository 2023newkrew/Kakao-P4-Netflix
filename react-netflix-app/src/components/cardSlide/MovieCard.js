import { MovieCardContainer, MovieCardWrapper, MovieCardImage } from "@styles/cardSlide/MovieCard.style";

import { useState } from "react";

import classNames from "classnames";
import useModal from "@hooks/useModal";
import MovieModal from "@components/modal/MovieModal";

import MovieCardInfo from "./MovieCardInfo";

const MovieCard = ({ movie }) => {
  const [hover, setHover] = useState(false);
  const { Modal, open } = useModal();

  const movieImageURL = process.env.REACT_APP_IMAGE_API_URL + `/${movie.backdrop_path || movie.poster_path}`;

  return (
    <MovieCardContainer>
      <MovieCardWrapper onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <MovieCardImage onClick={open} className={classNames("movieCard_image", { hover: hover })} src={movieImageURL} alt={movie.title} loading="lazy" />
        {hover && <MovieCardInfo movie={movie} open={open} />}
      </MovieCardWrapper>

      <Modal>
        <MovieModal movie={movie} />
      </Modal>
    </MovieCardContainer>
  );
};

export default MovieCard;

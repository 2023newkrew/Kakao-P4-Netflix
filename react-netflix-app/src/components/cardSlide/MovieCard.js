import { MovieCardContainer, MovieCardWrapper, MovieCardImage, ImageWrapper } from "@styles/cardSlide/MovieCard.style";

import { useState } from "react";

import classNames from "classnames";
import useModal from "@hooks/useModal";

import MovieModal from "@components/modal/MovieModal";

import MovieCardInfo from "./MovieCardInfo";
import LazyLoad from "react-lazyload";

const MovieCard = ({ movie }) => {
  const [hover, setHover] = useState(false);
  const { Modal, open } = useModal();

  const movieImageURL = process.env.REACT_APP_SMALL_IMAGE_API_URL + `${movie.backdrop_path || movie.poster_path}`;

  return (
    <MovieCardContainer>
      <MovieCardWrapper onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <ImageWrapper>
          <LazyLoad>
            <MovieCardImage onClick={open} className={classNames("movieCard_image", { hover: hover })} src={movieImageURL} alt={movie.title} loading="lazy" />
          </LazyLoad>
          {hover && <MovieCardInfo movie={movie} open={open} />}
        </ImageWrapper>
      </MovieCardWrapper>
      <Modal>
        <MovieModal movie={movie} />
      </Modal>
    </MovieCardContainer>
  );
};

export default MovieCard;

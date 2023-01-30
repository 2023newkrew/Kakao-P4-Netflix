import { MovieCardContainer, MovieCardWrapper, MovieCardImage, ImageWrapper } from "@styles/cardSlide/MovieCard.style";

import { useState } from "react";

import LazyLoad from "react-lazyload";

import classNames from "classnames";
import useModal from "@hooks/useModal";

import MovieCardInfo from "./MovieCardInfo";
import MovieModal from "@components/modal/MovieModal";

const MovieCard = ({ movie }) => {
  const [hover, setHover] = useState(false);
  const { Modal, open } = useModal();

  const movieImageURL = process.env.REACT_APP_IMAGE_API_URL + `/${movie.backdrop_path || movie.poster_path}`;

  return (
    <MovieCardContainer>
      <MovieCardWrapper onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <ImageWrapper>
          <LazyLoad offset={100}>
            <MovieCardImage onClick={open} className={classNames("movieCard_image", { hover: hover })} src={movieImageURL} alt={movie.title} loading="lazy" />
          </LazyLoad>
        </ImageWrapper>
        {hover && <MovieCardInfo movie={movie} open={open} />}
      </MovieCardWrapper>
      <Modal>
        <MovieModal movie={movie} />
      </Modal>
    </MovieCardContainer>
  );
};

export default MovieCard;

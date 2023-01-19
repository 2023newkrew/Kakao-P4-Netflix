import "@scss/cardSlide/movieCard.scss";
import { useEffect, useRef, useState } from "react";
import MovieCardInfo from "./MovieCardInfo";

import classNames from "classnames";
import useModal from "@hooks/useModal";
import { API } from "@utils/axios";
import MovieModal from "../Modal/MovieModal";

const MovieCard = ({ movie, observe }) => {
  const [hover, setHover] = useState(false);
  const [movieURL, setMovieURL] = useState(``);
  const [movieInfo, setMovieInfo] = useState({});

  const image = useRef(null);

  useEffect(() => {
    if (observe !== undefined) observe(image.current);
  }, []);

  const { Modal, open } = useModal();
  const onModalOpen = async () => {
    const response = await Promise.all([API.fetchMovieVideoURL(movie.id), API.fetchDetailMovieInfo(movie.id)]);
    const [fetchMovieURL, fetchMovieInfo] = response;

    setMovieURL(fetchMovieURL);
    setMovieInfo(fetchMovieInfo);
    open();
  };

  const movieYoutubeURL = `https://www.youtube.com/embed/${movieURL}?autoplay=1&mute=1`;
  const movieImageURL = process.env.REACT_APP_IMAGE_API_URL + `/${movie.backdrop_path || movie.poster_path}`;
  return (
    <div className="movieCard_container">
      <div className="movieCard_wrapper" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <img ref={image} onClick={onModalOpen} className={classNames("movieCard_image", { hover: hover })} src={movieImageURL} alt={movie.title} loading="lazy" />
        {hover && <MovieCardInfo movie={movie} open={onModalOpen} />}
      </div>
      <MovieModal Modal={Modal} movieYoutubeURL={movieYoutubeURL} movieInfo={movieInfo} />
    </div>
  );
};

export default MovieCard;

import "@scss/cardSlide/movieCard.scss";
import { useState } from "react";
import MovieCardInfo from "./MovieCardInfo";

import classNames from "classnames";

const MovieCard = ({ movie }) => {
  const [hover, setHover] = useState(false);

  const movieImageURL = process.env.REACT_APP_IMAGE_API_URL + `/${movie.backdrop_path || movie.poster_path}`;
  return (
    <div className="movieCard_container" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <img className={classNames("movieCard_image", { hover: hover })} src={movieImageURL} alt={movie.title} />
      {hover && <MovieCardInfo movie={movie} hover={hover} />}
    </div>
  );
};

export default MovieCard;

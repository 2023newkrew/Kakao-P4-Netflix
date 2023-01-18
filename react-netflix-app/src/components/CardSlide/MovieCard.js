import "@scss/cardSlide/movieCard.scss";
import { useEffect, useRef, useState } from "react";
import MovieCardInfo from "./MovieCardInfo";

import classNames from "classnames";

const MovieCard = ({ movie, observe }) => {
  const [hover, setHover] = useState(false);

  const image = useRef(null);

  useEffect(() => {
    if (observe !== undefined) observe(image.current);
  }, []);

  const movieImageURL = process.env.REACT_APP_IMAGE_API_URL + `/${movie.backdrop_path || movie.poster_path}`;
  return (
    <div className="movieCard_container" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <img ref={image} className={classNames("movieCard_image", { hover: hover })} src={movieImageURL} alt={movie.title} />
      {hover && <MovieCardInfo movie={movie} />}
    </div>
  );
};

export default MovieCard;

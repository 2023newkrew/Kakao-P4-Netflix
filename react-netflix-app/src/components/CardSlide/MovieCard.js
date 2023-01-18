import "@scss/cardSlide/movieCard.scss";
import { useEffect, useRef, useState } from "react";
import MovieCardInfo from "./MovieCardInfo";

import classNames from "classnames";
import useModal from "../../hooks/useModal";
import Portal from "../modal/Portal";
import { API } from "../../utils/axios";

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
    const fetchMovieURL = response[0];
    const fetchMovieInfo = response[1];

    setMovieURL(fetchMovieURL);
    setMovieInfo(fetchMovieInfo);
    open();
  };

  const movieYoutubeURL = `https://www.youtube.com/embed/${movieURL}?autoplay=1&mute=1`;
  const movieImageURL = process.env.REACT_APP_IMAGE_API_URL + `/${movie.backdrop_path || movie.poster_path}`;
  return (
    <div className="movieCard_container">
      <div className="movieCard_wrapper" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <img ref={image} onClick={onModalOpen} className={classNames("movieCard_image", { hover: hover })} src={movieImageURL} alt={movie.title} />
        {hover && <MovieCardInfo movie={movie} open={onModalOpen} />}
      </div>

      {/* <Portal> */}
      <Modal>
        {/* 스트레인지 월드 확인해보기 */}
        <iframe src={movieYoutubeURL} title="YouTube video player" frameBorder="0" allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;" allowFullScreen />
        <div className="modal_movieCardContainer">
          <div>
            <div className="movieCard_title">{movieInfo.title}</div>
            <div className="movieCard_subTitle">{movieInfo.tagline}</div>
            <div className="movieCard_info">
              <div className="movieCard_overview">{movieInfo.overview}</div>
            </div>
          </div>
          <div className="movieCard_subInfo">
            <div>평점 : {Math.round(movieInfo.vote_average, 1)}점</div>
            <div>장르 : [ {movieInfo.genres && movieInfo.genres.map((genre) => genre.name + " ")}]</div>
            <div>개봉일 : {movieInfo.release_date}</div>
            <div>러닝타임 : {movieInfo.runtime}분</div>
          </div>
        </div>
      </Modal>
      {/* </Portal> */}
    </div>
  );
};

export default MovieCard;

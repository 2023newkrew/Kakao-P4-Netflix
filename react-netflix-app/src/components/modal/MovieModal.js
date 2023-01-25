import { useEffect, useState } from "react";
import { API } from "@utils/axios";

import { MovieCardSubInfoContainer, MovieCardInfoContainer, MovieCardTitle, MovieCardSubTitle, MovieCardOverviewWrapper, MovieCardOverview, MovieModalContainer, ModalMovieCard } from "@styles/modal/MovieModal.style";

const MovieCardSubInfo = ({ movieInfo }) => {
  return (
    <MovieCardSubInfoContainer>
      <div>평점 : {Math.round(movieInfo.vote_average, 1)}점</div>
      <div>장르 : [ {movieInfo.genres && movieInfo.genres.map((genre) => genre.name + " ")}]</div>
      <div>개봉일 : {movieInfo.release_date}</div>
      <div>러닝타임 : {movieInfo.runtime}분</div>
    </MovieCardSubInfoContainer>
  );
};

const MovieCardInfo = ({ movieInfo }) => {
  return (
    <MovieCardInfoContainer>
      <MovieCardTitle>{movieInfo.title}</MovieCardTitle>
      <MovieCardSubTitle>{movieInfo.tagline}</MovieCardSubTitle>
      <MovieCardOverviewWrapper>
        <MovieCardOverview>{movieInfo.overview}</MovieCardOverview>
      </MovieCardOverviewWrapper>
    </MovieCardInfoContainer>
  );
};

const MovieModal = ({ movie }) => {
  const [movieURL, setMovieURL] = useState();
  const [movieInfo, setMovieInfo] = useState();

  useEffect(() => {
    fetchMovieInfo(movie);

    async function fetchMovieInfo(movie) {
      const response = await Promise.all([API.fetchMovieVideoURL(movie.id), API.fetchDetailMovieInfo(movie.id)]);
      const [fetchMovieURL, fetchMovieInfo] = response;

      setMovieURL(fetchMovieURL);
      setMovieInfo(fetchMovieInfo);
    }
  }, [movie]);

  if (movieInfo === undefined) return <div></div>;

  const movieYoutubeURL = `https://www.youtube.com/embed/${movieURL}?autoplay=1&mute=1`;
  const movieImageURL = process.env.REACT_APP_IMAGE_API_URL + `/${movie.poster_path || movie.backdrop_path}`;

  return (
    <MovieModalContainer>
      {movieURL !== null ? <iframe src={movieYoutubeURL} title="YouTube video player" allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;" allowFullScreen /> : <img src={movieImageURL} alt={movie.title} />}
      <ModalMovieCard>
        <MovieCardInfo movieInfo={movieInfo} />
        <MovieCardSubInfo movieInfo={movieInfo} />
      </ModalMovieCard>
    </MovieModalContainer>
  );
};

export default MovieModal;

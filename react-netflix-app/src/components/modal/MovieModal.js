import { useEffect, useState } from "react";
import { API } from "@utils/axios";
import YouTube from "react-youtube";

import MovieCardSubInfo from "./MovieCardSubInfo";
import MovieCardInfo from "./MovieCardInfo";

import { MovieModalContainer, MovieModalImageWrapper, ModalMovieCard } from "@styles/modal/MovieModal.style";

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

  const movieImageURL = process.env.REACT_APP_ORIGINAL_IMAGE_API_URL + `/${movie.poster_path || movie.backdrop_path}`;

  console.log(movieImageURL);

  const options = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1,
      mute: 1,
      rel: 0,
    },
  };

  return (
    <MovieModalContainer>
      <MovieModalImageWrapper>{movieURL !== null ? <YouTube className="youtube" videoId={movieURL} opts={options} /> : <img src={movieImageURL} alt={movie.title} />}</MovieModalImageWrapper>
      <ModalMovieCard>
        <MovieCardInfo movieInfo={movieInfo} />
        <MovieCardSubInfo movieInfo={movieInfo} />
      </ModalMovieCard>
    </MovieModalContainer>
  );
};

export default MovieModal;

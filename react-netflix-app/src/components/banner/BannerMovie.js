import { BannerMovieContainer } from "@styles/banner/BannerMovie.style";

import { API } from "@utils/axios";
import useFetch from "@hooks/useFetch";
import YouTube from "react-youtube";
import { useState } from "react";

const BannerMovie = ({ bannerMovie }) => {
  const [isVideoEnd, setIsVideoEnd] = useState(false);
  const { data: bannerMovieVideoURL, loading, LoadingComponent } = useFetch(API.fetchMovieVideoURL(bannerMovie.id));

  if (loading) return <LoadingComponent />;

  const options = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1,
      mute: 1,
      rel: 0,
    },
  };

  const onMovieEndEvent = () => {
    setIsVideoEnd(true);
  };

  const movieImageURL = process.env.REACT_APP_ORIGINAL_IMAGE_API_URL + `/${bannerMovie.backdrop_path || bannerMovie.poster_path}`;

  return <BannerMovieContainer>{!isVideoEnd ? <YouTube className="youtube" videoId={bannerMovieVideoURL} opts={options} onEnd={onMovieEndEvent} /> : <img src={movieImageURL} alt={bannerMovie.title} />}</BannerMovieContainer>;
};

export default BannerMovie;

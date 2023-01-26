import { BannerMovieContainer } from "@styles/banner/BannerMovie.style";

import Youtube from "react-youtube";

import { API } from "@utils/axios";
import useFetch from "@hooks/useFetch";

const BannerMovie = ({ bannerMovie }) => {
  const { data, loading, LoadingComponent } = useFetch(API.fetchMovieVideoURL(bannerMovie.id));
  const bannerMovieURL = data;

  if (loading) return <LoadingComponent />;

  return (
    <BannerMovieContainer>
      <Youtube className="youtube" videoId={bannerMovieURL} opts={{ playerVars: { autoplay: 1, rel: 0, mute: 1 } }} />
    </BannerMovieContainer>
  );
};

export default BannerMovie;

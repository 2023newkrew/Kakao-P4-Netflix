import { BannerMovieContainer } from "@styles/banner/BannerMovie.style";

import React, { useState, useEffect } from "react";

import { API } from "@utils/axios";

const BannerMovie = ({ bannerMovie }) => {
  const [bannerMovieURL, setBannerMovieURL] = useState();

  useEffect(() => {
    fetchAndSetBannerMovieVideoURL();

    async function fetchAndSetBannerMovieVideoURL() {
      const fetchBannerMovieURL = await API.fetchMovieVideoURL(bannerMovie.id);
      setBannerMovieURL(fetchBannerMovieURL);
    }
  }, []);

  if (bannerMovieURL === undefined) return <div />;

  const bannerMovieYoutubeURL = `https://www.youtube.com/embed/${bannerMovieURL}?autoplay=1&mute=1`;

  return (
    <BannerMovieContainer>
      <iframe src={bannerMovieYoutubeURL} title="YouTube video player" allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;" allowFullScreen />
    </BannerMovieContainer>
  );
};

export default BannerMovie;

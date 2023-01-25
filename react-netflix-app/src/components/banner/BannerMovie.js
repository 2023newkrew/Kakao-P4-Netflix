import { BannerMovieContainer } from "@styles/banner/BannerMovie.style";

import React, { useState, useEffect } from "react";

import { API } from "@utils/axios";
import Loading from "@components/loading/Loading";
import useFetch from "@hooks/useFetch";

const BannerMovie = ({ bannerMovie }) => {
  const { data, loading } = useFetch(API.fetchMovieVideoURL(bannerMovie.id));
  const bannerMovieURL = data;

  if (loading) return <Loading />;

  const bannerMovieYoutubeURL = `https://www.youtube.com/embed/${bannerMovieURL}?autoplay=1&mute=1`;

  return (
    <BannerMovieContainer>
      <iframe src={bannerMovieYoutubeURL} title="YouTube video player" allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;" allowFullScreen />
    </BannerMovieContainer>
  );
};

export default BannerMovie;

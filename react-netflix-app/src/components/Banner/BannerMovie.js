import React, { useState, useEffect } from "react";

import { API } from "../../utils/axios";

import "@scss/banner/bannerMovie.scss";

const BannerMovie = ({ bannerMovie }) => {
  const [bannerMovieURL, setBannerMovieURL] = useState("");

  useEffect(() => {
    fetchAndSetBannerMovieVideoURL();

    async function fetchAndSetBannerMovieVideoURL() {
      const fetchBannerMovieURL = await API.fetchBannerMovieVideoURL(bannerMovie);
      setBannerMovieURL(fetchBannerMovieURL);
    }
  }, []);

  if (bannerMovieURL === undefined) return <div>값을 렌더링하는 중입니다.</div>;
  else {
    const bannerMovieImageURL = process.env.REACT_APP_IMAGE_API_URL + `/${bannerMovie.backdrop_path || bannerMovie.poster_path}`;
    const bannerMovieYoutubeURL = `https://www.youtube.com/embed/${bannerMovieURL}?autoplay=1&mute=1`;

    return (
      <div className="bannerMovie_container">
        {bannerMovieURL !== undefined ? (
          <iframe src={bannerMovieYoutubeURL} title="YouTube video player" frameBorder="0" allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;" allowFullScreen></iframe>
        ) : (
          <img className="bannerMovie_image" src={bannerMovieImageURL} alt="배너 영화 이미지" />
        )}
      </div>
    );
  }
};

export default BannerMovie;

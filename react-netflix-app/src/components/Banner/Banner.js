import "@scss/banner/banner.scss";

import React, { useState, useEffect } from "react";

import axios from "axios";
import BannerMovie from "./BannerMovie";
import BannerInfo from "./BannerInfo";

const Banner = () => {
  const [bannerMovie, setBannerMovie] = useState();

  useEffect(() => {
    async function fetchAndSetBannerMovie() {
      // TODO : 에러 핸들링 작성
      const API_URL = process.env.REACT_APP_API_URL;
      const API_KEY = process.env.REACT_APP_API_KEY;

      // * https://api.themoviedb.org/3/movie/popular?api_key=<<API_KEY>>&language=en-US&page=1
      const response = await axios.get(`${API_URL}/3/movie/now_playing?api_key=${API_KEY}&language=ko`);

      const popularMovieList = response.data.results;
      const random = Math.floor(Math.random() * popularMovieList.length);

      setBannerMovie(popularMovieList[random]);
    }
    fetchAndSetBannerMovie();
  }, []);

  if (bannerMovie === undefined) return <div>값을 렌더링하는 중입니다.</div>;
  else {
    return (
      <div className="banner_container">
        <BannerMovie bannerMovie={bannerMovie} />
        <BannerInfo bannerMovie={bannerMovie} />
      </div>
    );
  }
};

export default Banner;

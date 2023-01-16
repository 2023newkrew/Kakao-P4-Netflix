import "@scss/banner/banner.scss";

import React, { useState, useEffect } from "react";

import axios from "axios";

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

      console.log(popularMovieList);

      setBannerMovie(popularMovieList[random]);
    }
    fetchAndSetBannerMovie();
  }, []);

  if (bannerMovie === undefined) {
    return <div>값을 렌더링하는 중입니다.</div>;
  } else {
    const bannerMovieImageURL = process.env.REACT_APP_IMAGE_API_URL + `/${bannerMovie.backdrop_path || bannerMovie.poster_path}`;

    return (
      <div className="banner_container">
        <img className="banner_image" src={bannerMovieImageURL} alt="배너 영화 이미지" />
        <div className="banner_info">
          <div className="banner_title">{bannerMovie.title}</div>
        </div>
      </div>
    );
  }
};

export default Banner;

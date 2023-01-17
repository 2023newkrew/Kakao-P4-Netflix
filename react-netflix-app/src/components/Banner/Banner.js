import "@scss/banner/banner.scss";

import React, { useState, useEffect } from "react";

import axios from "axios";
import BannerMovie from "./BannerMovie";
import BannerInfo from "./BannerInfo";
import { API } from "../../utils/axios";

const Banner = () => {
  const [bannerMovie, setBannerMovie] = useState();

  useEffect(() => {
    fetchAndSetBannerMovie();

    async function fetchAndSetBannerMovie() {
      const fetchBannerMovie = await API.fetchBannerMovie();

      setBannerMovie(fetchBannerMovie);
    }
  }, []);

  if (bannerMovie === undefined) return <div>값을 렌더링하는 중입니다.</div>;
  return (
    <div className="banner_container">
      <BannerMovie bannerMovie={bannerMovie} />
      <BannerInfo bannerMovie={bannerMovie} />
    </div>
  );
};

export default Banner;

import { BannerContainer } from "@styles/banner/Banner.style";

import React, { useState, useEffect } from "react";

import BannerMovie from "./BannerMovie";
import BannerInfo from "./BannerInfo";

import { API } from "@utils/axios";

const Banner = () => {
  const [bannerMovie, setBannerMovie] = useState();

  useEffect(() => {
    fetchAndSetBannerMovie();

    async function fetchAndSetBannerMovie() {
      const fetchBannerMovie = await API.fetchBannerMovie();

      setBannerMovie(fetchBannerMovie);
    }
  }, []);

  if (bannerMovie === undefined) return <div />;

  return (
    <BannerContainer>
      <BannerMovie bannerMovie={bannerMovie} />
      <BannerInfo bannerMovie={bannerMovie} />
    </BannerContainer>
  );
};

export default Banner;

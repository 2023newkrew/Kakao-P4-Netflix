import { BannerContainer } from "@styles/banner/Banner.style";

import { API } from "@utils/axios";
import useFetch from "@hooks/useFetch";

import React, { lazy, Suspense } from "react";

import BannerInfo from "./BannerInfo";
const BannerMovie = lazy(() => import("./BannerMovie"));

const Banner = () => {
  const { data: bannerMovie, loading, LoadingComponent } = useFetch(API.fetchBannerMovie());

  if (loading) return <LoadingComponent />;

  return (
    <BannerContainer>
      <Suspense fallback={null}>
        <BannerMovie bannerMovie={bannerMovie} />
        <BannerInfo bannerMovie={bannerMovie} />
      </Suspense>
    </BannerContainer>
  );
};

export default Banner;

import { BannerContainer } from "@styles/banner/Banner.style";

import BannerMovie from "./BannerMovie";
import BannerInfo from "./BannerInfo";

import { API } from "@utils/axios";
import useFetch from "@hooks/useFetch";

const Banner = () => {
  const { data, loading, LoadingComponent } = useFetch(API.fetchBannerMovie());

  if (loading === true) return <LoadingComponent />;

  const bannerMovie = data;

  return (
    <BannerContainer>
      <BannerMovie bannerMovie={bannerMovie} />
      <BannerInfo bannerMovie={bannerMovie} />
    </BannerContainer>
  );
};

export default Banner;

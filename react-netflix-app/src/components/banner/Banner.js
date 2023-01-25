import { BannerContainer } from "@styles/banner/Banner.style";

import BannerMovie from "./BannerMovie";
import BannerInfo from "./BannerInfo";

import { API } from "@utils/axios";
import useFetch from "@hooks/useFetch";
import Loading from "@components/loading/Loading";

const Banner = () => {
  const { data, loading } = useFetch(API.fetchBannerMovie());

  if (loading === true) return <Loading />;

  const bannerMovie = data;

  return (
    <BannerContainer>
      <BannerMovie bannerMovie={bannerMovie} />
      <BannerInfo bannerMovie={bannerMovie} />
    </BannerContainer>
  );
};

export default Banner;

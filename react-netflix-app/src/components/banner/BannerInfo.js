import { BannerInfoContainer, BannerInfoButton, BannerInfoTitle, BannerInfoPlayButton, BannerInfoDetailButton } from "@styles/banner/BannerInfo.style";

import useModal from "@hooks/useModal";
import MovieModal from "@components/modal/MovieModal";

const BannerInfo = ({ bannerMovie }) => {
  const { Modal, open } = useModal();

  return (
    <BannerInfoContainer>
      <BannerInfoTitle>{bannerMovie.title}</BannerInfoTitle>
      <BannerInfoButton>
        <BannerInfoPlayButton>재생</BannerInfoPlayButton>
        <BannerInfoDetailButton onClick={open}>상세 정보</BannerInfoDetailButton>
        <Modal>
          <MovieModal movie={bannerMovie} />
        </Modal>
      </BannerInfoButton>
    </BannerInfoContainer>
  );
};

export default BannerInfo;

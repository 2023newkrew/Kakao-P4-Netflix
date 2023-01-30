import { BannerInfoContainer, BannerInfoButton, BannerInfoTitle, BannerInfoPlayButton, BannerInfoDetailButton } from "@styles/banner/BannerInfo.style";

import { AiFillCaretRight } from "react-icons/ai";
import { IoIosInformationCircleOutline } from "react-icons/io";

import useModal from "@hooks/useModal";
import MovieModal from "@components/modal/MovieModal";

const BannerInfo = ({ bannerMovie }) => {
  const { Modal, open } = useModal();

  return (
    <BannerInfoContainer>
      <BannerInfoTitle>{bannerMovie.title}</BannerInfoTitle>
      <BannerInfoButton>
        <BannerInfoPlayButton>
          <AiFillCaretRight />
          재생
        </BannerInfoPlayButton>
        <BannerInfoDetailButton onClick={open}>
          <IoIosInformationCircleOutline />
          상세 정보
        </BannerInfoDetailButton>
        <Modal>
          <MovieModal movie={bannerMovie} />
        </Modal>
      </BannerInfoButton>
    </BannerInfoContainer>
  );
};

export default BannerInfo;

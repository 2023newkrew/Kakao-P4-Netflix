import { AiFillCaretRight } from "react-icons/ai";
import { IoIosInformationCircleOutline } from "react-icons/io";

import { BannerInfoContainer, BannerInfoButton, BannerInfoTitle, BannerInfoPlayButton, BannerInfoDetailButton } from "./BannerInfo.style";

const BannerInfo = ({ bannerMovie }) => {
  return (
    <BannerInfoContainer>
      <BannerInfoTitle>{bannerMovie.title}</BannerInfoTitle>

      <BannerInfoButton>
        <BannerInfoPlayButton>
          <AiFillCaretRight />
          재생
        </BannerInfoPlayButton>

        <BannerInfoDetailButton>
          <IoIosInformationCircleOutline />
          상세 정보
        </BannerInfoDetailButton>
      </BannerInfoButton>
    </BannerInfoContainer>
  );
};

export default BannerInfo;

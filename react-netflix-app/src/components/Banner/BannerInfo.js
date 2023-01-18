import { AiFillCaretRight } from "react-icons/ai";
import { IoIosInformationCircleOutline } from "react-icons/io";

import "@scss/banner/bannerInfo.scss";

const BannerInfo = ({ bannerMovie }) => {
  return (
    <div className="bannerInfo_container">
      <div className="bannerInfo_title">{bannerMovie.title}</div>
      <div className="bannerInfo_button">
        <button className="bannerInfo_playButton">
          <AiFillCaretRight />
          재생
        </button>
        <button className="bannerInfo_detailButton">
          <IoIosInformationCircleOutline />
          상세 정보
        </button>
      </div>
    </div>
  );
};

export default BannerInfo;

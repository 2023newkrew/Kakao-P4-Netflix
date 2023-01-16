import React from "react";
import searchIcon from "../../../assets/searchIcon.svg";
import bellIcon from "../../../assets/bellIcon.svg";
import styles from "./HeaderRight.css";

export default function HeaderRight() {
  return (
    <div className="header-right">
      <div className="header-right__search">
        <button>
          <img src={searchIcon} />
        </button>
      </div>
      <div className="header-right__kids">
        <a>키즈</a>
      </div>
      <div className="header-right__alarm">
        <button>
          <img src={bellIcon} />
        </button>
      </div>
      <div className="header-right__setting">
        <div className="header-right__setting__icon">
          <a>프로필사진</a>
        </div>

        <span className="caret"></span>
      </div>
    </div>
  );
}

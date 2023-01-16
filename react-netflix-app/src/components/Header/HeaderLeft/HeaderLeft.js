import React from "react";
import logo from "../../../assets/netflixLogo.svg";
import styles from "./HeaderLeft.css";

export default function HeaderLeft() {
  return (
    <div className="header-left">
      <a className="logo">
        <img src={logo} />
      </a>
      <ul>
        <li></li>
        <li>
          <a>홈</a>
        </li>
        <li>
          <a>시리즈</a>
        </li>
        <li>
          <a>영화</a>
        </li>
        <li>
          <a>New! 요즘 대세 콘텐츠</a>
        </li>
        <li>
          <a>내가 찜한 콘텐츠</a>
        </li>
        <li>
          <a>언어별로 찾아보기</a>
        </li>
      </ul>
    </div>
  );
}

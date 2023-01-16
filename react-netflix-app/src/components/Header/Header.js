import React from "react";

import logoImage from "assets/logo.png";
import notiImage from "assets/noti.svg";

export default function Header() {
  const navTabs = () => {
    const tabList = [
      "홈",
      "시리즈",
      "영화",
      "NEW! 요즘 대세 콘텐츠",
      "내가 찜한 콘텐츠",
      "언어별로 찾아보기",
    ];
    return (
      <ul className="navigation-tabs">
        {tabList.map((tabText, index) => {
          return (
            <li className="navigation-tab" key={index}>
              <a href="/#" className="current">
                {tabText}
              </a>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="header">
      <div className="header-container">
        <div className="navigation">
          <a className="navigation-logo" href="/#">
            <img src={logoImage} alt="logo" />
          </a>
          {navTabs()}
          <div className="navigation">
            <div className="navigation-element">Search</div>
            <div className="navigation-element">
              <a className="navigation__kids-btn" href="/#">
                키즈
              </a>
            </div>
            <div className="navigation-element">
              <button className="navigation__notification-btn" type="button">
                <img src={notiImage} alt="noti" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

import logoImage from "assets/logo.png";
import notiImage from "assets/noti.svg";

const Header = ({}) => {
  const navTabs = () => {
    // 이런거 어디에서 관리하지!?
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
    <header className="header">
      <nav className="navigation">
        <div className="navigation__container">
          <a className="navigation-logo" href="/#">
            <img src={logoImage} alt="logo" />
          </a>
          {navTabs()}
        </div>
        <div className="navigation__container">
          <div className="navigation__element">Search</div>
          <div className="navigation__element">
            <a className="navigation__kids-btn" href="/#">
              키즈
            </a>
          </div>
          <div className="navigation__element">
            <button className="navigation__notification-btn" type="button">
              <img src={notiImage} alt="noti" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import React from "react";
const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__background">
        <img className="background__image" alt="컨텐츠 대표 이미지"></img>
      </div>
      <div className="banner__content-info">
        <div className="content-info__logo-wrapper">N 시리즈</div>
        <div className="content-info__text-wrapper">
          <h1 className="content-info__title">컨텐츠 제목</h1>
          <p className="content-info__description">컨텐츠 소개, 줄거리 같은거!!</p>
        </div>
        <div className="content-info__button-wrapper">
          <button>재생</button>
          <button>상세 정보</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;

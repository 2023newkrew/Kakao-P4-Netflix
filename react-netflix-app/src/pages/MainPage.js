import Banner from "@components/banner/Banner";
import CardSlide from "@components/cardSlide/CardSlide";

import React from "react";
import LazyLoad from "react-lazyload";

const MainPage = () => {
  return (
    <>
      <Banner />
      <LazyLoad>
        <CardSlide category={"액션"} />
        <CardSlide category={"모험"} />
        <CardSlide category={"애니메이션"} />
        <CardSlide category={"SF"} />
        <CardSlide category={"공포"} />
        <CardSlide category={"코미디"} />
        <CardSlide category={"음악"} />
      </LazyLoad>
    </>
  );
};

export default MainPage;

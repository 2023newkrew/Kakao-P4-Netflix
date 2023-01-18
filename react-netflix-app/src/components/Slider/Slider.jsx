import React, { useEffect, useState } from "react";
import { SliderCard } from "components";

const Slider = ({ keyword }) => {
  const [contents, setContents] = useState([{ title: "더글로리" }]);

  useEffect(() => {
    // 키워드별 컨텐츠 리스트 get API 호출
  });

  const sliderCards = () => {
    return contents?.map((content, index) => {
      return <SliderCard key={index} content={content} index={index} />;
    });
  };

  return (
    <section className="slider">
      <h3>{keyword}</h3>
      <ul className="slider__cards">{sliderCards()}</ul>
      <div className="slider__button-wrapper">
        <button className="slider__button--left" type="button"></button>
        <button className="slider__button--right" type="button"></button>
      </div>
    </section>
  );
};

export default React.memo(Slider);

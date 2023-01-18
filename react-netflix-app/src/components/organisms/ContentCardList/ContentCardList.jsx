import React, { useEffect, useState } from "react";
import { ContentCard } from "components";

const ContentCardList = ({ keyword }) => {
  const [contents, setContents] = useState([{ title: "더글로리" }]);

  useEffect(() => {
    // 키워드별 컨텐츠 리스트 get API 호출
  });

  const makeContentCards = () => {
    return contents?.map((content, index) => {
      return <ContentCard key={index} content={content} index={index} />;
    });
  };

  return (
    <section className="slider">
      <h3>{keyword}</h3>
      <ul className="slider__cards">{makeContentCards()}</ul>
      <div className="slider__button-wrapper">
        <button className="slider__button--left" type="button"></button>
        <button className="slider__button--right" type="button"></button>
      </div>
    </section>
  );
};

export default React.memo(ContentCardList);

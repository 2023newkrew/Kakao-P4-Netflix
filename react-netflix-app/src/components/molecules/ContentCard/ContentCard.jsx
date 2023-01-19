import React from "react";

const ContentCard = ({ content }) => {
  return (
    <li>
      <article className="slider-card">
        <div className="slider-card__image-wrapper">
          <img alt="컨텐츠 썸네일 이미지"></img>
        </div>
      </article>
    </li>
  );
};

export default ContentCard;

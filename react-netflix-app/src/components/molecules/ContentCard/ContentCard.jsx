import React from "react";
import { ContentCardContainer, ContentCardImage } from "./ContentCard.style";

import api from "utils/API";

const ContentCard = ({ content }) => {
  return (
    <ContentCardContainer>
      <article>
        <div>
          <ContentCardImage
            alt="컨텐츠 썸네일 이미지"
            src={api.getimageSeverURL() + content.backdrop_path}
            loading="lazy"
          />
        </div>
      </article>
    </ContentCardContainer>
  );
};

export default ContentCard;

import React from "react";
import { EllipsisText, ContentDetail, ModalDispatchContext } from "components";
import { ContentCardContainer, ContentCardImage, ContentTitleWrapper } from "./ContentCard.style";

import api from "utils/API";

const ContentCard = ({ content }) => {
  const { openModal } = React.useContext(ModalDispatchContext);

  return (
    <ContentCardContainer
      onClick={() =>
        openModal(
          <ContentDetail
            title={content.title}
            desc={content.overview}
            imageURL={content.backdrop_path ?? content.poster_path}
          />
        )
      }
    >
      <article>
        <div>
          <ContentCardImage
            alt={`<${content.title}>의 썸네일 이미지`}
            src={api.getImageSeverURL() + (content.backdrop_path ?? content.poster_path)}
            loading="lazy"
          />
        </div>
        <ContentTitleWrapper>
          <EllipsisText text={content.title} fontWeight="bold" />
        </ContentTitleWrapper>
      </article>
    </ContentCardContainer>
  );
};

export default React.memo(ContentCard);

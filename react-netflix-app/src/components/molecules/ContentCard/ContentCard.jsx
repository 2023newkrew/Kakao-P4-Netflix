import React from "react";
import { EllipsisText, ContentDetail, ModalDispatchContext } from "components";
import { ContentCardContainer, ContentCardImage, ContentTitleWrapper } from "./ContentCard.style";

import api from "utils/API";

const ContentCard = ({ content }) => {
  const { openModal } = React.useContext(ModalDispatchContext);

  return (
    <ContentCardContainer>
      <article
        onClick={() =>
          openModal(
            <ContentDetail
              title={content.title}
              desc={content.overview}
              imageURL={content.backdrop_path}
            />
          )
        }
      >
        <div>
          <ContentCardImage
            alt="컨텐츠 썸네일 이미지"
            src={api.getImageSeverURL() + content.backdrop_path}
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

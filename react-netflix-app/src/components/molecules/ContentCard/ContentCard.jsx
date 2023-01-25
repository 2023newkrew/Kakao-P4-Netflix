import React from "react";
import useModal from "hooks/useModal";
import { EllipsisText, ContentDetail } from "components";
import { ContentCardContainer, ContentCardImage, ContentTitleWrapper } from "./ContentCard.style";

import api from "utils/API";

const ContentCard = ({ content }) => {
  const { Modal, open } = useModal();

  return (
    <ContentCardContainer>
      <Modal>
        <ContentDetail
          title={content.title}
          desc={content.overview}
          imageURL={content.backdrop_path}
        />
      </Modal>
      <article onClick={open}>
        <div>
          <ContentCardImage
            alt="컨텐츠 썸네일 이미지"
            src={api.getimageSeverURL() + content.backdrop_path}
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

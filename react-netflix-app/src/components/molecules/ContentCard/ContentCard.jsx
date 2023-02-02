import React from "react";
import { EllipsisText, ContentInfo, ModalDispatchContext } from "components";
import { ContentCardContainer, ContentCardImage, ContentTitleWrapper } from "./ContentCard.style";

import api from "utils/API";
import { useNavigate } from "react-router-dom";

const ContentCard = ({ content, type = "modal" }) => {
  const navigate = useNavigate();
  const { openModal } = React.useContext(ModalDispatchContext);

  const handleOnClick = () => {
    if (type === "modal") {
      openModal(
        <ContentInfo
          title={content.title}
          desc={content.overview}
          imageURL={content.backdrop_path ?? content.poster_path}
        />
      );
    } else {
      navigate(`/detail/${content.id}`);
    }
  };
  return (
    <ContentCardContainer
      onClick={() => {
        handleOnClick();
      }}
    >
      <article>
        <div>
          <ContentCardImage
            alt={`<${content.title}>의 썸네일 이미지`}
            src={api.getImageSeverURL("low") + (content.backdrop_path ?? content.poster_path)}
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

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { EllipsisText, ContentInfo } from "components";
import { ModalDispatchContext, ResponsiveContext } from "contexts";
import api from "utils/API";

import { ContentCardContainer, ContentCardImage, ContentTitleWrapper } from "./ContentCard.style";

const ContentCard = ({ content, type = "modal" }) => {
  const navigate = useNavigate();
  const { openModal } = React.useContext(ModalDispatchContext);
  const { cardsPerGroup } = useContext(ResponsiveContext);

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
      cardsPerGroup={cardsPerGroup}
      onClick={() => {
        handleOnClick();
      }}
    >
      <article>
        <div>
          <ContentCardImage
            cardsPerGroup={cardsPerGroup}
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

import React, { useContext } from "react";
import { ContentCard } from "components";
import { ResponsiveContext } from "contexts";

import { ContentListContainer, ContentGridWrapper } from "./GridContentList.style";

const ContentGrid = ({ contents }) => {
  const { cardsPerGroup } = useContext(ResponsiveContext);

  return (
    <ContentGridWrapper cardsPerGroup={cardsPerGroup}>
      {contents?.map((content) => (
        <ContentCard key={content.id} content={content} type="page" />
      ))}
    </ContentGridWrapper>
  );
};

const GridContentList = ({ contents }) => {
  return (
    <ContentListContainer>
      <ContentGrid contents={contents} />
    </ContentListContainer>
  );
};

export default React.memo(GridContentList);

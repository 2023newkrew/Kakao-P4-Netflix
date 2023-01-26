import React, { useEffect, useState } from "react";
import { ContentCard } from "components";
import {
  ContentListContainer,
  ContentListWrapper,
  ContentListTitle,
} from "./ContentCardList.style";

import api from "utils/API";

const ContentCardList = ({ id, genrename }) => {
  const [contents, setContents] = useState([
    {
      id: "",
      backdrop_path: "",
      title: "",
      overview: "",
    },
  ]);

  useEffect(() => {
    getContentsByGenre();
  }, []);

  const getContentsByGenre = async () => {
    const res = await api.get(`/discover/movie`, { with_genres: id, language: "ko-KR" });
    setContents(res.results);
  };

  const ContentCards = React.memo(() => {
    return (
      <ContentListWrapper>
        {contents?.map((content) => {
          return <ContentCard key={content.id} content={content} />;
        })}
      </ContentListWrapper>
    );
  });

  return (
    <ContentListContainer>
      <ContentListTitle>{genrename}</ContentListTitle>
      <ContentCards />
    </ContentListContainer>
  );
};

export default ContentCardList;

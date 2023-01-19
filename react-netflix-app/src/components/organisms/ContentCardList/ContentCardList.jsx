import React, { useEffect, useState } from "react";
import { ContentCard } from "components";

const ContentCardList = ({ keyword }) => {
  const [contents, setContents] = useState([
    { id: 1, content: { title: "더글로리" } },
    { id: 2, content: { title: "하이하이" } },
    { id: 3, content: { title: "하이하이" } },
    { id: 4, content: { title: "하이하이" } },
    { id: 5, content: { title: "하이하이" } },
  ]);

  const ContentCards = React.memo(() => {
    return (
      <li className="slider__cards">
        {contents?.map(({ id, content }) => {
          return <ContentCard key={id} content={content} />;
        })}
      </li>
    );
  });

  return (
    <section className="slider">
      <h3>{keyword}</h3>
      <ContentCards />
    </section>
  );
};

export default ContentCardList;

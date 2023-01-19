import React, { useReducer, useState } from "react";
import { Banner, Header, ContentCardList, Footer, IconButton } from "components";

export default function Main() {
  const ContentCardLists = React.memo(() => {
    const keywords = ["지금 뜨는 콘텐츠!", "당신을 위한 컨텐츠!", "test 컨텐츠!"];
    return keywords.map((keyword) => <ContentCardList key={keyword} keyword={keyword} />);
  });

  return (
    <>
      <Header />
      <main>
        <Banner />
        <ContentCardLists />
      </main>
      <Footer />
    </>
  );
}

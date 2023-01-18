import React, { useState } from "react";
import { Banner, Header, ContentCardList, Footer } from "components";

export default function Main() {
  const makeContentCardLists = () => {
    const keywords = ["지금 뜨는 콘텐츠!"];
    return keywords.map((keyword) => <ContentCardList key={keyword} keyword={keyword} />);
  };

  return (
    <>
      <Header />
      <main>
        <Banner />
        {makeContentCardLists()}
      </main>
      <Footer />
    </>
  );
}

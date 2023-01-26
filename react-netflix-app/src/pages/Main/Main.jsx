import React, { useEffect, useState } from "react";
import { Banner, Header, ContentCardList, Footer } from "components";
import { ContentListsWrapper } from "./Main.style";

import api from "utils/API";

const ContentCardLists = ({ genres }) => {
  return (
    <ContentListsWrapper>
      {genres.map((genre) => (
        <ContentCardList key={genre.id} id={genre.id} genrename={genre.name} />
      ))}
    </ContentListsWrapper>
  );
};

export default function Main() {
  const [genres, setGenres] = useState([{ id: "", name: "" }]);
  useEffect(() => {
    getContentGenres();
  }, []);

  const getContentGenres = async () => {
    const res = await api.get(`/genre/movie/list`, { language: "ko-KR" });
    setGenres(res.genres.slice(0, 5));
  };

  return (
    <>
      <Header />
      <main>
        <Banner />
        <ContentCardLists genres={genres} />
      </main>
      <Footer />
    </>
  );
}

import React, { useEffect, useState } from "react";
import { Banner, ContentCardList, Footer } from "components";
import { ContentListsWrapper } from "./Main.style";

import api from "utils/API";

const ContentCardLists = ({ genres }) => {
  return (
    <ContentListsWrapper>
      {genres.map((genre) => (
        <ContentCardList key={genre.id} id={genre.id} genreName={genre.name} />
      ))}
    </ContentListsWrapper>
  );
};

export default function Main() {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    getContentGenres();
  }, []);

  const getContentGenres = async () => {
    const res = await api.get(`/genre/movie/list`, { language: "ko-KR" });
    setGenres(res.genres.slice(0, 5));
  };

  return (
    <main>
      <Banner />
      <ContentCardLists genres={genres} />
    </main>
  );
}

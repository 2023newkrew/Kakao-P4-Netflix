import React, { useEffect, useState } from "react";
import { Banner, SliderContentList } from "components";
import { ContentListsWrapper } from "./Main.style";

import api from "utils/API";

const ContentCardLists = ({ genres, contentsList }) => {
  return (
    <ContentListsWrapper>
      {contentsList.map((contents, index) => (
        <SliderContentList
          key={genres[index].id}
          contents={contents.results}
          title={genres[index].name}
        />
      ))}
    </ContentListsWrapper>
  );
};

export default function Main() {
  const [genres, setGenres] = useState([]);
  const [contentsList, setContentsList] = useState([]);

  useEffect(() => {
    getContentGenres();
  }, []);

  useEffect(() => {
    getContentsListByGenre();
  }, [genres]);

  const getContentGenres = async () => {
    const res = await api.get(`/genre/movie/list`);
    setGenres(res.genres);
  };
  const getContentsListByGenre = async () => {
    const promiseList = genres
      .slice(contentsList.length, contentsList.length + 5)
      .map((genre) => api.get(`/discover/movie`, { with_genres: genre.id }));
    const res = await Promise.all(promiseList);
    setContentsList([...contentsList, ...res]);
  };

  return (
    <main>
      <Banner />
      <ContentCardLists genres={genres} contentsList={contentsList} />
    </main>
  );
}

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GridContentList } from "components";
import api from "utils/API";

import { SearchContainer } from "./Search.style";

const Search = () => {
  const searchValue = new URLSearchParams(useLocation().search).get("q");
  const [contents, setContents] = useState([]);

  const searchContents = async () => {
    const res = await api.get(`/search/movie`, {
      query: searchValue,
    });
    setContents(res.results);
  };

  useEffect(() => {
    searchContents();
  }, [searchValue]);

  return (
    <SearchContainer>
      <GridContentList contents={contents} />
    </SearchContainer>
  );
};

export default Search;

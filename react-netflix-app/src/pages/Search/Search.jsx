import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useDebounce from "hooks/useDebounce";
import { ContentCardList } from "components";
import api from "utils/API";

import { SearchContainer } from "./Search.style";

const Search = () => {
  const searchValue = new URLSearchParams(useLocation().search).get("q");
  const navigate = useNavigate();
  const [contents, setContents] = useState([]);
  const debouncedSearchValue = useDebounce(searchValue, 1000);

  const searchContents = async () => {
    const res = await api.get(`/search/movie`, {
      query: debouncedSearchValue,
      language: "ko-KR",
    });
    setContents(res.results);
  };

  useEffect(() => {
    if (debouncedSearchValue) {
      navigate("/", { replace: true });
      navigate({ pathname: "/search", search: `?q=${searchValue}` });
      searchContents();
    }
  }, [debouncedSearchValue]);

  return (
    <SearchContainer>
      <ContentCardList contents={contents} type="grid" />
    </SearchContainer>
  );
};

export default Search;

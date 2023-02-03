import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useDebounce from "hooks/useDebounce";
import { GridContentList } from "components";
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
      <GridContentList contents={contents} type="grid" />
    </SearchContainer>
  );
};

export default Search;

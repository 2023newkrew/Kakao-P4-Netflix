import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useDebounce from "hooks/useDebounce";

import api from "utils/API";

const Search = () => {
  const searchValue = new URLSearchParams(useLocation().search).get("q");
  const debouncedSearchValue = useDebounce(searchValue, 1000);

  const searchContents = async () => {
    const res = await api.get(`/search/movie`, { query: debouncedSearchValue, language: "ko-KR" });
    console.log(debouncedSearchValue, res);
  };

  useEffect(() => {
    if (debouncedSearchValue) {
      searchContents();
    }
  }, [debouncedSearchValue]);
  return <div>Search</div>;
};

export default Search;

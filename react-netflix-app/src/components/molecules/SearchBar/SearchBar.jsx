import React, { useEffect, useState } from "react";
import useDebounce from "hooks/useDebounce";
import api from "utils/API";

import { SearchBarContainer, SearchBarIcon, SearchBarInput } from "./SearchBar.style";
import searchImg from "assets/search.svg";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue, 1000);

  const searchContents = async () => {
    const res = await api.get(`/search/movie`, { query: debouncedSearchValue, language: "ko-KR" });
    console.log(res);
  };

  useEffect(() => {
    if (debouncedSearchValue) {
      searchContents();
    }
  }, [debouncedSearchValue]);

  return (
    <SearchBarContainer>
      <SearchBarIcon src={searchImg}></SearchBarIcon>
      <SearchBarInput
        placeholder="제목"
        onChange={({ target }) => {
          setSearchValue(target.value);
        }}
      ></SearchBarInput>
    </SearchBarContainer>
  );
};

export default SearchBar;

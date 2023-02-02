import React from "react";
import { useNavigate } from "react-router-dom";

import { SearchBarContainer, SearchBarIcon, SearchBarInput } from "./SearchBar.style";
import searchImg from "assets/search.svg";

const SearchBar = () => {
  const navigate = useNavigate();

  const handleOnChange = (searchValue) => {
    if (searchValue) {
      navigate({ pathname: "/search", search: `?q=${searchValue}` }, { replace: true });
    } else {
      navigate("/");
    }
  };

  return (
    <SearchBarContainer>
      <SearchBarIcon src={searchImg}></SearchBarIcon>
      <SearchBarInput
        placeholder="제목"
        onChange={({ target }) => {
          handleOnChange(target.value);
        }}
      ></SearchBarInput>
    </SearchBarContainer>
  );
};

export default SearchBar;

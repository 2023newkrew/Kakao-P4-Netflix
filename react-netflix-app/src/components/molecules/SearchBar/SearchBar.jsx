import React, { useState, useEffect } from "react";
import useDebounce from "hooks/useDebounce";
import { useNavigate, useLocation } from "react-router-dom";

import { SearchBarContainer, SearchBarIcon, SearchBarInput } from "./SearchBar.style";
import searchImg from "assets/search.svg";

const SearchBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchValue, setSearchValue] = useState();
  const debouncedSearchValue = useDebounce(searchValue, 1000);

  const prevPage = location?.state?.prevPage;

  useEffect(() => {
    if (debouncedSearchValue) {
      navigate(
        {
          pathname: "/search",
          search: `?q=${debouncedSearchValue}`,
        },
        {
          replace: prevPage === "search",
          state: {
            prevPage: "search",
          },
        }
      );
    }
  }, [debouncedSearchValue]);

  return (
    <SearchBarContainer>
      <SearchBarIcon src={searchImg}></SearchBarIcon>
      <SearchBarInput
        placeholder="제목"
        onChange={({ target }) => {
          setSearchValue(target.value);
          if (prevPage === "search" && !target.value) {
            navigate("/");
          }
        }}
      ></SearchBarInput>
    </SearchBarContainer>
  );
};

export default SearchBar;

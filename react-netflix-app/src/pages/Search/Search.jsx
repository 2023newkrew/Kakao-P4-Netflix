import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useDebounce from "hooks/useDebounce";
import { ContentCard } from "components";
import api from "utils/API";

import { SearchContainer, ContentListWrapper } from "./Search.style";

// ContentCardList 컴포넌트 정리하기
const ContentCards = ({ contents }) => {
  return (
    <ContentListWrapper>
      {contents.map((content) => (
        <ContentCard key={content.id} content={content} />
      ))}
    </ContentListWrapper>
  );
};

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
      <ContentCards contents={contents} />
    </SearchContainer>
  );
};

export default Search;

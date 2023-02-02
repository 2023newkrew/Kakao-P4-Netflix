import { SearchContainer, InputContainer, InputImage } from "@styles/header/Search.style";

import qs from "qs";

import magnifyGlass from "@assets/magnifying-glass.svg";
import { useLocation, useNavigate } from "react-router-dom";
import debounce from "@utils/debounce";
import { useEffect, useRef, useState } from "react";

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const searchElement = useRef();

  useEffect(() => {
    if (location.pathname === "/search") {
      // * URL의 query 데이터를 받아오는 로직
      const query = qs.parse(location.search, {
        ignoreQueryPrefix: true, //* 이 설정을 통해 문자열 맨 앞의 ? 를 생략합니다
      });
      searchElement.current.value = query.q;
      searchElement.current.focus();
    }
  }, []);

  const onChange = debounce((e) => {
    navigate(`/search?q=${e.target.value}`);
  }, 200);

  return (
    <SearchContainer>
      <InputContainer>
        <InputImage>
          <img src={magnifyGlass} alt="입력 돋보기 이미지" />
        </InputImage>
        <input ref={searchElement} placeholder="제목, 사람, 장르" onChange={onChange} />
      </InputContainer>
    </SearchContainer>
  );
};

export default Search;

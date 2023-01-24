import { SearchContainer, InputContainer, InputImage } from "@styles/header/Search.style";

import magnifyGlass from "@assets/magnifying-glass.svg";

const Search = () => {
  return (
    <SearchContainer>
      <InputContainer>
        <InputImage>
          <img src={magnifyGlass} alt="입력 돋보기 이미지" />
        </InputImage>
        <input placeholder="제목, 사람, 장르" />
      </InputContainer>
    </SearchContainer>
  );
};

export default Search;

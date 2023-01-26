import { SearchContainer, InputContainer, InputImage } from "@styles/header/Search.style";

import magnifyGlass from "@assets/magnifying-glass.svg";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();

  // TODO : debounce 적용하기
  const onChange = (e) => {
    navigate(`/search?q=${e.target.value}`);
  };

  return (
    <SearchContainer>
      <InputContainer>
        <InputImage>
          <img src={magnifyGlass} alt="입력 돋보기 이미지" />
        </InputImage>
        <input placeholder="제목, 사람, 장르" onChange={onChange} />
      </InputContainer>
    </SearchContainer>
  );
};

export default Search;

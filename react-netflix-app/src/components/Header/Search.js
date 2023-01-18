import "@scss/header/search.scss";

import magnifyGlass from "@assets/magnifying-glass.svg";

const Search = () => {
  return (
    <div className="search_container">
      <div className="input_container">
        <div className="input_image">
          <img src={magnifyGlass} alt="입력 돋보기 이미지" />
        </div>
        <input placeholder="제목, 사람, 장르" />
      </div>
    </div>
  );
};

export default Search;

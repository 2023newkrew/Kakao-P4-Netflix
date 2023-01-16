import "@scss/header/search.scss";

import magnifyGlass from "@assets/magnifying-glass.svg";

const Search = () => {
  return (
    <div className="search_container">
      <div className="input_container">
        <div className="input_image">
          <img src={magnifyGlass} alt="입력 돋보기 이미지" />
        </div>
        <input />
      </div>
    </div>
  );
};

export default Search;

import { ImPlay2 } from "react-icons/im";
import { BsChatRight, BsPlusCircle } from "react-icons/bs";
import { GoThumbsup } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";

import "@scss/cardSlide/movieCardInfo.scss";

import genre from "../../json/genre.json";

const MovieCardInfo = ({ movie }) => {
  function movieCategory() {
    const movieCategoryIdList = movie.genre_ids;
    const movieCategory = movieCategoryIdList.map((value) => <li>{genre[value]}</li>);
    return movieCategory;
  }

  return (
    <div className="movieCardInfo_container">
      <div className="movieCardInfo_button">
        <ImPlay2 size={40} />
        <BsPlusCircle size={40} />
        <GoThumbsup size={40} />
        <div style={{ width: "70%", display: "flex", justifyContent: "flex-end" }}>
          <IoIosArrowDropdownCircle size={40} />
        </div>
      </div>
      <div className="movieCardInfo_title">{movie.title}</div>
      <div className="movieCardInfo_voteAverage">{movie.vote_average}</div>
      <ul className="movieCardInfo_category">{movieCategory()}</ul>
    </div>
  );
};

export default MovieCardInfo;

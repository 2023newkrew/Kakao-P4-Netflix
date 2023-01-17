import React from "react";
import TheMovieDBAPI from "../../../../../util/TheMovieDBAPI";
import { MainColumnItemCotainer, MainColumnItemImg } from "./styles";

export default function MainColumnItem(props) {
  return (
    <MainColumnItemCotainer>
      <MainColumnItemImg src={TheMovieDBAPI.imgBaseURL + props.imgSrc} />
    </MainColumnItemCotainer>
  );
}

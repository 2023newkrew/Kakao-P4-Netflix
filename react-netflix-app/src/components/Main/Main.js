import React from "react";
import TheMovieDBAPI from "../../util/TheMovieDBAPI.js";
import SmallModal from "../SmallModal/SmallModal.js";
import MainPost from "./MainPost/MainPost.js";
import MainRow from "./MainRow/MainRow.js";

export default function Main() {
  return (
    <div className="main">
      <MainPost />
      <MainRow fetchMethod={TheMovieDBAPI.getTopRatedMovieList} itemCount={4} />
      <MainRow fetchMethod={TheMovieDBAPI.getNowPlayingMovieList} itemCount={5} />
      <MainRow fetchMethod={TheMovieDBAPI.getPopularMovieList} itemCount={6} />
    </div>
  );
}

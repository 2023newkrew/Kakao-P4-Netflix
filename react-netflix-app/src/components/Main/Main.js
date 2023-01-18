import React from "react";
import TheMovieDBAPI from "../../util/TheMovieDBAPI.js";
import MainPost from "./MainPost/MainPost.js";
import MainRow from "./MainRow/MainRow.js";

export default function Main() {
  return (
    <div className="main">
      <MainPost />
      <MainRow fetchMethod={TheMovieDBAPI.getTopRatedMovieList} />
      <MainRow fetchMethod={TheMovieDBAPI.getNowPlayingMovieList} />
      <MainRow fetchMethod={TheMovieDBAPI.getPopularMovieList} />
    </div>
  );
}

import React from "react";
import TheMovieDBAPI from "../../util/class/TheMovieDBAPI.js";
import MainPost from "./MainPost/MainPost.js";
import MainRow from "./MainRow/MainRow.js";
import { Category } from "./styles.js";

export default function Main() {
  return (
    <div className="main">
      <MainPost />
      <Category>Top Rated</Category>
      <MainRow fetchMethod={TheMovieDBAPI.getTopRatedMovieList} itemCount={4} />

      <Category>Popular</Category>
      <MainRow fetchMethod={TheMovieDBAPI.getPopularMovieList} itemCount={6} />

      <Category>Now Playing</Category>
      <MainRow fetchMethod={TheMovieDBAPI.getNowPlayingMovieList} itemCount={5} />
    </div>
  );
}

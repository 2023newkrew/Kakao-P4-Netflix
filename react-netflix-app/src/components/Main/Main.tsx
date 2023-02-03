import React from "react";
import TheMovieDBAPI from "../../util/class/TheMovieDBAPI";
import CarouselRow from "../common/carousel/CarouselRow/CarouselRow";
import MainPost from "./MainPost/MainPost";
import { Category } from "./styles";

export default function Main() {
  return (
    <div className="main">
      <MainPost />
      <Category>Top Rated</Category>
      <CarouselRow fetchMethod={TheMovieDBAPI.getTopRatedMovieList} itemCount={4} />

      <Category>Popular</Category>
      <CarouselRow fetchMethod={TheMovieDBAPI.getPopularMovieList} itemCount={6} />

      <Category>Now Playing</Category>
      <CarouselRow fetchMethod={TheMovieDBAPI.getNowPlayingMovieList} itemCount={5} />
    </div>
  );
}

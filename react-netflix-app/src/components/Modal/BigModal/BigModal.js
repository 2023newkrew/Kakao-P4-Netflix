import React, { useState } from "react";
import { useEffect } from "react";
import TheMovieDBAPI from "../../../util/class/TheMovieDBAPI";
import { BigModalBackground, BigModalContainer, BigModalVideo, BigModalInfo } from "./style";

export default function BigModal({ movieId, toggle, title, voteAverage, overViewInfo }) {
  const [videoKey, setVideoKey] = useState("");
  useEffect(() => {
    const fetchMovieInfo = async (movieId) => {
      const movieVideoInfo = await TheMovieDBAPI.getMovieVideoInfo(movieId);
      const videoKey = movieVideoInfo.key;
      setVideoKey(videoKey);
    };
    fetchMovieInfo(movieId);

    const handleClick = (event) => {
      if (event.target.closest("#bigModalContainer")) return;
      toggle();
    };
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);
  return (
    <BigModalBackground>
      <BigModalContainer id="bigModalContainer">
        <BigModalVideo
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          src={`https://www.youtube.com/embed/${videoKey}`}
          frameBorder="0"
          allowfullscreen
        />
        <BigModalInfo>
          <h1> {title}</h1>
          <br />
          평점 : {voteAverage}
          <br />
          <br />
          {overViewInfo}
        </BigModalInfo>
      </BigModalContainer>
    </BigModalBackground>
  );
}

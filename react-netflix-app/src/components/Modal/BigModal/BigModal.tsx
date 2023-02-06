import React, { useState } from "react";
import { useEffect } from "react";
import TheMovieDBAPI from "../../../util/class/TheMovieDBAPI";
import useClickOuter from "../../../util/hooks/useClickOuter";
import { BigModalBackground, BigModalContainer, BigModalVideo, BigModalInfo } from "./style";

export default function BigModal({
  movieId,
  toggle,
  title,
  voteAverage,
  overViewInfo,
}: {
  movieId: number;
  toggle: () => void;
  title: string;
  voteAverage: number;
  overViewInfo: string;
}) {
  const [videoKey, setVideoKey] = useState("");
  useClickOuter("#bigModalContainer", toggle);
  useEffect(() => {
    const fetchMovieInfo = async (movieId: number) => {
      const movieVideoInfo = await TheMovieDBAPI.getMovieVideoInfo(movieId);
      const fetchedVideoKey = movieVideoInfo?.key ?? "";
      setVideoKey(fetchedVideoKey);
    };
    fetchMovieInfo(movieId);
  }, [movieId]);
  return (
    <BigModalBackground>
      <BigModalContainer id="bigModalContainer">
        <BigModalVideo
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          src={`https://www.youtube.com/embed/${videoKey}`}
          frameBorder="0"
          allowFullScreen={true}
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

import React from "react";
import CarouselItem from "../CarouselItem/CarouselItem";
import { CarouselColumnContainer } from "./styles";

export default function CarouselColumn({ imgList, setImageContainerSize, separateCount }) {
  return (
    <CarouselColumnContainer>
      {imgList.map((item, idx) => (
        <CarouselItem
          key={item.id}
          title={item.title}
          movieId={item.id}
          imgSrc={item.backdrop_path}
          setImageContainerSize={setImageContainerSize && idx === 0 ? setImageContainerSize : null}
          separateCount={separateCount}
          voteAverage={item.vote_average}
          voteCount={item.vote_count}
          releaseDate={item.release_date}
          index={idx}
          overViewInfo={item.overview}
        />
      ))}
    </CarouselColumnContainer>
  );
}

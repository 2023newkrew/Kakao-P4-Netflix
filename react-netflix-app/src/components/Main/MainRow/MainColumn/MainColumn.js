import React from "react";
import MainColumnItem from "./MainColumnItem/MainColumnItem";
import { MainColumnContainer } from "./styles";

export default function MainColumn({ imgList, setImageContainerSize, separateCount }) {
  return (
    <MainColumnContainer>
      {imgList.map((item, idx) => (
        <MainColumnItem
          key={item.id}
          imgSrc={item.backdrop_path}
          setImageContainerSize={setImageContainerSize && idx === 0 ? setImageContainerSize : null}
          separateCount={separateCount}
          voteAverage={item.vote_average}
          voteCount={item.vote_count}
          releaseDate={item.release_date}
          index={idx}
        />
      ))}
    </MainColumnContainer>
  );
}

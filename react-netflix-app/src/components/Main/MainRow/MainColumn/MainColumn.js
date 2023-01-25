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
          vote_average={item.vote_average}
          vote_count={item.vote_count}
          release_date={item.release_date}
        />
      ))}
    </MainColumnContainer>
  );
}

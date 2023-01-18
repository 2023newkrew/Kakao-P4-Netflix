import React from "react";
import MainColumnItem from "./MainColumnItem/MainColumnItem";
import { MainColumnContainer } from "./styles";

export default function MainColumn(props) {
  const imgList = props.imgList;

  return (
    <MainColumnContainer>
      {imgList.map((item, idx) => (
        <MainColumnItem
          key={item.id}
          imgSrc={item.backdrop_path}
          setImageContainerSize={props.setImageContainerSize && idx === 0 ? props.setImageContainerSize : null}
        />
      ))}
    </MainColumnContainer>
  );
}

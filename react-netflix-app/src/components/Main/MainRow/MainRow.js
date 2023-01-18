import React, { useEffect, useRef, useState } from "react";
import Util from "../../../util/Util";
import MainColumn from "./MainColumn/MainColumn";
import { MainRowContainer, MainRowSlider, MainRowLeftArrow, MainRowRightArrow } from "./styles";

const handleClickArrow = (setColIndex, dir) => {
  const value = dir === "left" ? -1 : 1;
  setColIndex((prev) => prev + value);
};

export default function MainRow({ fetchMethod }) {
  const [separatedList, setSeparatedList] = useState([]);
  const [colIndex, setColIndex] = useState(0);
  const [imageContainerSize, setImageContainerSize] = useState(null);
  const SEPARATE_COUNT = 6;

  useEffect(() => {
    /* 데이터 fetch */
    const fetchTopRatedMovie = async () => {
      const topRatedMovieList = await fetchMethod();
      setSeparatedList(Util.separateList(topRatedMovieList, SEPARATE_COUNT));
    };
    fetchTopRatedMovie();
  }, []);

  return (
    <MainRowContainer>
      <MainRowSlider translateValue={imageContainerSize !== null ? colIndex * imageContainerSize * SEPARATE_COUNT : 0}>
        {/* 생성 및 삭제와 같은 변화가 없을 것이라고 예상하기에 key에 인덱스 값으로 부여 */}
        {separatedList !== null
          ? separatedList.map((subList, idx) => (
              <MainColumn
                key={idx}
                imgList={subList}
                setImageContainerSize={idx === 0 ? setImageContainerSize : null}
              />
            ))
          : null}
      </MainRowSlider>
      <MainRowLeftArrow isLeftEnd={colIndex === 0} onClick={() => handleClickArrow(setColIndex, "left")} />
      <MainRowRightArrow
        isRightEnd={colIndex === separatedList.length - 1}
        onClick={() => handleClickArrow(setColIndex, "right")}
      />
    </MainRowContainer>
  );
}

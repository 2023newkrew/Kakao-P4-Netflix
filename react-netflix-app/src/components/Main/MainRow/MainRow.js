import React, { useEffect, useRef, useState } from "react";
import Util from "../../../util/Util";
import MainColumn from "./MainColumn/MainColumn";
import { MainRowContainer, MainRowSlider, MainRowLeftArrow, MainRowRightArrow } from "./styles";

const handleClickArrow = (setColIndex, dir) => {
  const value = dir === "left" ? -1 : 1;

  setColIndex((prev) => prev + value);
};

export default function MainRow({ fetchMethod, itemCount }) {
  const [imageContainerSize, setImageContainerSize] = useState(null);
  const [separatedList, setSeparatedList] = useState([]);
  const [colIndex, setColIndex] = useState(0);
  const mainRowSlider = useRef(null);
  const SEPARATE_COUNT = itemCount;
  const translateValue =
    imageContainerSize === null
      ? 0
      : Util.clamp(
          colIndex * imageContainerSize * SEPARATE_COUNT,
          0,
          imageContainerSize * SEPARATE_COUNT * (separatedList.length - 2) +
            separatedList[separatedList.length - 1].length * imageContainerSize
        );

  useEffect(() => {
    /* 데이터 fetch */
    const fetchTopRatedMovie = async () => {
      const topRatedMovieList = await fetchMethod();
      setSeparatedList(Util.separateList(topRatedMovieList, SEPARATE_COUNT));
    };
    fetchTopRatedMovie();

    /* 이벤트 등록 */
    const handleResize = (event) => {
      mainRowSlider.current.style.transition = "transform 1s";
    };
    const handleResizeStart = () => {
      mainRowSlider.current.style.transition = "none";
    };
    const debouncedResizeHandler = Util.makeDebounceHandler(handleResize, 600, handleResizeStart, null);
    window.addEventListener("resize", debouncedResizeHandler);
  }, []);

  return (
    <MainRowContainer>
      <MainRowSlider translateValue={translateValue !== null ? translateValue : 0} ref={mainRowSlider}>
        {/* 생성 및 삭제와 같은 변화가 없을 것이라고 예상하기에 key에 인덱스 값으로 부여 */}
        {separatedList !== null
          ? separatedList.map((subList, idx) => (
              <MainColumn
                key={idx}
                imgList={subList}
                setImageContainerSize={idx === 0 ? setImageContainerSize : null}
                separateCount={SEPARATE_COUNT}
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

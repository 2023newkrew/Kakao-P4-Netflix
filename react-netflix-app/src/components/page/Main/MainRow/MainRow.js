import React, { useEffect, useRef, useState } from "react";
import Util from "../../../../util/class/Util";
import useAddEventListener from "../../../../util/hooks/useAddEventListener";
import MainColumn from "./MainColumn/MainColumn";
import { MainRowContainer, MainRowSlider, MainRowLeftArrow, MainRowRightArrow } from "./styles";

const DELAY = 500;
const handleClickArrow = (setColIndex, dir) => {
  const value = dir === "left" ? -1 : 1;

  setColIndex((prev) => prev + value);
};

const getMainRowDebouncedHandler = (mainRowSliderRef) => {
  const handleResize = (event) => {
    mainRowSliderRef.current.style.transition = "transform 1s";
  };
  const handleResizeStart = () => {
    mainRowSliderRef.current.style.transition = "none";
  };
  return Util.makeDebounceHandler(handleResize, DELAY, handleResizeStart, null);
};

export default function MainRow({ fetchMethod, itemCount }) {
  const [imageContainerSize, setImageContainerSize] = useState(null);
  const [separatedList, setSeparatedList] = useState([]);
  const [colIndex, setColIndex] = useState(0);
  const mainRowSliderRef = useRef(null);
  const windowRef = useRef(window);
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

  useAddEventListener(windowRef, "resize", getMainRowDebouncedHandler(mainRowSliderRef));
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
      <MainRowSlider translateValue={translateValue !== null ? translateValue : 0} ref={mainRowSliderRef}>
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

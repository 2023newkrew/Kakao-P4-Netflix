import React, { useEffect, useRef, useState } from "react";
import { MovieInfo } from "../../../../util/class/TheMovieDBAPIType";
import Util from "../../../../util/class/Util";
import useAddEventListener from "../../../../util/hooks/useAddEventListener";
import useDebounce from "../../../../util/hooks/useDebounce";
import CarouselColumn from "../CarouselColumn/CarouselColumn";
import { CarouselRowContainer, CarouselRowSlider, CarouselRowLeftArrow, CarouselRowRightArrow } from "./styles";

const DELAY = 500;
const handleClickArrow = (setColIndex: React.Dispatch<React.SetStateAction<number>>, dir: "left" | "right") => {
  const value = dir === "left" ? -1 : 1;

  setColIndex((prev) => prev + value);
};

export default function CarouselRow({
  fetchMethod,
  itemCount,
}: {
  fetchMethod: () => Promise<MovieInfo[]>;
  itemCount: number;
}) {
  const [imageContainerSize, setImageContainerSize] = useState<number | null>(null);
  const [separatedList, setSeparatedList] = useState<MovieInfo[][]>([]);
  const [colIndex, setColIndex] = useState(0);
  const mainRowSliderRef = useRef<HTMLDivElement>(null);
  const windowRef = useRef(window);
  const SEPARATE_COUNT = itemCount;
  const mainRowDebouncedHandler = useDebounce(
    () => {
      (mainRowSliderRef.current as HTMLElement).style.transition = "transform 1s";
    },
    DELAY,
    () => {
      (mainRowSliderRef.current as HTMLElement).style.transition = "none";
    },
    null
  );
  const translateValue =
    imageContainerSize === null
      ? 0
      : Util.clamp(
          colIndex * imageContainerSize * SEPARATE_COUNT,
          0,
          imageContainerSize * SEPARATE_COUNT * (separatedList.length - 2) +
            separatedList[separatedList.length - 1].length * imageContainerSize
        );

  useAddEventListener(windowRef, "resize", mainRowDebouncedHandler);

  useEffect(() => {
    /* 데이터 fetch */
    const fetchTopRatedMovie = async () => {
      const topRatedMovieList = await fetchMethod();
      setSeparatedList(Util.separateList(topRatedMovieList, SEPARATE_COUNT));
    };
    fetchTopRatedMovie();
  }, [SEPARATE_COUNT, fetchMethod]);

  return (
    <CarouselRowContainer>
      <CarouselRowSlider translateValue={translateValue !== null ? translateValue : 0} ref={mainRowSliderRef}>
        {/* 생성 및 삭제와 같은 변화가 없을 것이라고 예상하기에 key에 인덱스 값으로 부여 */}
        {separatedList !== null
          ? separatedList.map((subList, idx) => (
              <CarouselColumn
                key={idx}
                imgList={subList}
                setImageContainerSize={idx === 0 ? setImageContainerSize : null}
                separateCount={SEPARATE_COUNT}
              />
            ))
          : null}
      </CarouselRowSlider>
      <CarouselRowLeftArrow isLeftEnd={colIndex === 0} onClick={() => handleClickArrow(setColIndex, "left")} />
      <CarouselRowRightArrow
        isRightEnd={colIndex === separatedList.length - 1}
        onClick={() => handleClickArrow(setColIndex, "right")}
      />
    </CarouselRowContainer>
  );
}

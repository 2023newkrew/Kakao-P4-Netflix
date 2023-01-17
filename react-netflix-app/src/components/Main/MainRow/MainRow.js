import React, { useEffect, useState } from "react";
import TheMovieDBAPI from "../../../util/TheMovieDBAPI";
import MainColumn from "./MainColumn/MainColumn";
import { MainRowContainer } from "./styles";
const separateList = (arr, size) => {
  const newList = [];
  for (let i = 0; i < arr.length; i += size) {
    newList.push(arr.slice(i, i + size));
  }
  return newList;
};

export default function MainRow() {
  const [imgList, setimgList] = useState([]);
  useEffect(() => {
    const fetchTopRatedMovie = async () => {
      const topRatedMovieList = await TheMovieDBAPI.getTopRatedMovieList();
      setimgList(topRatedMovieList);
    };

    fetchTopRatedMovie();
  }, []);
  return (
    <MainRowContainer>
      {imgList.length > 0
        ? separateList(imgList, 4).map((subList, idx) => <MainColumn key={idx} imgList={subList} />)
        : null}
    </MainRowContainer>
  );
}

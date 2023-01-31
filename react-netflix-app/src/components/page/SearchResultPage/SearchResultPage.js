import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TheMovieDBAPI from "../../../util/class/TheMovieDBAPI";
import Util from "../../../util/class/Util";
import MainColumn from "../MainPage/MainRow/MainColumn/MainColumn";
import { Container, ColumContainer } from "./styles";

const SEPARATE_COUNT = 5;

export default function SearchResultPage() {
  const [separatedMovieList, setSeparatedMovieList] = useState([]);

  const { keyword } = useParams();
  useEffect(() => {
    const fetchData = async (keyword) => {
      const movieList = await TheMovieDBAPI.getMoviesByKeyword(keyword);
      setSeparatedMovieList(Util.separateList(movieList, SEPARATE_COUNT));
    };
    fetchData(keyword);
  }, [keyword]);

  return (
    <Container>
      {separatedMovieList.map((subList, idx) => (
        <ColumContainer key={idx}>
          <MainColumn imgList={subList} separateCount={SEPARATE_COUNT} />
        </ColumContainer>
      ))}
    </Container>
  );
}

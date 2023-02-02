import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Util from "../../util/class/Util.js";
import TheMovieDBAPI from "../../util/class/TheMovieDBAPI";
import CarouselColumn from "../common/carousel/CarouselColumn/CarouselColumn";
import { Container, ColumContainer } from "./styles";

const SEPARATE_COUNT = 5;

export default function SearchResult() {
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
          <CarouselColumn imgList={subList} separateCount={SEPARATE_COUNT} />
        </ColumContainer>
      ))}
    </Container>
  );
}

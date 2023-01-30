import React, { useEffect, useState } from "react";
import TheMovieDBAPI from "../../../util/class/TheMovieDBAPI";
import Util from "../../../util/class/Util";
import MainColumn from "../Main/MainRow/MainColumn/MainColumn";
import MainColumnItem from "../Main/MainRow/MainColumn/MainColumnItem/MainColumnItem";
import { Container, ColumContainer } from "./styles";

const SEPARATE_COUNT = 5;

export default function SearchResultPage() {
  const [separatedMovieList, setSeparatedMovieList] = useState([]);
  const [imageContainerSize, setImageContainerSize] = useState(null);
  useEffect(() => {
    const fetchData = async (keyword) => {
      const movieList = await TheMovieDBAPI.getMoviesByKeyword(keyword);
      setSeparatedMovieList(Util.separateList(movieList, SEPARATE_COUNT));
    };
    fetchData("spider");
  }, []);

  return (
    <Container>
      {separatedMovieList.map((subList, idx) => (
        <ColumContainer key={idx}>
          <MainColumn
            imgList={subList}
            setImageContainerSize={idx === 0 ? setImageContainerSize : null}
            separateCount={SEPARATE_COUNT}
          />
        </ColumContainer>
      ))}
    </Container>
  );
}

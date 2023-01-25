import { useLocation, useNavigate } from "react-router-dom";
import qs from "qs";

import styled from "styled-components";

import MovieList from "@components/movieList/MovieList";
import Footer from "@components/footer/Footer";
import { API } from "../utils/axios";
import React, { useEffect, useState } from "react";

const SearchPage = ({ setSearchInput }) => {
  const [searchMovieList, setSearchMovieList] = useState();

  const navigate = useNavigate();
  const location = useLocation();
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });
  const search = query.q;

  useEffect(() => {
    fetchAndSetSearchMovieList();

    async function fetchAndSetSearchMovieList() {
      const fetchSearchMovieList = await API.fetchSearchMovieList(search);
      setSearchMovieList(fetchSearchMovieList);
    }
  }, [search]);

  if (search === "") return navigate("/");

  if (searchMovieList === undefined) return <div></div>;

  return (
    <>
      <MovieList searchMovieList={searchMovieList} />
      <Footer />
    </>
  );
};

export default SearchPage;

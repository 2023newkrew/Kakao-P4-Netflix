import { useLocation, useNavigate } from "react-router-dom";
import qs from "qs";

import MovieList from "@components/movieList/MovieList";
import Footer from "@components/footer/Footer";

import React from "react";

const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });
  const search = query.q;

  if (search === "") return navigate("/");

  return (
    <>
      <MovieList search={search} />
      <Footer />
    </>
  );
};

export default SearchPage;

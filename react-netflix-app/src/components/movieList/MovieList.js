import MovieCard from "./MovieCard";

import { MovieListContainer } from "@styles/movieList/movieList.style";

import Loading from "@components/loading/Loading";
import useFetch from "@hooks/useFetch";
import { useNavigate } from "react-router-dom";

import { API } from "@utils/axios";

const MovieList = ({ search }) => {
  const { data, loading } = useFetch(API.fetchSearchMovieList(search), search);

  if (loading) return <Loading />;

  const searchMovieList = data;

  const movieList = searchMovieList.map((movie) => <MovieCard key={movie.id} movie={movie} />);
  return <MovieListContainer>{movieList}</MovieListContainer>;
};

export default MovieList;

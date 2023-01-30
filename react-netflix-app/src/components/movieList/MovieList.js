import MovieCard from "./MovieCard";

import { MovieListContainer } from "@styles/movieList/movieList.style";

import useFetch from "@hooks/useFetch";

import { API } from "@utils/axios";

const MovieList = ({ search }) => {
  const { data: searchMovieList, loading, LoadingComponent } = useFetch(API.fetchSearchMovieList(search), search);

  if (loading) return <LoadingComponent />;

  const movieList = searchMovieList.map((movie) => <MovieCard key={movie.id} movie={movie} />);
  return <MovieListContainer>{movieList}</MovieListContainer>;
};

export default MovieList;

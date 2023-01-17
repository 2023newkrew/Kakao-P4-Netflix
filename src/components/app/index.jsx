import React from 'react';
import MovieList from '../movie-list';

function App() {
  const movies = Array.from({ length: 10 }, (_, index) => ({ id: `${index}` }));

  return (
    <>
      오늘의 영화
      <MovieList initialMovies={movies} />
      내일의 영화
      <MovieList initialMovies={movies} />
    </>
  );
}

export default App;

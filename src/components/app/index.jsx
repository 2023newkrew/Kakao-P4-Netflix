/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navigator from '../navigator';
import Banner from '../banner';
import Footer from '../footer';
import MovieList from '../movie-list';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=c14724951e1843e630f68881a3192a57&language=ko`
      );

      console.log(res);

      setMovies(res.data.results);
    })();
  }, []);

  if (movies.length === 0) return null;

  return (
    <>
      <Navigator />
      <Banner movie={movies[0]} />
      넷플릭스 인기 콘텐츠
      <MovieList movies={movies} />
      지금 뜨는 콘텐츠
      <MovieList movies={movies} />
      <Footer />
    </>
  );
}

export default App;

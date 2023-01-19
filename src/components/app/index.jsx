import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Navigator from '../navigator';
import Banner from '../banner';
import Footer from '../footer';
import MovieListContainer from '../movie-list-container';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

function App() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=c14724951e1843e630f68881a3192a57&language=ko`
      );

      setMovies(res.data.results);
    })();
  }, []);

  if (!movies) return null;

  return (
    <>
      <Navigator />
      <Banner movie={movies[0]} />
      <StyledDiv>
        <MovieListContainer title="넷플릭스 인기 콘텐츠" movies={movies} />
        <MovieListContainer title="지금 뜨는 콘텐츠" movies={movies} />
        <MovieListContainer title="새로 올라온 콘텐츠" movies={movies} />
      </StyledDiv>
      <Footer />
    </>
  );
}

export default App;

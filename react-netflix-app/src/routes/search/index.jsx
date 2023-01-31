import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import MovieGrid from '@components/grid/MovieGrid';
import useAxios from '@hooks/useAxios';

const SearchLayout = styled.main`
  margin-top: 72px;
  padding: 4vw;
`;

export default function Search() {
  const [searchParams] = useSearchParams();
  const [, data] = useAxios('get', '/search/movie', {
    params: {
      query: searchParams.get('q'),
    },
  });
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!data) return;

    const { results } = data;
    setSearchResults(results);
  }, [data]);

  return (
    <SearchLayout>
      <MovieGrid movies={searchResults} />
    </SearchLayout>
  );
}

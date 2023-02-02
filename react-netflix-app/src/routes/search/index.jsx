import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import MovieGrid from '@components/grid/MovieGrid';
import useAxios from '@hooks/useAxios';

const SearchLayout = styled.main`
  margin-top: 72px;
  padding: 4vw;
`;

const NoResult = styled.div`
  text-align: center;
`;

export default function Search() {
  const [searchParams] = useSearchParams();
  const [isLoading, data] = useAxios('get', '/search/movie', {
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

  if (isLoading) return null;

  return (
    <SearchLayout>
      {searchResults.length ? (
        <MovieGrid movies={searchResults} />
      ) : (
        <NoResult>
          입력하신 검색어 &quot;{searchParams.get('q')}&quot;(와)과 일치하는
          결과가 없습니다.
        </NoResult>
      )}
    </SearchLayout>
  );
}

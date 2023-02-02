import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import PageLayout from '@layouts/PageLayout';
import MovieGrid from '@components/grid/MovieGrid';
import useAxios from '@hooks/useAxios';
import useInfiniteScroll from '@hooks/useInfiniteScroll';

const SearchPage = styled.main`
  margin-top: 72px;
  padding: 4vw;
`;

const Message = styled.div`
  padding: 4vw;
  text-align: center;
`;

export default function Search() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q');
  const [page, setPage] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, data] = useAxios('get', '/search/movie', {
    params: {
      query: searchQuery,
      page,
    },
  });
  const [isIntersecting, setObserveTarget] = useInfiniteScroll();

  useEffect(() => {
    setPage(1);
    setSearchResults([]);
  }, [searchQuery]);

  useEffect(() => {
    if (!data) return;

    const { results } = data;
    setSearchResults((prev) => [...prev, ...results]);
  }, [data]);

  useEffect(() => {
    if (!isIntersecting) return;

    setPage((prev) => prev + 1);
  }, [isIntersecting]);

  if (!isLoading && !searchResults.length) {
    return (
      <PageLayout>
        <SearchPage>
          <Message>
            입력하신 검색어 &quot;{searchParams.get('q')}&quot;(와)과 일치하는
            결과가 없습니다.
          </Message>
        </SearchPage>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <SearchPage>
        <MovieGrid movies={searchResults} />
        <Message ref={setObserveTarget}>
          {isLoading && '로딩중'}
          {!isLoading && '검색 결과가 더이상 없습니다.'}
        </Message>
      </SearchPage>
    </PageLayout>
  );
}

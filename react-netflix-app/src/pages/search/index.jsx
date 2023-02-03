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
  const [currentPage, setCurrentPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, data] = useAxios('get', '/search/movie', {
    params: {
      query: searchQuery,
      page: currentPage,
    },
  });
  const [isIntersecting, setObservingTarget] = useInfiniteScroll();

  useEffect(() => {
    setCurrentPage(1);
    setIsLastPage(false);
    setSearchResults([]);
  }, [searchQuery]);

  useEffect(() => {
    if (!data) return;

    const { page, total_pages, results } = data;
    if (page === total_pages) setIsLastPage(true);
    setSearchResults((prev) => [
      ...prev,
      ...results.filter((result) => !prev.find(({ id }) => id === result.id)),
    ]);
  }, [data]);

  useEffect(() => {
    if (!isIntersecting || isLastPage) return;

    setCurrentPage((prev) => prev + 1);
  }, [isIntersecting, isLastPage]);

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
        <Message ref={setObservingTarget}>
          {isLoading && '로딩중'}
          {isLastPage && '검색 결과가 더이상 없습니다.'}
        </Message>
      </SearchPage>
    </PageLayout>
  );
}

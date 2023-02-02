import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import SearchGrid from '@/components/search/search-grid';
import useDebounce from '@/hooks/use-debounce';
import { getSearchMovieList } from '@/apis/movie';
import TotalResults from '@/components/search/total-results';
import CommonLayout from '@/layout/common-layout';
import { SEARCH_URL_PARAM } from '@/constants/param';

const Search = () => {
  const [totalResults, setTotalResults] = useState(null);
  const [movieList, setMovieList] = useState([]);
  const location = useLocation();

  useDebounce(() => {
    const searchQuery = new URLSearchParams(location.search).get(SEARCH_URL_PARAM);

    if (!searchQuery) return;

    const getSearchResult = async () => {
      const data = await getSearchMovieList(searchQuery);

      const { total_results: resultLength, results } = data;

      setMovieList(results);
      setTotalResults(resultLength);
    };

    getSearchResult();
  }, [location.search]);

  return (
    <CommonLayout>
      <TotalResults totalResults={totalResults} />
      <SearchGrid movieList={movieList} />
    </CommonLayout>
  );
};

export default Search;

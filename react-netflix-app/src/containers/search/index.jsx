import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import SearchGrid from '@/components/search/search-grid';
import useDebounce from '@/hooks/use-debounce';
import { getSearchMovieList } from '@/apis/movie';
import TotalResults from '@/components/search/total-results';

const Search = () => {
  const [totalResults, setTotalResults] = useState(null);
  const [movieList, setMovieList] = useState([]);
  const location = useLocation();

  useDebounce(() => {
    const searchQuery = new URLSearchParams(location.search).get('q');

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
    <>
      <TotalResults totalResults={totalResults} />
      <SearchGrid movieList={movieList} />
    </>
  );
};

export default Search;

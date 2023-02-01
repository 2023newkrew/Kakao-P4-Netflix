import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import SearchGrid from '@/components/search/search-grid';
import useDebounce from '@/hooks/use-debounce';
import { getSearchMovieList } from '@/apis/movie';

const Search = () => {
  const [movieList, setMovieList] = useState([]);
  const location = useLocation();

  useDebounce(() => {
    const searchQuery = new URLSearchParams(location.search).get('q');

    if (!searchQuery) return;

    const getSearchResult = async () => {
      const data = await getSearchMovieList(searchQuery);
      setMovieList(data);
    };

    getSearchResult();
  }, [location.search]);

  return <SearchGrid movieList={movieList} />;
};

export default Search;

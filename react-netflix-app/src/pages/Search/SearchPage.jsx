import {
  KeywordsTitle,
  PageContainer,
  RelatedKeywordsWrapper,
  SearchLayout,
  SearchResultContents,
  SearchResultHeader,
} from '@pages/Search/SearchPage.style';

import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import RelatedKeywords from '@pages/Search/RelatedKeywords';
import MovieCard from '@components/Movie/MovieCard';

import { searchMovies, searchKeywords } from '@api/search';

const useSearchMovies = (keyword) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!keyword) {
      return;
    }
    (async function () {
      try {
        const {
          data: { results },
        } = await searchMovies(keyword);

        setData(results);
      } catch (error) {
        console.error('Search Movie', error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [keyword]);

  return { data, isLoading, error };
};
const useSearchKeywords = (keyword) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!keyword) {
      return;
    }
    (async function () {
      try {
        const {
          data: { results },
        } = await searchKeywords(keyword);

        setData(results);
      } catch (error) {
        console.error('Search Movie', error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [keyword]);

  return { data, isLoading, error };
};

const SearchPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchKeyword = searchParams.get('q');
  const { data: movies, isLoading } = useSearchMovies(searchKeyword);
  const { data: keywords, isLoading: keywordsLoading } = useSearchKeywords(searchKeyword);

  useEffect(() => {
    if (!searchKeyword) {
      navigate('/');
    }
  }, [searchKeyword]);
  return (
    <PageContainer>
      <SearchLayout>
        <SearchResultHeader>
          <RelatedKeywordsWrapper>
            <KeywordsTitle>다음과 관련된 콘텐츠:</KeywordsTitle>
            {!keywordsLoading && <RelatedKeywords keywords={keywords} />}
          </RelatedKeywordsWrapper>
        </SearchResultHeader>
        <SearchResultContents>
          {!isLoading && movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </SearchResultContents>
      </SearchLayout>
    </PageContainer>
  );
};
export default SearchPage;

import httpClient from '@api/http';

const fetcher = (path, params) => httpClient.get(path, { params });

export const searchMovies = (query) => fetcher('/search/movie', { query });
export const searchKeywords = (query) => fetcher('/search/keyword', { query });

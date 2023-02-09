import httpClient from '@api/http';

const fetcher = (path: string, params?: { [key: string]: any }) => httpClient.get(path, { params });

export const searchMovies = (query: string) => fetcher('/search/movie', { query });
export const searchKeywords = (query: string) => fetcher('/search/keyword', { query });

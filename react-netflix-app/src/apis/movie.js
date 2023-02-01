/* eslint-disable import/prefer-default-export */
import Client from '@utils/client';

export const getNowPlayingMovieList = async (page = 1) => {
  const response = await Client.get('/movie/now_playing', {
    params: {
      page,
    },
  });
  return response.data.results;
};

export const getPopularMovieList = async (page = 1) => {
  const response = await Client.get('/movie/popular', {
    params: {
      page,
    },
  });
  return response.data.results;
};

export const getTopratedMovieList = async (page = 1) => {
  const response = await Client.get('/movie/top_rated', {
    params: {
      page,
    },
  });
  return response.data.results;
};

export const getUpcomingMovieList = async (page = 1) => {
  const response = await Client.get('/movie/upcoming', {
    params: {
      page,
    },
  });
  return response.data.results;
};

export const getMovieDetail = async (id) => {
  const response = await Client.get(`/movie/${id}`);
  return response.data;
};

export const getSearchMovieList = async (title, page = 1) => {
  const response = await Client.get('/search/movie', {
    params: {
      query: title,
      include_adult: false,
      page,
    },
  });
  return response.data;
};

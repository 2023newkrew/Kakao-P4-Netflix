/* eslint-disable import/prefer-default-export */
import Client from '@utils/client';

export const getNowPlaying = async (page = 1) => {
  const response = await Client.get('/movie/now_playing', {
    params: {
      page,
    },
  });
  return response.data;
};

export const getDetail = async (id) => {
  const response = await Client.get(`/movie/${id}`);
  return response.data;
};

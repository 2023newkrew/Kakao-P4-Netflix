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

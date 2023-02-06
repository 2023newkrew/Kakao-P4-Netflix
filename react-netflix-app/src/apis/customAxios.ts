import axios, { AxiosInstance } from 'axios';

const API_PREFIX = {
  language: 'ko-KR',
  api_key: process.env.REACT_APP_ACCESS_TOKEN
};

export const customAxios: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  params: API_PREFIX
});
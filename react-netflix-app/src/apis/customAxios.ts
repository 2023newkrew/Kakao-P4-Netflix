import axios, { AxiosInstance } from 'axios';
export const customAxios: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'api_key': process.env.REACT_APP_ACCESS_TOKEN,
  }
});
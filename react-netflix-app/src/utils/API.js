import axios from "axios";
import { imageResolutionType } from "utils/constants";

const server = "https://api.themoviedb.org/3";

const setCommonParams = (param) => {
  const key = process.env.REACT_APP_THEMOVIEDB_API_KEY;
  return { ...param, api_key: key };
};

const api = {
  getImageSeverURL(resolutionType = "original") {
    return `https://image.tmdb.org/t/p/${imageResolutionType[resolutionType]}`;
  },
  async get(endpoint, param) {
    const params = setCommonParams(param);
    try {
      const response = await axios.get(`${server}${endpoint}`, { params });
      return response.data;
    } catch (error) {
      // 나중에 에러 화면 처리
      console.error(`ERROR: ${error.response.data.message}`);
      return false;
    }
  },
};

export default api;

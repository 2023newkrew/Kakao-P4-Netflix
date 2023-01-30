// 따로 발급받지 않으셔도 되도록 api key를 첨부하였습니다. 나중엔 외부(서버 등)에서 받아오도록 할 예정
import axios from "axios";
const API_KEY = "8bd60bd49af6beef70d5962aa29d98ec";

export default class TheMovieDBAPI {
  static API_BASE_URL = "https://api.themoviedb.org/3/movie";
  static IMG_BASE_URL = "https://image.tmdb.org/t/p/original";
  static LANGUAGE = "ko";
  static async getPopularMovieList() {
    try {
      const json = await axios.get(
        `${TheMovieDBAPI.API_BASE_URL}/popular?api_key=${API_KEY}&language=${TheMovieDBAPI.LANGUAGE}&page=1`
      );
      return json.data.results;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  static async getTopRatedMovieList() {
    try {
      const json = await axios.get(
        `${TheMovieDBAPI.API_BASE_URL}/top_rated?api_key=${API_KEY}&language=${TheMovieDBAPI.LANGUAGE}&page=1`
      );
      return json.data.results;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  static async getNowPlayingMovieList() {
    try {
      const json = await axios.get(
        `${TheMovieDBAPI.API_BASE_URL}/now_playing?api_key=${API_KEY}&language=${TheMovieDBAPI.LANGUAGE}&page=1`
      );
      return json.data.results;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  static async getMovieVideoInfo(movieId) {
    try {
      const json = await axios.get(
        `${TheMovieDBAPI.API_BASE_URL}/${movieId}/videos?api_key=${API_KEY}&language=${TheMovieDBAPI.LANGUAGE}`
      );
      return json.data.results[0];
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

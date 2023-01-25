// 따로 발급받지 않으셔도 되도록 api key를 첨부하였습니다. 나중엔 외부(서버 등)에서 받아오도록 할 예정
import axios from "axios";
const API_KEY = "8bd60bd49af6beef70d5962aa29d98ec";

export default class TheMovieDBAPI {
  static apiBaseURL = "https://api.themoviedb.org/3/movie";
  static imgBaseURL = "https://image.tmdb.org/t/p/original";
  static async getPopularMovieList() {
    const json = await axios.get(`${TheMovieDBAPI.apiBaseURL}/popular?api_key=${API_KEY}&language=ko&page=1`);
    return json.data.results;
  }
  static async getTopRatedMovieList() {
    const json = await axios.get(`${TheMovieDBAPI.apiBaseURL}/top_rated?api_key=${API_KEY}&language=ko&page=1`);
    return json.data.results;
  }
  static async getNowPlayingMovieList() {
    const json = await axios.get(`${TheMovieDBAPI.apiBaseURL}/now_playing?api_key=${API_KEY}&language=ko&page=1`);
    return json.data.results;
  }
}

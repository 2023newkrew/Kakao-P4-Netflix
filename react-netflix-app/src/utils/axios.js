import axios, { AxiosError } from "axios";
const genre = require("../json/genre.json");

class Axios {
  constructor() {
    this.API_URL = process.env.REACT_APP_API_URL;
    this.API_KEY = process.env.REACT_APP_API_KEY;
  }

  async fetchMovieVideoURL(movieId) {
    try {
      const response = await axios.get(`${this.API_URL}/3/movie/${movieId}/videos?api_key=${this.API_KEY}`);
      const movieVideoURLs = response.data.results;

      // TODO : Trailer가 없을 경우에 Teaser 영상 -> 없을 경우 이미지로 대체해야 함
      const movieVideoURL = movieVideoURLs.find((element) => element.type === "Trailer" || element.type === "Teaser");

      return movieVideoURL === undefined ? null : movieVideoURL.key;
    } catch (error) {
      throw new AxiosError("이 영화의 데이터를 불러올 수 없습니다.", error.code);
    }
  }

  async fetchBannerMovie() {
    try {
      const response = await axios.get(`${this.API_URL}/3/movie/top_rated?api_key=${this.API_KEY}&language=ko`);

      const popularMovieList = response.data.results;
      const random = Math.floor(Math.random() * popularMovieList.length);
      return popularMovieList[random];
    } catch (error) {
      throw new AxiosError("배너 영화에 대한 데이터를 불러올 수 없습니다.", error.code);
    }
  }

  async fetchGenreMovie(category) {
    try {
      const genreId = genre[category];
      const response = await axios.get(`${this.API_URL}/3/discover/movie?api_key=${this.API_KEY}&language=ko&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}&with_watch_monetization_types=flatrate`);
      const fetchGenreMovieList = response.data.results;
      return fetchGenreMovieList;
    } catch (error) {
      throw new AxiosError("이 장르에 대한 영화 리스트를 불러올 수 없습니다.", error.code);
    }
  }

  async fetchDetailMovieInfo(movieId) {
    try {
      const response = await axios.get(`${this.API_URL}/3/movie/${movieId}?api_key=${this.API_KEY}&language=ko`);
      return response.data;
    } catch (error) {
      throw new AxiosError("이 영화에 대한 세부정보를 불러올 수 없습니다.", error.code);
    }
  }

  async fetchSearchMovieList(search) {
    try {
      const response = await axios.get(`${this.API_URL}/3/search/movie?api_key=${this.API_KEY}&language=ko&query=${search}&page=1&include_adult=false`);
      const searchMovieList = response.data.results;

      const sortedSearchMovieList = searchMovieList.sort((a, b) => {
        return b.popularity - a.popularity;
      });

      console.log(sortedSearchMovieList);

      return sortedSearchMovieList;
    } catch (error) {
      throw new AxiosError("이 검색 결과에 대한 영화 리스트를 불러올 수 없습니다.", error.code);
    }
  }
}

export const API = new Axios();

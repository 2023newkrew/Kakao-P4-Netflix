import axios from "axios";
const genre = require("../json/genre.json");

class Axios {
  constructor() {
    this.API_URL = process.env.REACT_APP_API_URL;
    this.API_KEY = process.env.REACT_APP_API_KEY;
  }

  async fetchBannerMovieVideoURL(bannerMovie) {
    const response = await axios.get(`${this.API_URL}/3/movie/${bannerMovie.id}/videos?api_key=${this.API_KEY}`);
    const bannerMovieTrailerURLs = response.data.results;

    const bannerMovieTrailerURL = bannerMovieTrailerURLs.find((element) => element.type === "Trailer");

    return bannerMovieTrailerURL.key;
  }

  async fetchBannerMovie() {
    const response = await axios.get(`${this.API_URL}/3/movie/top_rated?api_key=${this.API_KEY}&language=ko`);
    const popularMovieList = response.data.results;
    const random = Math.floor(Math.random() * popularMovieList.length);
    return popularMovieList[random];
  }

  async fetchGenreMovie(category) {
    const genreId = genre[category];
    const response = await axios.get(`${this.API_URL}/3/discover/movie?api_key=${this.API_KEY}&language=ko&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}&with_watch_monetization_types=flatrate`);
    const fetchGenreMovieList = response.data.results;
    return fetchGenreMovieList;
  }
}

export const API = new Axios();

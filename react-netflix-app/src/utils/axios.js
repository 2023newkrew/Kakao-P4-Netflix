import axios from "axios";

class Axios {
  constructor() {
    this.API_URL = process.env.REACT_APP_API_URL;
    this.API_KEY = process.env.REACT_APP_API_KEY;
  }

  async fetchBannerMovieVideoURL(bannerMovie) {
    const response = await axios.get(`${this.API_URL}/3/movie/${bannerMovie.id}/videos?api_key=${this.API_KEY}`);
    const bannerMovieTrailerURLs = response.data.results;

    for (let index = 0; index < bannerMovieTrailerURLs.length; index++) {
      if (bannerMovieTrailerURLs[index].type === "Trailer") {
        return bannerMovieTrailerURLs[index].key;
      }
    }
  }

  async fetchBannerMovie() {
    const response = await axios.get(`${this.API_URL}/3/movie/top_rated?api_key=${this.API_KEY}&language=ko`);
    const popularMovieList = response.data.results;
    const random = Math.floor(Math.random() * popularMovieList.length);
    return popularMovieList[random];
  }
}

export const API = new Axios();

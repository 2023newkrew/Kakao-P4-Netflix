type Genre = {
  id: number;
  name: string;
};
type ProductionCompany = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};
type SpokenLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};
type ReleaseType = 'Released' | string;
type MovieCollection = {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
};

export type BasicMovieInfo = {
  adult: boolean;
  backdrop_path: string | null;
  id: number;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type DetailMovieInfo = {
  belongs_to_collection: MovieCollection | null;
  budget: number;
  genres: Genre[];
  homepage: string | null;
  imdb_id: string;
  production_companies: ProductionCompany[];
  revenue: number;
  runtime: number | null;
  spoken_languages: SpokenLanguage[];
  status: ReleaseType;
  tagline: string | null;
};
export type Movie = { genre_ids: number[] } & BasicMovieInfo;
export type MovieDetail = DetailMovieInfo & BasicMovieInfo;

export type MovieVideoType = 'Trailer' | 'Teaser';
export type MovieVideo = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: MovieVideoType;
  published_at: string;
  official: true;
  id: string;
};

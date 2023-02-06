export type MovieType = {
  adult: boolean,
  backdrop_path: string,
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  content: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}
export type MovieSortType = 'popular' | 'upcoming';
export type MovieDetailType = {
  id: number,
  isYoutube: boolean,
  path: string,
}
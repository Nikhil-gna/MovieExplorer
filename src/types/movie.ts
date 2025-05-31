export interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  Plot?: string;
  Rating?: string;
  Genres?: string[];
  [key: string]: any;
}

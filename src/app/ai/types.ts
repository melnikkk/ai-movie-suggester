import { ReactNode } from 'react';

interface Rating {
  Source: string;
  Value: string;
}

export interface MovieData {
  Title: string;
  imdbID: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Array<Rating>;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: 'True' | 'False';
}

export interface Movie {
  title: string;
  imdbID: string;
  posterUrl: string | null;
  plot: string | null;
  year: string | null;
  genre: Array<string> | null;
}

export interface Conversation {
  display: ReactNode;
  role: string;
}

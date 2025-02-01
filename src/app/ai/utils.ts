import { Movie, MovieData } from '@/app/ai/types';
import { NOT_APPLICABLE } from '@/app/ai/constants';

export const parseMovieData = ({
  Title,
  imdbID,
  Plot,
  Poster,
  Genre,
  Year,
}: MovieData): Movie => ({
  imdbID,
  title: Title,
  plot: Plot !== NOT_APPLICABLE ? Plot : null,
  posterUrl: Poster !== NOT_APPLICABLE ? Poster : null,
  genres: Genre !== NOT_APPLICABLE ? Genre.split(', ') : null,
  year: Year !== NOT_APPLICABLE ? Year : null,
});

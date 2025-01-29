import { MovieData } from '@/app/ai/types';

export const getMovieData = async (movieTitle: string): Promise<MovieData> => {
  const preparedTitle = movieTitle.replace(/\s+/g, '+').trim();
  const url = `https://www.omdbapi.com/?t=${preparedTitle}&apiKey=${process.env.OMDB_API_KEY}`;

  const data = await fetch(url, {
    method: 'GET',
    headers: { accept: 'application/json' },
  });

  return await data.json();
};

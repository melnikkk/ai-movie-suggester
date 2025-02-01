import { CoreMessage } from 'ai';
import { Conversation } from '@/app/ai/types';
import { getMutableAIState, streamUI } from 'ai/rsc';
import { google } from '@ai-sdk/google';
import { z } from 'zod';
import { getMovieData } from '@/app/ai/service';
import { parseMovieData } from '@/app/ai/utils';
import { MovieCard } from '@/app/_components/MovieCard';

export async function continueConversation(message: CoreMessage): Promise<Conversation> {
  'use server';

  const history = getMutableAIState();

  const result = await streamUI({
    model: google('gemini-1.5-flash-latest'),
    messages: [
      {
        role: 'system',
        content:
          'Answer concisely and only on the question about suggesting the movies. Answer with 6 items maximum.',
      },
      ...history.get(),
      message,
    ],
    text: ({ content, done }) => {
      if (done) {
        history.done([...history.get(), { role: 'assistant', content }]);
      }

      return content;
    },
    tools: {
      getRichMovies: {
        parameters: z.object({
          listOfMovieTitles: z
            .array(z.string())
            .length(6)
            .describe('A list of movie names'),
        }),
        description: 'Use this tool only when a user asks for UI.',
        generate: async ({ listOfMovieTitles }) => {
          return listOfMovieTitles.map(async (movieTitle) => {
            const movieData = await getMovieData(movieTitle);
            const movie = parseMovieData(movieData);

            return <MovieCard key={movie.imdbID} movie={movie} />;
          });
        },
      },
    },
  });

  return { display: result.value, role: 'assistant' };
}

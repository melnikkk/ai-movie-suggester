'use server';

import { CoreMessage } from 'ai';
import { createAI, getMutableAIState, streamUI } from 'ai/rsc';
// import { openai } from '@ai-sdk/openai';
import { google } from '@ai-sdk/google';
import { z } from 'zod';
import { List, ListItem } from '@mui/material';

async function continueConversation(message: CoreMessage) {
  'use server';

  const history = getMutableAIState();

  const result = await streamUI({
    model: google('gemini-1.5-flash-latest'),
    messages: [
      { role: 'system', content: 'Speak concisely. Answer with 5 items maximum.' },
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
          listOfMovieNames: z
            .array(z.string())
            .length(5)
            .describe('A list of movie names'),
        }),
        description: 'Use this tool only when a user asks for UI.',
        generate: async ({ listOfMovieNames }) => {
          return listOfMovieNames.map((movie) => <ListItem>{movie}</ListItem>);
        },
      },
    },
  });

  return { display: result.value, role: 'assistant' };
}

export const AIContextProvider = createAI({
  actions: {
    continueConversation,
  },
  initialAIState: [],
  initialUIState: [],
});

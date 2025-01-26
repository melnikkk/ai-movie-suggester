'use server';

import { CoreMessage } from 'ai';
import { createAI, streamUI } from 'ai/rsc';
// import { openai } from '@ai-sdk/openai';
import { google } from '@ai-sdk/google';

async function continueConversation(message: CoreMessage) {
  'use server';
  debugger;
  console.log(message);
  const result = await streamUI({
    model: google('gemini-1.5-flash-latest'),
    messages: [message],
    text: ({ content }) => content,
  });
  console.log('===Result===', { display: result.value, role: 'assistant' });
  debugger;
  return { display: result.value, role: 'assistant' };
}

export const AIContextProvider = createAI({
  actions: {
    continueConversation,
  },
  initialAIState: [],
  initialUIState: [],
});

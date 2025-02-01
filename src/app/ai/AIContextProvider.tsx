'use server';

import { createAI } from 'ai/rsc';
import { continueConversation } from '@/app/ai/actions';

export const AIContextProvider = createAI({
  actions: {
    continueConversation,
  },
  initialAIState: [],
  initialUIState: [],
});

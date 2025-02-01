'use client';

import { useActions, useUIState } from 'ai/rsc';
import { Conversation } from '@/app/ai/types';

export const useAISearch = () => {
  const { continueConversation } = useActions();
  const [, setConversation] = useUIState();

  return {
    search: async (userPrompt: FormDataEntryValue) => {
      const result = await continueConversation({
        role: 'user',
        content: userPrompt,
      });

      setConversation((prevState: Array<Conversation>) => [...prevState, result]);
    },
  };
};

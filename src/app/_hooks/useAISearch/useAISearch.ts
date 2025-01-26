'use client';

import { useActions, useUIState } from 'ai/rsc';

export const useAISearch = () => {
  const { continueConversation } = useActions();
  const [, setConversation] = useUIState();

  return {
    search: async (userPrompt: string) => {
      const result = await continueConversation({
        role: 'user',
        content: userPrompt,
      });
      console.log(result);
      setConversation((prevState: any) => [...prevState, result]);
    },
  };
};

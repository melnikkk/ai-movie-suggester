'use client';

import { FC, useActionState } from 'react';
import { Stack } from '@mui/material';
import { SuggesterPromptInput } from '@/app/_components/Search';
import { SubmitButton } from '@/app/_components/SubmitButton';
import { useAISearch } from '@/app/_hooks/useAISearch/useAISearch';

export const SearchForm: FC = () => {
  const { search } = useAISearch();

  const onFormSubmit = async (_currentState: unknown, formData: FormData) => {
    const userPrompt = formData.get('userPrompt');

    if (userPrompt) {
      await search(userPrompt);
    }
  };

  const [_state, formAction] = useActionState(onFormSubmit, null);

  return (
    <form action={formAction}>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <SuggesterPromptInput />

        <SubmitButton>Search</SubmitButton>
      </Stack>
    </form>
  );
};

import { FC } from 'react';
import { TextField } from '@mui/material';

export const SuggesterPromptInput: FC = () => {
  return (
    <TextField
      name="userPrompt"
      size="small"
      label="Write your prompt here"
      type="search"
      variant="outlined"
      sx={{
        width: '100%',
      }}
    />
  );
};

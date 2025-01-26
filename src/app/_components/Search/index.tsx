import { TextField } from '@mui/material';

export const SuggesterPromptInput = () => {
  return (
    <TextField
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

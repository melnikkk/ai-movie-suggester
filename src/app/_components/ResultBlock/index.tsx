'use client';

import { FC } from 'react';
import { Grid2 as Grid } from '@mui/material';
import { useUIState } from 'ai/rsc';
import { Conversation } from '@/app/ai/types';

export const ResultBlock: FC = () => {
  const [conversation] = useUIState();

  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {conversation.map((c: Conversation) => c.display)}
    </Grid>
  );
};

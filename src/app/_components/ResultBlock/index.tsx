'use client';

import { FC } from 'react';
import { Typography } from '@mui/material';
import { useUIState } from 'ai/rsc';

export const ResultBlock: FC = () => {
  const [conversation] = useUIState();

  return <Typography component="p">{conversation.map((c) => c.display)}</Typography>;
};

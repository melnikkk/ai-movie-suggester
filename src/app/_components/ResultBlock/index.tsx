'use client';

import { FC } from 'react';
import { List } from '@mui/material';
import { useUIState } from 'ai/rsc';

export const ResultBlock: FC = () => {
  const [conversation] = useUIState();

  return <List>{conversation.map((c) => c.display)}</List>;
};

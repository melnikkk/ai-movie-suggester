'use client';

import { FC, ReactNode } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from '@mui/material';

interface Props {
  children: ReactNode;
}

export const SubmitButton: FC<Props> = ({ children }) => {
  const { pending } = useFormStatus();

  return (
    <Button
      loading={pending}
      disabled={pending}
      type="submit"
      variant="contained"
      sx={{ height: '39px' }}
    >
      {children}
    </Button>
  );
};

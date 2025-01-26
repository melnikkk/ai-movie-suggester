'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          height: '100%',
        },
        html: {
          height: '100%',
        },
      },
    },
  },
});

export default theme;

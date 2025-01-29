import { Container, Box, Typography, Paper } from '@mui/material';
import { SearchForm } from '@/app/_components/SearchForm';
import { ResultBlock } from '@/app/_components/ResultBlock';

export default function Home() {
  return (
    <Box component="main" sx={{ height: '100%' }}>
      <Container maxWidth="lg" sx={{ height: '100%', alignContent: 'center' }}>
        <Typography variant="h2" component="h1" sx={{ m: '12px' }}>
          AI Movie Suggester
        </Typography>
        <SearchForm />
        <ResultBlock />
      </Container>
    </Box>
  );
}

import { SuggesterPromptInput } from '@/app/_components/Search';
import { SubmitButton } from '@/app/_components/SubmitButton';
import { Stack, Container, Box, Typography } from '@mui/material';

export default function Home() {
  return (
    <Box component="main" sx={{ height: '100%' }}>
      <Container maxWidth="lg" sx={{ height: '100%', alignContent: 'center' }}>
        <Typography variant="h2" component="h1" sx={{ mb: '12px' }}>
          AI Movie Suggester
        </Typography>
        <form>
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
      </Container>
    </Box>
  );
}

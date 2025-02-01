'use client';

import { FC } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid2 as Grid,
  Chip,
  Stack,
  CardActions,
} from '@mui/material';
import { Movie } from '@/app/ai/types';
import { MoviePoster } from '@/app/_components/MoviePoster';

interface Props {
  movie: Movie;
}

export const MovieCard: FC<Props> = ({ movie: { title, posterUrl, plot, genres } }) => {
  return (
    <Grid size={{ xs: 2, sm: 4, md: 4 }}>
      <Card variant="elevation" sx={{ height: 650 }}>
        <MoviePoster posterUrl={posterUrl} title={title} />
        <CardContent>
          <Typography gutterBottom component="h5" variant="h5">
            {title}
          </Typography>

          {plot ? (
            <Typography
              sx={{ maxHeight: 140, overflow: 'scroll' }}
              component="p"
              gutterBottom
            >
              {plot}
            </Typography>
          ) : null}
        </CardContent>
        <CardActions disableSpacing>
          {genres?.length ? (
            <Stack direction="row" spacing={1}>
              {genres.map((genre, i) => (
                <Chip key={i} label={genre} />
              ))}
            </Stack>
          ) : null}
        </CardActions>
      </Card>
    </Grid>
  );
};

import { Card, CardContent, CardMedia, Typography, Grid2 as Grid } from '@mui/material';
import { FC } from 'react';
import { Movie } from '@/app/ai/types';

interface Props {
  movie: Movie;
}

export const MovieCard: FC<Props> = ({ movie: { title, posterUrl, plot } }) => {
  return (
    <Grid size={{ xs: 2, sm: 4, md: 4 }}>
      <Card variant="elevation">
        {posterUrl ? (
          <CardMedia component="img" alt={title} image={posterUrl} height="400" />
        ) : null}
        <CardContent>
          <Typography gutterBottom component="h5" variant="h5">
            {title}
          </Typography>
          <Typography component="p">{plot}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

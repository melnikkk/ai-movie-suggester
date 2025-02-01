import { CardMedia, Stack } from '@mui/material';
import { FC, useState } from 'react';
import { ErrorOutline } from '@mui/icons-material';

interface Props {
  title: string;
  posterUrl: string | null;
}

export const MoviePoster: FC<Props> = ({ posterUrl, title }) => {
  const [isLoadingImageError, setIsLoadingImageError] = useState(false);

  const handleImageLoadingError = () => {
    setIsLoadingImageError(true);
  };

  return !isLoadingImageError && posterUrl ? (
    <CardMedia
      component="img"
      alt={title}
      image={posterUrl}
      height="400"
      onError={handleImageLoadingError}
    />
  ) : (
    <Stack
      sx={{
        height: 400,
        width: '100%',
        justifyContent: 'center',
      }}
    >
      <ErrorOutline sx={{ fontSize: 80, alignSelf: 'center' }} />
    </Stack>
  );
};

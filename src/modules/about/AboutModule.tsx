import React from 'react';
import { Box, Typography } from '@mui/material';
import { PageContainer } from 'src/components/appLayout/PageContainer';

export default function AboutModule(): React.ReactElement {
  console.log('AboutModule Rendered');

  return (
    <PageContainer>
      <Box m={6}>
        <Box m={3}>
          <Typography variant="h2" align="center">
            AboutModule Coming Soon...
          </Typography>
        </Box>
        <Typography variant="body1" align="center">
          Welcome to the most Efficient, Elegant and Easy to Excel production ready React template of 2021 that one can
          <del>ever</del> never find on the web.
        </Typography>
      </Box>
      <Typography variant="body2" align="center">
        This page is loaded lazily.
      </Typography>
    </PageContainer>
  );
}

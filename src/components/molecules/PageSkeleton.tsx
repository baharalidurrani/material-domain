import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { PageContainer } from 'src/components/appLayout/PageContainer';

export function PageSkeleton(): React.ReactElement {
  console.log('PageSkeleton Rendered');
  return (
    <PageContainer>
      <Skeleton animation="wave" variant="rounded" width="80%" height="10vh" />
      <Skeleton animation="wave" variant="rounded" width="50%" height="5vh" />
      <Skeleton animation="wave" variant="rounded" width="100%" />
      <Skeleton animation="wave" variant="rounded" width="100%" />
      <Skeleton animation="wave" variant="rounded" width="100%" />
      <Skeleton animation="wave" variant="rounded" width="100%" />
      <Skeleton animation="wave" variant="rounded" width="100%" />
      <Skeleton animation="wave" variant="rounded" width="100%" />
      <Skeleton animation="wave" variant="rounded" width="100%" />
      <Skeleton animation="wave" variant="rounded" width="100%" />
      <Skeleton animation="wave" variant="rounded" width="100%" height="20vh" />
    </PageContainer>
  );
}

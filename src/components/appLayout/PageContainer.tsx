import React from 'react';
import Grid from '@mui/material/Grid';
import { makeStyles } from 'tss-react/mui';
import { useToolbarHeight } from 'src/hooks/useToolbarHeight';

const useStyles = makeStyles<{ padding: number }>()((theme, { padding }) => ({
  main: {
    padding: theme.spacing(padding),
    // minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight ?? 48}px)`,
  },
}));

interface Props {
  children: React.ReactNode;
  padding?: number;
}
export function PageContainer({ children, padding = 3 }: Props): React.ReactElement {
  console.log('PageContainer Rendered');
  const { classes } = useStyles({ padding });

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-around"
      alignItems="center"
      className={classes.main}
      style={{ minHeight: `calc(100vh - ${useToolbarHeight()}px)` }}
    >
      {children}
    </Grid>
  );
}

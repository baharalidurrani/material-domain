import React from 'react';
import { Toolbar } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { Header } from './Header';
import { SideNav } from './SideNav';

const useStyles = makeStyles()(() => ({
  root: { display: 'flex' },
  content: { flexGrow: 1 },
}));

interface Props {
  children: React.ReactNode;
}

export function AppLayout(props: Props) {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <SideNav />
      <main className={classes.content}>
        <Toolbar />
        {props.children}
      </main>
    </div>
  );
}

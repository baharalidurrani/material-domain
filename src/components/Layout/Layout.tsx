import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Header } from "./Header";
import { SideNav } from "./SideNav";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

interface Props {
  children: React.ReactNode;
}

export function Layout(props: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <SideNav />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}

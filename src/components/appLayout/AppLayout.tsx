import React from "react";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "tss-react/mui";
import { Header } from "./Header";
import { SideNav } from "./SideNav";

const useStyles = makeStyles()((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

interface Props {
  children: React.ReactNode;
}

export function AppLayout(props: Props) {
  const { classes } = useStyles();

  // necessary for content to be below app bar
  const { toolbar } = useTheme().mixins;

  return (
    <div className={classes.root}>
      <Header />
      <SideNav />
      <main className={classes.content}>
        <div style={toolbar} />
        {props.children}
      </main>
    </div>
  );
}

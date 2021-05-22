import React from "react";
import { useHistory } from "react-router";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";
import { createStyles, makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import MenuIcon from "@material-ui/icons/Menu";
import { useAppDispatch } from "src/app-redux/hooks";
import { themeTypeAction, toggleMobileDrawerAction } from "src/app-redux/settings/settingsSlice";
import { DRAWER_WIDTH } from "./SideNav";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      flexGrow: 1,
      [theme.breakpoints.up("md")]: {
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        marginLeft: DRAWER_WIDTH,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    title: {
      flexGrow: 1,
      textAlign: "center",
    },
  })
);

export function Header() {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const trigger = useScrollTrigger();

  const isDarkTheme = useTheme().palette.type === "dark";
  const toggleTheme = () => {
    dispatch(themeTypeAction(isDarkTheme ? "light" : "dark"));
  };

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => dispatch(toggleMobileDrawerAction())}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title}>
            Bahar Ali (Dürrani)
          </Typography>
          <IconButton color="inherit" onClick={toggleTheme}>
            {isDarkTheme ? <BrightnessHighIcon /> : <Brightness4Icon />}
          </IconButton>
          <IconButton
            color="inherit"
            onClick={() => {
              localStorage.removeItem("TOKEN");
              history.push("/auth/login");
            }}
          >
            <LockOpenIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Slide>
  );
}

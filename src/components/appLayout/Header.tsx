import React from "react";
import { Link } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Slide from "@mui/material/Slide";
import { Theme, useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
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
      textDecoration: "none",
      color: "unset",
    },
  })
);

export function Header() {
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const trigger = useScrollTrigger();

  const isDarkTheme = useTheme().palette.mode === "dark";
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
            size="large"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title} component={Link} to="/">
            Bahar Ali (Dürrani)
          </Typography>
          <IconButton
            href="https://github.com/baharalidurrani/material-domain"
            aria-label="Link to Bahar's GitHub"
            target="_blank"
            color="inherit"
            rel="noopener"
            size="large"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            color="inherit"
            onClick={toggleTheme}
            aria-label="Switch between Light and Dark Theme"
            size="large"
          >
            {isDarkTheme ? <BrightnessHighIcon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Slide>
  );
}

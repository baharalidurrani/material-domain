import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Grid } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Theme } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import { useAppDispatch } from "src/app-redux/hooks";
import { openDrawerAction } from "src/app-redux/settings/settingsSlice";
import { ROUTES } from "src/routes/routes";
import { DRAWER_WIDTH } from "./SideNav";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // necessary for content to be below app bar
    // toolbar: theme.mixins.toolbar,
    logo: {
      width: DRAWER_WIDTH - 50,
      height: DRAWER_WIDTH - 50,
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    drawerPaper: {
      width: DRAWER_WIDTH,
    },
    nested: {
      paddingLeft: theme.spacing(9),
    },
  })
);

export function DrawerContent() {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const location = useLocation();
  const [expand, setExpand] = useState<string>(location.pathname);
  useEffect(() => {
    setExpand(location.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Grid container direction="row" justifyContent="space-around" alignItems="center">
        <Tooltip
          placement="right"
          title="Tribute to GNU and Free Software Foundation"
          aria-label="gnu tribute"
        >
          <Link to="/">
            <img className={classes.logo} src="/favicon/android-chrome-512x512.png" alt="logo" />
          </Link>
        </Tooltip>
      </Grid>
      <List>
        {ROUTES.map((route, i) => (
          <div key={i}>
            <ListItem
              button
              component={NavLink}
              to={route.path}
              activeClassName="Mui-selected"
              onClick={() => {
                if (route.subRoutes?.length)
                  if (expand.includes(route.path)) setExpand("");
                  else setExpand(route.path);
                dispatch(openDrawerAction(false));
              }}
            >
              <ListItemIcon>
                <route.icon />
              </ListItemIcon>
              <ListItemText>
                <Typography>{route.title}</Typography>
              </ListItemText>
              {route.subRoutes?.length ? (
                expand?.includes(route.path) ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                )
              ) : (
                ""
              )}
            </ListItem>
            {route.subRoutes?.map((sub, j) => (
              <Collapse
                key={`${i},${j}`}
                in={expand?.includes(route.path)}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  <ListItem
                    button
                    className={classes.nested}
                    component={NavLink}
                    to={`${route.path}${sub.path}`}
                    activeClassName="Mui-selected"
                    onClick={() => {
                      dispatch(openDrawerAction(false));
                    }}
                  >
                    <ListItemText>
                      <Typography variant="caption">{sub.title}</Typography>
                    </ListItemText>
                  </ListItem>
                </List>
              </Collapse>
            ))}
          </div>
        ))}
      </List>
    </>
  );
}

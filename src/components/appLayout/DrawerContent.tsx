import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { useAppDispatch } from "src/app-redux/hooks";
import { openDrawerAction } from "src/app-redux/settings/settingsSlice";
import { ROUTES } from "src/routes/routes";
import { DRAWER_WIDTH } from "./SideNav";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // necessary for content to be below app bar
    // toolbar: theme.mixins.toolbar,
    logo: { width: DRAWER_WIDTH - 50, marginTop: theme.spacing(2), marginBottom: theme.spacing(2) },
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
  const [expand, setExpand] = useState<string | undefined>(location.pathname);
  useEffect(() => {
    setExpand(location.pathname);
  }, [location]);

  return (
    <>
      <Grid container direction="row" justify="space-around" alignItems="center">
        <Link to="/">
          <img className={classes.logo} src="/favicon/android-chrome-512x512.png" alt="logo" />
        </Link>
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
                // props.history.push(item.url);
                if (route.subRoutes?.length)
                  if (expand?.includes(route.path)) setExpand(undefined);
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

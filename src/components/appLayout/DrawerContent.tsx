import React, { useState } from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
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
    toolbar: theme.mixins.toolbar,
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
  const match = useRouteMatch();
  const dispatch = useAppDispatch();

  const [expand, setExpand] = useState<string | undefined>(match.path);

  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
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
                  if (expand === route.path) setExpand(undefined);
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
                expand === route.path ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                )
              ) : (
                ""
              )}
            </ListItem>
            {route.subRoutes?.map((sub, j) => (
              <Collapse key={`${i},${j}`} in={expand === route.path} timeout="auto" unmountOnExit>
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
      <Divider />
    </div>
  );
}
import React from "react";
import { NavLink } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useAppDispatch } from "../../app-redux/hooks";
import { openDrawerAction } from "../../app-redux/settings/settingsSlice";
import { ROUTES } from "../../routes/routes";
import { DRAWER_WIDTH } from "./SideNav";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: DRAWER_WIDTH,
    },
  })
);

export function DrawerContent() {
  const dispatch = useAppDispatch();
  const classes = useStyles();
  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {ROUTES.map((route, i) => (
          <ListItem
            button
            key={i}
            component={NavLink}
            to={route.path}
            activeClassName="Mui-selected"
            exact
            onClick={() => dispatch(openDrawerAction(false))}
          >
            <ListItemIcon>
              <route.icon />
            </ListItemIcon>
            <ListItemText primary={route.name} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
}

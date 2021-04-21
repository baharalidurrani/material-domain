import React from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { DRAWER_WIDTH } from "./SideNav";
import { ROUTES } from "../../routes/routes";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../app-redux/hooks";
import { openDrawerAction } from "../../app-redux/settings/settingsSlice";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: DRAWER_WIDTH,
    },
  })
);

export function MyDrawer() {
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
            component={Link}
            to={route.path}
            onClick={() => dispatch(openDrawerAction(false))}
          >
            <ListItemIcon>{i % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={route.name} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
}

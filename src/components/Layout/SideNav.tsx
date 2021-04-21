import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import { MyDrawer } from "./MyDrawer";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useAppDispatch, useAppSelector } from "../../app-redux/hooks";
import {
  selectMobileDrawer,
  toggleMobileDrawerAction,
} from "../../app-redux/settings/settingsSlice";

export const DRAWER_WIDTH = 240;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      [theme.breakpoints.up("md")]: {
        width: DRAWER_WIDTH,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: DRAWER_WIDTH,
    },
  })
);

export function SideNav() {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const mobileOpen = useAppSelector(selectMobileDrawer);

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden mdUp implementation="js">
        <Drawer
          // container={container}
          id="temp-mobile-drawer"
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={() => dispatch(toggleMobileDrawerAction())}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <MyDrawer />
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="js">
        <Drawer
          id="permanent-desktop-drawer"
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          <MyDrawer />
        </Drawer>
      </Hidden>
    </nav>
  );
}

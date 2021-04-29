import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useAppDispatch, useAppSelector } from "../../app-redux/hooks";
import {
  selectMobileDrawer,
  toggleMobileDrawerAction,
} from "../../app-redux/settings/settingsSlice";
import { DrawerContent } from "./DrawerContent";

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

  // If using material-ui theme mediaQuery
  // const theme = useTheme();
  // const mdUp = useMediaQuery(theme.breakpoints.up("md"));

  const mobileOpen = useAppSelector(selectMobileDrawer);

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden mdUp implementation="js">
        <Drawer
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
          <DrawerContent />
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          id="permanent-desktop-drawer"
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          <DrawerContent />
        </Drawer>
      </Hidden>
    </nav>
  );
}

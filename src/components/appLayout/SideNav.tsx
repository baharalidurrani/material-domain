import React from "react";
import Drawer from "@mui/material/Drawer";
import Hidden from "@mui/material/Hidden";
import { Theme } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import { useAppDispatch, useAppSelector } from "src/app-redux/hooks";
import { selectMobileDrawer, toggleMobileDrawerAction } from "src/app-redux/settings/settingsSlice";
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
      <Hidden mdDown implementation="css">
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

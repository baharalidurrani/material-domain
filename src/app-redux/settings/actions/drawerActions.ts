import { PayloadAction } from "@reduxjs/toolkit";
import { SettingsState } from "../settingsSlice";

/**
 * Don't use directly, instead use `openDrawerAction` from the corresponding slice/reduce file
 */
export const setOpenDrawer = (state: SettingsState, action: PayloadAction<boolean>) => {
  state.openMobileDrawer = action.payload;
};

export const toggleMobileDrawer = (state: SettingsState) => {
  state.openMobileDrawer = !state.openMobileDrawer;
};

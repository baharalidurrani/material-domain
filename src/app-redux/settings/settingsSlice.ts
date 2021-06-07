import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { setOpenDrawer, toggleMobileDrawer } from "./actions/drawerActions";
import { setThemeType } from "./actions/setThemeType";

export type ThemeType = null | "light" | "dark";

export interface SettingsState {
  themeType: ThemeType;
  openMobileDrawer: boolean;
}

const initialState: SettingsState = {
  themeType: null,
  openMobileDrawer: false,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    themeTypeAction: setThemeType,
    openDrawerAction: setOpenDrawer,
    toggleMobileDrawerAction: toggleMobileDrawer,
  },
});

export const { themeTypeAction, openDrawerAction, toggleMobileDrawerAction } =
  settingsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectThemeType = (state: RootState) => state.settings.themeType;
export const selectMobileDrawer = (state: RootState) => state.settings.openMobileDrawer;

import { PayloadAction } from "@reduxjs/toolkit";
import { SettingsState, ThemeType } from "../settingsSlice";

/**
 * Don't use directly, instead use `themeTypeAction` from the corresponding slice/reduce file
 */
export const setThemeType = (state: SettingsState, action: PayloadAction<ThemeType>) => {
  state.themeType = action.payload;
};

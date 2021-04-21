import { PayloadAction } from "@reduxjs/toolkit";
import { ThemeState, ThemeType } from "../settingsSlice";

/**
 * Don't use directly, instead use `themeTypeAction` from the corresponding slice/reduce file
 */
export const setThemeType = (
  state: ThemeState,
  action: PayloadAction<ThemeType>
) => {
  state.themeType = action.payload;
};

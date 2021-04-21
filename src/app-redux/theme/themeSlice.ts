import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type ThemeType = null | "light" | "dark";

export interface ThemeState {
  themeType: ThemeType;
}

const initialState: ThemeState = {
  themeType: null,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setThemeType: (state, action: PayloadAction<ThemeType>) => {
      state.themeType = action.payload;
    },
  },
});

export const { setThemeType } = themeSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectType = (state: RootState) => state.theme.themeType;

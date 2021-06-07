import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import counterReducer from "./counter/counterSlice";
import { settingsSlice } from "./settings/settingsSlice";

/**
 * @link https://redux-toolkit.js.org/tutorials/typescript Redux-Toolkit Typescript Docs
 */
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    settings: settingsSlice.reducer,
    auth: authSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

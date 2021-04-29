import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { settingsSlice } from "./settings/settingsSlice";

/**
 * @link https://redux-toolkit.js.org/tutorials/typescript Redux-Toolkit Typescript Docs
 */
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    settings: settingsSlice.reducer,
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

import React, { useEffect, useMemo } from "react";
import { CssBaseline, useMediaQuery } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useAppSelector, useAppDispatch } from "../app-redux/hooks";
import { selectThemeType, themeTypeAction } from "../app-redux/settings/settingsSlice";
import { customTheme } from "./customTheme";

interface Props {
  children: React.ReactNode;
}
export function CustomMuiTheme(props: Props) {
  const dispatch = useAppDispatch();
  const goDarkState = useAppSelector(selectThemeType);

  const goDarkQuery = useMediaQuery("(prefers-color-scheme: dark)");
  useEffect(() => {
    dispatch(themeTypeAction(null));
  }, [dispatch, goDarkQuery]);

  const theme = useMemo(
    () =>
      createMuiTheme({
        ...customTheme,
        palette: {
          ...customTheme.palette,
          type: goDarkState ? goDarkState : goDarkQuery ? "dark" : "light",
        },
      }),
    [goDarkQuery, goDarkState]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
}

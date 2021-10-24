import React, { useEffect, useMemo } from "react";
import { CssBaseline, useMediaQuery } from "@mui/material";
import { createTheme, StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { useAppDispatch, useAppSelector } from "src/app-redux/hooks";
import { selectThemeType, themeTypeAction } from "src/app-redux/settings/settingsSlice";
import { customTheme } from "./customTheme";

// declare module "@mui/styles/defaultTheme" {
//   // eslint-disable-next-line @typescript-eslint/no-empty-interface
//   interface DefaultTheme extends Theme {}
// }

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
      createTheme({
        ...customTheme,
        palette: {
          ...customTheme.palette,
          mode: goDarkState ? goDarkState : goDarkQuery ? "dark" : "light",
        },
      }),
    [goDarkQuery, goDarkState]
  );

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

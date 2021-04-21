import React, { useEffect, useMemo, useState } from "react";
import { CssBaseline, useMediaQuery } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { customTheme } from "./customTheme";

type ThemeStateType = null | "light" | "dark";
interface Props {
  children: React.ReactNode;
  themeState: ThemeStateType;
}
export function CustomMuiTheme(props: Props) {
  const [goDarkState, setGoDarkState] = useState<ThemeStateType>(
    props.themeState
  );
  useEffect(() => {
    console.log("props.themeState changed to:", props.themeState);
    setGoDarkState(props.themeState);
  }, [props.themeState]);

  const goDarkQuery = useMediaQuery("(prefers-color-scheme: dark)");
  useEffect(() => {
    console.log("goDarkQuery changed to:", goDarkQuery);
    setGoDarkState(null);
  }, [goDarkQuery]);

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

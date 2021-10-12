import { green, purple } from "@mui/material/colors";
import { ThemeOptions } from "@mui/material/styles";

export const customTheme: ThemeOptions = {
  palette: {
    // mode: "dark",
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
  // typography: {
  //   fontFamily: '"Inter", "Arial", sans-serif',
  //   fontSize: 12,
  //   button: { textTransform: "none" },
  // },
};

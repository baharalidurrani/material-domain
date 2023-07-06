import { green, purple } from '@mui/material/colors';
import { type ThemeOptions } from '@mui/material/styles';

const customTheme: ThemeOptions = {
  palette: {
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

export const customLightTheme: ThemeOptions = {
  ...customTheme,
  palette: {
    ...customTheme.palette,
    mode: 'light',
  },
};
export const customDarkTheme: ThemeOptions = {
  ...customTheme,
  palette: {
    ...customTheme.palette,
    mode: 'dark',
  },
};

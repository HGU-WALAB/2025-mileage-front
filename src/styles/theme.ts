import { palette } from '@/styles/palette';
import { typography } from '@/styles/typography';
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',

    primary: {
      main: palette.blue500,
      light: palette.blue300,
      dark: palette.blue600,
    },
    secondary: {
      main: palette.pink500,
      light: palette.pink300,
      dark: palette.pink600,
    },
    background: {
      default: palette.grey100,
      header: palette.white,
    },
    text: {
      primary: palette.black,
      secondary: palette.grey500,
    },
    variant: {
      default: palette.white,
      grey: palette.grey200,
    },
    ...palette,
  },
  typography: typography,
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',

    primary: {
      main: palette.blue500,
      light: palette.blue300,
      dark: palette.blue600,
    },
    secondary: {
      main: palette.pink500,
      light: palette.pink300,
      dark: palette.pink600,
    },
    background: {
      default: palette.black,
    },
    text: {
      primary: palette.white,
      secondary: palette.grey300,
    },
    variant: {
      default: palette.nearBlack,
      grey: palette.black,
    },
    ...palette,
  },
  typography: typography,
});

export type ThemeType = typeof lightTheme;

import { createTheme } from '@mui/material';

const palette = {
  // blue
  blue300: '#66BFFF',
  blue400: '#339FFF',
  blue500: '#2196f3',
  blue600: '#005FCC',
  blue700: '#003F7F',
  // pink
  pink300: '#F1A5B5',
  pink500: '#E3879E',
  pink600: '#F1A5B5',
  // purple
  purple300: '#A1A6FF',
  purple500: '#7D83FF',
  purple600: '#5A61CC',
  // green
  green300: '#66D2D0',
  green500: '#00A9A5',
  green600: '#007D7A',
  // yellow
  yellow300: '#FFEB66',
  yellow500: '#FFDD00',
  yellow600: '#CCB000',
  // grey
  grey100: '#F2F2F2',
  grey200: '#E0E0E0',
  grey300: '#BDBDBD',
  grey400: '#828282',
  grey500: '#4F4F4F',
  // etc
  black: '#333333',
  white: '#F9F9F9',
};

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
      default: palette.white,
    },
    text: {
      primary: palette.black,
      secondary: palette.grey500,
    },
    ...palette,
  },
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
    ...palette,
  },
});

export type ThemeType = typeof lightTheme;

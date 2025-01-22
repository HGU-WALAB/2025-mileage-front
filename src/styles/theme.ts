import { createTheme } from '@mui/material';

const palette = {};

const theme = createTheme({
  palette,
});

export default theme;

export type ThemeType = typeof theme;

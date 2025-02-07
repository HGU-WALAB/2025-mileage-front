import '@mui/material/styles/createPalette';

declare module '@mui/material/styles' {
  interface Palette {
    blue300: string;
    blue400: string;
    blue500: string;
    blue600: string;
    blue700: string;
    pink300: string;
    pink500: string;
    pink600: string;
    purple300: string;
    purple500: string;
    purple600: string;
    green300: string;
    green500: string;
    green600: string;
    yellow300: string;
    yellow500: string;
    yellow600: string;
    grey100: string;
    grey200: string;
    grey300: string;
    grey400: string;
    grey500: string;
    black: string;
    white: string;
  }

  interface PaletteOptions {
    blue300?: string;
    blue400?: string;
    blue500?: string;
    blue600?: string;
    blue700?: string;
    pink300?: string;
    pink500?: string;
    pink600?: string;
    purple300?: string;
    purple500?: string;
    purple600?: string;
    green300?: string;
    green500?: string;
    green600?: string;
    yellow300?: string;
    yellow500?: string;
    yellow600?: string;
    grey100?: string;
    grey200?: string;
    grey300?: string;
    grey400?: string;
    grey500?: string;
    black?: string;
    white?: string;
  }

  export function createTheme(options: ThemeOptions): Theme;
}

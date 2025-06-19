import { Global } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { Preview } from '@storybook/react';
import { globalStorybookStyle } from '../src/styles/global';
import { lightTheme } from '../src/styles/theme';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    Story => (
      <ThemeProvider theme={lightTheme}>
        <Global styles={globalStorybookStyle} />
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;

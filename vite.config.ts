import { sentryVitePlugin } from '@sentry/vite-plugin';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({ jsxImportSource: '@emotion/react' }),
    svgr(),
    tsconfigPaths(),
    sentryVitePlugin({
      org: 'hyelim',
      project: '2025-mileage',
    }),
    sentryVitePlugin({
      org: "hyelim",
      project: "2025-mileage"
    })
  ],

  base: '/mileage/',

  build: {
    sourcemap: true,
  },
});
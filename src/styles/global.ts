import { restCss } from '@/styles/reset';
import { css } from '@emotion/react';

export const globalStyle = css`
  ${restCss}

  html {
    font-size: 62.5%;
  }

  body {
    line-height: normal;
  }
`;

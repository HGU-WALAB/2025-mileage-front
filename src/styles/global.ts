import { restCss } from '@/styles/reset';
import { css } from '@emotion/react';

export const globalStyle = css`
  ${restCss}

  html {
    font-size: 100%;
  }

  body {
    line-height: normal;
    overflow-y: hidden;
  }

  div {
    box-sizing: border-box;
  }
`;

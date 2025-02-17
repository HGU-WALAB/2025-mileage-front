import { BackgroundImg } from '@/assets';
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
    background-image: url(${BackgroundImg});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  div {
    box-sizing: border-box;
  }
`;

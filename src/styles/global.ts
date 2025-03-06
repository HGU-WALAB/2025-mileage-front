import { BackgroundImg, MobileBackgroundImg } from '@/assets';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
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
    min-height: 100vh;
  }

  @media (${MAX_RESPONSIVE_WIDTH}) {
    body {
      background-image: url(${MobileBackgroundImg});
      background-position: center center;
    }
  }

  div {
    box-sizing: border-box;
  }

  h3 {
    vertical-align: bottom;
    margin: 0;
  }
`;

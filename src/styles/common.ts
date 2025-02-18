import { palette } from '@/styles/palette';
import { getOpacityColor } from '@/utils/getOpacityColor';
import { css } from '@emotion/react';

export const boxShadow = css`
  box-shadow: 0 0.25rem 1rem ${getOpacityColor(palette.black, 0.1)};
`;

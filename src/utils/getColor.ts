import { palette } from '@/styles/palette';

export const getColor = (color: string) => {
  return {
    lightColor: palette[`${color}300` as keyof typeof palette],
    baseColor: palette[`${color}500` as keyof typeof palette],
    hoverColor: palette[`${color}600` as keyof typeof palette],
  };
};

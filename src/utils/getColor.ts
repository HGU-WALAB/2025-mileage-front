import { palette } from '@/styles/palette';

export const getColor = (color: string) => {
  if (color === 'grey')
    return {
      lightColor: palette[`${color}100` as keyof typeof palette],
      baseColor: palette[`${color}200` as keyof typeof palette],
      hoverColor: palette[`${color}300` as keyof typeof palette],
    };

  return {
    lightColor: palette[`${color}300` as keyof typeof palette],
    baseColor: palette[`${color}500` as keyof typeof palette],
    hoverColor: palette[`${color}600` as keyof typeof palette],
  };
};

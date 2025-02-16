export const getOpacityColor = (color: string, opacity: number): string => {
  const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);

  if (!rgb) {
    return color;
  }

  const r = parseInt(rgb[1], 16);
  const g = parseInt(rgb[2], 16);
  const b = parseInt(rgb[3], 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

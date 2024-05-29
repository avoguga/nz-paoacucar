export const removeRem = (fontSize: string): number => {
  return Number(fontSize.replace('rem', ''));
};

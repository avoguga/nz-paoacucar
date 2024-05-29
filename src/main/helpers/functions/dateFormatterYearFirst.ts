export const dateFormatterYearFirst = (date: string): string | null => {
  if (date) {
    const splitDate = date.split('/');
    const newDate = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;
    return newDate;
  }
  return null;
};

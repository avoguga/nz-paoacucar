export const dateFormatterPtBr = (date: string | Date): string | null => {
  if (date) {
    if (typeof date === 'string') {
      const splitDate = date.split('-');

      if (splitDate[2]?.length === 4) {
        const newDate = `${splitDate[0]}/${splitDate[1]}/${splitDate[2]}`;
        return newDate;
      } else {
        const newDate = `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`;
        return newDate;
      }
    } else {
      const data = new Date(date);

      const dia = String(data.getDate()).padStart(2, '0');
      const mes = String(data.getMonth() + 1).padStart(2, '0');
      const ano = data.getFullYear();

      return `${dia}/${mes}/${ano}`;
    }
  }
  return null;
};

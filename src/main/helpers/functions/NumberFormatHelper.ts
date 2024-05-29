import { ISOToDate } from './DateFormatter';
import { valuable } from './Valuable';

const NumberFormat = (number, decimalCase = 2) =>
  new Intl.NumberFormat('pt-BR', {
    maximumFractionDigits: decimalCase,
    minimumFractionDigits: decimalCase,
  }).format(number);

export const number = {
  formatter: (num, decimalCase) =>
    valuable(num) ? NumberFormat(num, decimalCase) : undefined,
  parser: (label) => {
    if (label === '') return undefined;
    const num = Number(label.replace(/\./g, '').replace(',', '.'));
    return Number.isNaN(num) ? undefined : num;
  },
};

export const percent = {
  formatter: (num, decimalCase) => {
    if (!valuable(num)) return undefined;
    return `${NumberFormat(num * 100, decimalCase + 2)}%`;
    // return `${NumberFormat(num, decimalCase + 2)}%`;
  },
  parser: (label) => {
    const num = Number(
      label.replace('%', '').replace(/\./g, '').replace(',', '.')
    );
    return Number.isNaN(num) ? undefined : num / 100;
    // return Number.isNaN(num) ? undefined : num;
  },
};

export const scientific = {
  formatter: (num, decimalCase) =>
    valuable(num)
      ? new Intl.NumberFormat('pt-BR', {
          minimumSignificantDigits: decimalCase,
          maximumSignificantDigits: decimalCase,
          notation: 'scientific',
        }).format(num)
      : undefined,
  parser: number.parser,
};

export const date = {
  parser: (string) => {
    try {
      let dateString = string;
      if (string.includes('/')) {
        const day = string.slice(0, string.indexOf('/'));
        const month = string.slice(
          string.indexOf('/') + 1,
          string.lastIndexOf('/')
        );
        const year = string.slice(string.lastIndexOf('/') + 1);

        dateString = new Date(year, month - 1, day);
      }

      const newDate = new Date(dateString);
      return newDate.toISOString().slice(0, 10);
    } catch (err) {
      return undefined;
    }
  },
  formatter: ISOToDate,
};
export default NumberFormat;

export const isNumber = (
  value: string | undefined | null,
  onlyPositiveValue?: boolean
): string | boolean => {
  if (value) {
    const formatedValue = Number(value?.replace(',', '.'));
    const numericValue = Number(formatedValue);

    if (isNaN(numericValue)) {
      return 'O campo aceita somente números';
    }

    const regex = /^-?\d+([.,]\d+)?([eE][-+]?\d+)?$/;

    if (regex.test(value) === false) {
      return 'O campo aceita somente números';
    }

    if (onlyPositiveValue) {
      if (Number(formatedValue) < 0) {
        return 'Não são aceitos valores negativos';
      }
    }
  }
  return true;
};

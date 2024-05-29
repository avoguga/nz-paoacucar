export const maximumValue = (
  value: string | undefined | null,
  maxValue: string
): string | boolean => {
  if (value) {
    const formatedValue = Number(value?.replace(',', '.'));
    const formatedMaxValue = Number(maxValue?.replace(',', '.'));

    if (isNaN(formatedValue)) {
      return 'O campo aceita somente números';
    }

    const regex = /^-?\d+([.,]\d+)?([eE][-+]?\d+)?$/;

    if (regex.test(value) === false) {
      return 'O campo aceita somente números';
    }

    if (formatedValue > formatedMaxValue) {
      return `O valor não pode ser maior que ${maxValue}`;
    }
  }
  return true;
};

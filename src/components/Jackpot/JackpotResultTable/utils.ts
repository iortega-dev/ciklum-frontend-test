/**
 * Given an integer number, returns this number in roman format
 * @param original integer number
 */
export const int2roman = (original: number): string => {
  if (original < 1 || original > 3999) {
    return '0'
  }

  const numerals = [
    ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'], // 1-9
    ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'], // 10-90
    ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'], // 100-900
    ['M', 'MM', 'MMM'], // 1000-3000
  ];

  const digits = Math.round(original).toString().split('');
  let position = (digits.length - 1);

  /* eslint-disable no-param-reassign */
  return digits.reduce((roman, digit) => {
    if (digit !== '0') {
      roman += numerals[position][parseInt(digit, 10) - 1];
    }

    position -= 1;

    return roman;
  }, '');
}
/**
 * Given a quantity, returns this quantity formated to en-US format
 * @param quantity number
 */
export const formatCurrency = (quantity: number) => {
  const arrayOfDigits = Array.from(String(quantity), Number); // Convert quantity to array of numbers
  // Extract decimals part of quantity
  const decimals = arrayOfDigits.slice(arrayOfDigits.length - 2, arrayOfDigits.length).join('');
  // Extract rest of quantity
  const integers = arrayOfDigits.slice(0, arrayOfDigits.length - 2).join('');
  // Format integer part to currency
  const currencyInteger = Intl.NumberFormat('en-US').format(parseInt(integers, 10))
  // Return concat
  return `${currencyInteger}.${decimals}`
}
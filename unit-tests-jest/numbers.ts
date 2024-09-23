/**
 * Returns a new array that contains only the even numbers in the given array.
 */
export function evenNumbers(numbers: number[]): number[] {
  return numbers.filter((n) => n % 2 === 0);
}

/**
 * Returns a number formatted in dollars and cents.
 */
export function toDollars(amount: number): string {
  let cents = '00';
  if (amount % 1 !== 0) {
    cents = amount.toString().slice(-2);
  }

  const dollars = Math.floor(amount / 1);

  return `$${dollars}.${cents}`;
}

/**
 * Returns a new array of numbers where every entry has been divided by the
 * given divisor. Does not modify the original array.
 */
export function divideBy(numbers: number[], divisor: number): number[] {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    result[i] = numbers[i] / divisor;
  }
  return result;
}

/**
 * Modifies an object by multiplying the value of each key, but only if that
 * value is a number. Key names are arbitrary.
 */
export function multiplyBy(
  obj: Record<string, unknown>,
  multiplier: number
): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof obj[key] === 'number') {
      result[key] = Number(value) * multiplier;
    } else {
      result[key] = value;
    }
  });
  return result;
}

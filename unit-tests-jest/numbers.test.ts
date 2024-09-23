// import { isExportDeclaration } from 'typescript';
import { evenNumbers, toDollars, multiplyBy, divideBy } from './numbers';
describe('return even nums', () => {
  it('description', () => {
    const numbers = [0, 2, 4, 5];
    const result = evenNumbers(numbers);
    expect(result).toEqual([0, 2, 4]);
  });
});

describe('num to string dollar form', () => {
  it('description', () => {
    const num = 34.23;
    const result = toDollars(num);
    expect(result).toEqual('$34.23');
  });
  it('whole dollar', () => {
    const num = 100;
    const result = toDollars(num);
    expect(result).toEqual('$100.00');
  });
});

describe('new array all elements divided by divisor', () => {
  it('description', () => {
    const arr = [99, 33, 3];
    const divisor = 3;
    const result = divideBy(arr, divisor);
    expect(result).toEqual([33, 11, 1]);
  });
});

describe('multiplyBy', () => {
  it('description', () => {
    const obj = {
      string: 'test',
      firstNum: 12,
      secondNum: 24,
      arr: ['hi', 2, 'abc'],
    };
    const result = multiplyBy(obj, 2);
    expect(result).toEqual({
      string: 'test',
      firstNum: 24,
      secondNum: 48,
      arr: ['hi', 2, 'abc'],
    });
  });
});

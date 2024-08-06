'use strict';
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];
const evens = numbers.filter((element) => element % 2 === 0);
console.log('evens:', evens);
const noD = names.filter((element) => {
  if (element.includes('d') || element.includes('D')) {
    return false;
  }
  return true;
});
console.log('noD:', noD);

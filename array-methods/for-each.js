'use strict';
const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];
console.log('in order:');
values.forEach(function (element) {
  console.log(element);
});
console.log('reverse order:');
values.forEach(function (element, index, arr) {
  element = arr[arr.length - 1 - index];
  console.log(element);
});

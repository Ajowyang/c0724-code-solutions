'use strict';
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' },
];
const products = [
  { id: 1, name: 'iPhone', price: 999 },
  { id: 2, name: 'Samsung Galaxy', price: 899 },
  { id: 3, name: 'Google Pixel', price: 799 },
];
let user = users.find(function (element) {
  if (element.id === 2) {
    return true;
  }
  return false;
});
console.log(user);
let expensiveProduct = products.find((element) => element.price > 900);
console.log(expensiveProduct);

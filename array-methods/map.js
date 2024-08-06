'use strict';
const prices = [42.42, 10, 28.2234, 3.2, 5, 12];
const priceObjects = prices.map(function (element) {
  let result = {
    price: element,
    salePrice: element / 2,
  };
  return result;
});
const formattedPrices = prices.map(function (element) {
  let str = Math.round(element * 100).toString();
  str = str.slice(0, -2) + '.' + str.slice(-2);
  return str;
});
console.log('priceObjects:', priceObjects);
console.log('formattedPrices:', formattedPrices);

const prices: number[] = [42.42, 10, 28.2234, 3.2, 5, 12];
interface PriceObj {
  price: number;
  salePrice: number;
}

const priceObjects: PriceObj[] = prices.map(function (element: number) {
  const result: PriceObj = {
    price: element,
    salePrice: element / 2,
  };
  return result;
});

const formattedPrices: string[] = prices.map(function (element: number) {
  let str: string = Math.round(element * 100).toString();
  str = str.slice(0, -2) + '.' + str.slice(-2);
  return str;
});
console.log('priceObjects:', priceObjects);
console.log('formattedPrices:', formattedPrices);

'use strict';
console.log('linked!');
function getRangeReport(start, end) {
  const result = {
    total: 0,
    odds: [],
    evens: [],
    range: [],
    average: 0,
  };
  for (let i = start; i <= end; i++) {
    result.range.push(i);
    result.total += i;
    if (i % 2 === 1 || i % 2 === -1) {
      result.odds.push(i);
    } else {
      result.evens.push(i);
    }
  }
  result.average = result.total / (end - start + 1);
  return result;
}
getRangeReport(1, 10); // -> {average: 5.5, evens:[2,4,6,8,10], odds:[1,3,5,7,9], range:[1,2,3,4,5,6,7,8,9,10], total: 55 }
getRangeReport(1, 5); // -> {average: 3, evens:[2,4], odds:[1,3,5], range:[1,2,3,4,5], total: 15 }

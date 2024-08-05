'use strict';
console.log('linked!');
function getRangeReport(start, end) {
  let result = {
    total: 0,
    odds: [],
    evens: [],
    range: [],
    average: 0,
  };
  for (let i = start; i <= end; i++) {
    result.range.push(i);
    result.total += i;
    if (i % 2 === 1) {
      result.odds.push(i);
    } else {
      result.evens.push(i);
    }
  }
  result.average = result.total / (end - start + 1);
  console.log(result);
  return result;
}

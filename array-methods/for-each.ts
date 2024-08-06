const values: number[] = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];
console.log('in order:');
values.forEach(function (element: number): void {
  console.log(element);
});

console.log('reverse order:');
values.forEach(function (element: number, index: number, arr: number[]): void {
  element = arr[arr.length - 1 - index];
  console.log(element);
});

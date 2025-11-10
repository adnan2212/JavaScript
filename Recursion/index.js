function printNumbers(n) {
  if (n === 0) return;
  printNumbers(n - 1);
  console.log(n);
}
// console.log(printNumbers(10));

// -------------------------- Example Ends Here --------------------------

function sum(n) {
  if (n === 0) return 0;
  return n + sum(n - 1);
}

// -------------------------- Example Ends Here --------------------------

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1)
}
// console.log(factorial(5));

// -------------------------- Example Ends Here --------------------------

function sumArray(arr, i = 0) {

  if (i == arr.length) return 0;

  return arr[i] + sumArray(arr, i + 1);

}
// console.log(sumArray([1, 2, 3, 4]));

// -------------------------- Example Ends Here --------------------------

function sumOfOdds(arr, i = 0) {
  if (i === arr.length) return 0;

  let current = arr[i] % 2 !== 0 ? arr[i] : 0;
  console.log(current);

  return current + sumOfOdds(arr, i + 1)
}
console.log(sumOfOdds([1, 2, 3, 4, 5]));

// -------------------------- Example Ends Here --------------------------
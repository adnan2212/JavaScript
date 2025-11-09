
function findMissingNumbers(arr) {
  const n = arr.length;

  const expectedSum = n * (n + 1) / 2;

  const actualSum = arr.reduce((acc, num) => acc = acc + num, 0);

  return expectedSum - actualSum;
}

console.log(findMissingNumbers([4, 0, 2, 5, 1]));
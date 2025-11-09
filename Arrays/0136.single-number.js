function singleNumber(arr) {
  let result = 0;
  for (const num of arr) {
    result ^= num; // XOR cancels out duplicates
  }
  return result;
}

// -------------------------- Example Ends Here --------------------------

function singleNumber(arr) {

  const myMap = new Map();

  for (const num of arr) {
    myMap.set(num, (myMap.get(num) || 0) + 1);
  }

  for (const [num, count] of myMap) {
    if (count === 1) return num;
  }

  /*
  for (let i = 0; i < arr.length; i++) {
    if (myMap.has(arr[i])) {
      myMap.set(arr[i], myMap.get(arr[i]) + 1)
    } else {
      myMap.set(arr[i], 1)
    }
  }

  let minKey = null;
  let minValue = Infinity;

  for (const [key, value] of myMap.entries()) {
    if (value < minValue) {
      minValue = value;
      minKey = key;
    }
  }

  return false;
  */

}

console.log(singleNumber([4,1,2,1,2]));
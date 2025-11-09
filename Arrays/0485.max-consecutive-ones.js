function findMaxConsecutiveInteger (arr) {

  let maxCount = 1;
  let currentCount = 1;
  let maxNum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i-1]) {
      currentCount++;
    } else {
      currentCount = 1;
    }

    if (currentCount > maxCount) {
      maxCount = currentCount;
      maxNum = arr[i];
    }
  }

  return `Max consecutive integer is: ${maxNum}, count: ${maxCount}`;
}

// -------------------------- Example Ends Here --------------------------

function findMaxConsecutiveIntegerBF(arr) {
  
  const myMap = new Map();
  
  for (let i = 0; i < arr.length; i++) {
    
    if (myMap.has(arr[i]) && arr[i] === arr[i-1]) {
      
      myMap.set(arr[i], myMap.get(arr[i]) + 1);
      
    } else {
      
      myMap.set(arr[i], 1);
      
    }
    
  }

  // return Math.max(...myMap.values());

  let maxKey = null;
  let maxValue = -Infinity;
  
  for (let [key, value] of myMap) {
    if (value > maxValue) {
      maxValue = value;
      maxKey = key;
    }  
  }

  return `Max consecutive integer is: ${maxKey}`;
  
}

// console.log(findMaxConsecutiveInteger([1, 1, 0, 2, 2, 2, 3, 3, 1, 1, 1, 2]));
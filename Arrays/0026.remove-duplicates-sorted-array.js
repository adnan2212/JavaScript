function removeDuplicates(arr) {

  let x = 0;

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] > arr[x]) {
      x = x + 1;
      arr[x] = arr[i];
    }

  }

  arr.length = x + 1;
  return arr;
  return arr.slice(0, x + 1);
}

// -------------------------- Example Ends Here --------------------------

function removeDuplicate(arr) {
  
  let uniqueArr = [];
  
  let hashMap = new Map();
  
  arr.forEach(element => {
    
    if(!hashMap.has(element)) {
      uniqueArr.push(element);
      hashMap.set(element, true);
    }

  })

  return uniqueArr;

}

const arr = [0, 0, 0, 1, 1, 2, 3, 4, 4, 4];
const result = removeDuplicates(arr);
console.log(result);
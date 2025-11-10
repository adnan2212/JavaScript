function binarySearch(nums, target) {

  let left = 0;
  let right = nums.length - 1;

  while (right >= left) {
    let middle = Math.floor((right + left) / 2);

    if (target === nums[middle]) {
      return middle;
    } 
    else if (target < nums[middle]) {
      right = middle - 1;
    }
    else {
      left = middle + 1;
    }
  }
  return -1;
}


const nums = [-1, 0, 3, 5, 9, 12];
const target = 19;
console.log(binarySearch(nums, target));
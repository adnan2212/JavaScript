/*

Selection Sort repeatedly selects the smallest element from the unsorted part of the array and swaps it with 
the element at the beginning of the unsorted section. It runs in O(n²) time and sorts in place.

*/

function selectionSort(nums) {

  for (let i = 0; i < nums.length; i++) {

    let minIndex = i;

    for (let j = i + 1; j < nums.length; j++) {

      if (nums[minIndex] > nums[j]) {
        minIndex = j;
      }

    }

    if (minIndex !== i) {
      let temp = nums[i];
      nums[i] = nums[minIndex];
      nums[minIndex] = temp;
    }

  }

  return nums;

}

console.log(selectionSort([5,2,3,1]));
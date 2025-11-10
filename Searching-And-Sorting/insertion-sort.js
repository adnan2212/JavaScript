/*

  Insertion Sort is a simple sorting algorithm that builds the final sorted array one element at a time, 
  by inserting each element into its correct position among the previously sorted elements.

  It works very similarly to how you sort playing cards in your hand:

  You pick one card at a time and insert it into the right spot among the cards you already sorted.

*/

function insertionSort(nums) {

  for (let i = 1; i < nums.length; i++) {

    let temp = nums[i];
    let j = i - 1;

    // shift elements greater than key to the right
    while (j >= 0 && nums[j] > temp) {
      nums[j + 1] = nums[j];
      j--;
    }

    nums[j + 1] = temp; // insert key in correct position

  }

  return nums;
}

console.log(insertionSort([5, 3, 4, 1, 2]));
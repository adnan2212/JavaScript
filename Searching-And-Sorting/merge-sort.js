/*

  Merge Sort (O(n log n)) S.P O(n)

  Merge Sort is a divide and conquer sorting algorithm.

  It works by:

  - Dividing the array into two halves,

  - Sorting each half recursively,

  - Merging the two sorted halves back together.

*/

function mergeSort(arr) {
  if (arr.length === 1) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));
  return merge(left, right);
}

function merge(arr1, arr2) {

  let mergedArr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {

    if (arr1[i] < arr2[j]) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }

  }

  while (i < arr1.length) {
    mergedArr.push(arr1[i]);
    i++;
  }
  
  while (j < arr1.length) {
    mergedArr.push(arr2[j]);
    j++;
  }

  return mergedArr;
}


console.log(mergeSort([3, 1, 2, 8]));
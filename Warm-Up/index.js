/*
  Write a function that searches for an element in an array and returns the index, if the element is not present then just return -1
*/

const searchFunction = (arr, element) => {
  
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === element) {
      return i + 1;
    } 
  }

  return -1;
}

const countNegatives = (arr) => {

  let negativeCount = 0;

  arr.forEach(element => {
     if (element < 0) {
      negativeCount++;
    }
  });

  return negativeCount;

}

const findLargest = (arr) => {

  let largest = arr[0];
  let secondLargest = arr[0]

  arr.forEach(element => {
    if(element > largest) {
      secondLargest = largest
      largest = element
    }

    if(element > secondLargest && element < largest) {
      secondLargest = element;
    }

  });

  return {largest, secondLargest};

}

// const arr = [-10, -2, -20, -1, 0];
// const negative = countNegatives(arr);

// const result = findLargest(arr);
// console.log(result);
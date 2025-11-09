function moveZeros(arr) {
  
  let newArr = [];
  let counter = 0;
  
  arr.forEach(element => {
    if (element === 0) counter++;
    else {
      newArr.push(element)
    }
  })
  
  for(let i = 1; i <= counter; i++) {
    newArr.push(0);
  }
  
  return newArr;
}


const arr1 = [0, 10, 20, 0, 0, 40, 0, 100];
const arr2 = [120 , 99, 11, 22, 33, 44, 55, 66, 77];

const result = moveZeros(arr1);
console.log(result);
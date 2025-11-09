function removeElement(num, arr) {

  let x = 0;

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] !== num) {
      arr[x] = arr[i];
      x++;
    }

  }

  arr.length = x + 1;
  return arr;
}

const arr = [1, 30, 23, 35, 43, 65, 87, 99, 101];
const result = removeElement(65, arr);
console.log(result);

const removeSpecificElement = (arr, num) => arr.filter(item => item != num );

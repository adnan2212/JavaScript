/*
* input: "leet**cod*e"
* output: "lecoe"
*/

function removeStarsFromString (s) {

  let stack = [];

  for (let char of s) {
    if (char == '*') {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join('');
}

console.log(removeStarsFromString("leet**cod*e"));
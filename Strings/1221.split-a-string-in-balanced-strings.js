/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    
  let balance = 0;
  let count = 0;

  for (let char of s) {

    if (char === 'L') balance++;
    else balance--;

    if (balance === 0) count++;

  }

  return count;

};

console.log(balancedStringSplit('RLRRLLRLRL'));
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStrII = function(s, k) {

  let arr = s.split('');

  for (let x = 0; x < s.length; x = x + 2 * k) {

    let n = k;

    for (let i = 0; i < Math.floor(n/2); i++) {

      [ arr[x + i], arr[x + n - i - 1] ] = [ arr[x + n - i - 1], arr[x + i] ];

    }

  }

  return arr.join('');

};

var reverseStr = function(s) {

  let arr = s.split('');
  let n = arr.length; 

  for (let i = 0; i < Math.floor(n/2); i++) {

    [ arr[i], arr[n - i - 1] ] = [ arr[n - i - 1], arr[i] ];

  }

  return arr.join('');

};

console.log(reverseStrII('abcdefg', 2));
// Output: "bacdfeg"

// console.log(reverseStr('abcdefg'));

/**
 * @param {string} s 
 * @return {boolean}
*/
var isPalindrome = function(s) {

  let input = s.replace(/[^a-zA-z0-9]/g, '').toLowerCase();
  let i = input.length - 1;
  
  let reverse = '';

  while (i >= 0) {

    reverse+=input[i];
    i--;

  }

  return reverse === input;

}

var isPalindromeTwoPointers = function(s) {

  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    if (s[i] !== s[j]) return false;
    i++;
    j--;
  }

  return true;

}

console.log(isPalindrome('A man, a plan, a canal Panama'));
console.log(isPalindromeTwoPointers('lol'));
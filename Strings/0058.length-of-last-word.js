/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

  let i = s.length - 1;
  
  // Skip trailing spaces
  // while (i >= 0 && s[i] === ' ') {
  //   i--;
  // }
  
  // Count the last word’s length
  // let length = 0;
  // while(i >= 0 && s[i] !== ' ') {
  //   length++;
  //   i--;
  // }

  let count = 0;
  while (i >=0) {
    if (s[i] != ' ') {
      count++;
    } 
    else if (count > 0) {
      break;
    }
    i--;
  }

  return count;

}

var lengthOfLastWordUsingMethods = function(s) {
  s = s.trim();
  let words = s.split(' ');
  return words[ strArr.length - 1].length;
};

console.log(lengthOfLastWord("   fly  to   the    moon     "));
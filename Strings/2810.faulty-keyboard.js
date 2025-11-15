/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {

  let newStr = '';
  for (let i = 0; i < s.length; i++) {

    if (s[i] === 'i') {

      let j = newStr.length - 1;
      let reversedStr = '';
      while (j >= 0) {
        reversedStr+=newStr[j];
        j--;
      }

      newStr = reversedStr;
      reversedStr = '';

    } else {

      newStr+=s[i];

    }

  }

  return newStr;

};

console.log(finalString('poiinter'));
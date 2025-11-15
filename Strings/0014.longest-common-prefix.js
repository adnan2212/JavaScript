/**
 * @param {string[]} strs
 * @return {string}
*/
var longestCommonPrefix = function(strs) {

  let result = '';

  for (let i = 0; i < strs[0].length; i++) {

    let char = strs[0][i];

    for (let str of strs) {

      if (str[i] !== char) return result;

    }

    result+=char;

  }

}

console.log(longestCommonPrefix(['flowers', 'flow', 'flight']));
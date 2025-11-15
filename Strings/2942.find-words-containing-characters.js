/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let result = [];

    for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < words[i].length; j++) {
        if (words[i][j] == x) {
          result.push(i);
          break;
        }
      }

      // if (words[i].includes(x)) {
      //   result.push(i);
      // }
    }

    return result;
};

console.log(findWordsContaining(["leet","code"], 'e'));
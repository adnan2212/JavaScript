/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

  let map = new Map();
    
  for (let i = 0; i < strs.length; i++) {

    let key = strs[i].split('').sort().join('');

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key).push(strs[i]);

  }

  return Array.from(map.values());

};

// hashed keys
var groupAnagrams2 = function(strs) {

  let map = new Map();

  for (let i = 0; i < strs.length; i++) {

    let freq = Array(26).fill(0);
    
    for (let j = 0; j < strs[i].length; j++) {

      freq[strs[i][j].charCodeAt() - 97]++;

    }

    let key = freq.join('');

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key).push(strs[i])
  }

  return Array.from(map.values());
}

console.log(groupAnagrams2(["eat","tea","tan","ate","nat","bat"])); 
// [["bat"],["nat","tan"],["ate","eat","tea"]]
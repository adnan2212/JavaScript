/**
 * @param {string} s
 * @return {number}
 */

var getMaxValue = function(map) {
  let maxValue = 0;

  map.forEach(value => {
    maxValue = Math.max(maxValue, value);
  });

  return maxValue;
}

var maxFreqSum = function(s) {
  const vowelsSet = new Set('aeiou');

  const vowelsFrequencies = new Map();
  const consonantsFrequencies = new Map();

  for (let i = 0; i < s.length; i++) {

    if (vowelsSet.has(s[i])) {
      vowelsFrequencies.set(s[i], (vowelsFrequencies.get(s[i]) || 0) + 1);
    } else {
      consonantsFrequencies.set(s[i], (consonantsFrequencies.get(s[i]) || 0) + 1)
    }

  }

  const maxVowelFrequency = getMaxValue(vowelsFrequencies);
  const maxConsonentFrequency = getMaxValue(consonantsFrequencies);

  return maxVowelFrequency + maxConsonentFrequency;
};

var maxFreqSum2 = function(s) {
  let map = {};

  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      map[s[i]]++;
    }
  }

  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let maxVowel = 0;
  let maxConsonent = 0;

  for (let i = 0; i < s.length; i++) {

    if (vowels.includes(s[i])) {

      maxVowel = Math.max(maxVowel, map[s[i]]);

    } else {

      maxConsonent = Math.max(maxConsonent, map[s[i]]);

    }

  }

  return maxVowel + maxConsonent;


}

console.log(maxFreqSum2("successes"));
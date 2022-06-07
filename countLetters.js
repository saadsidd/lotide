// Returns object with count of all letters in a given string
const countLetters = function(string) {
  const result = {};
  for (const letter of string.split(' ').join('')) {
    if (result[letter] === undefined) {
      result[letter] = 0;
    }
    result[letter]++;
  }
  return result;
};

module.exports = countLetters;
// Returns an object with positions for all letters in given string
const letterPositions = function(sentence) {
  const result = {};

  for (const index in sentence) {
    if (sentence[index] !== ' ') {
      if (result[sentence[index]] === undefined) {
        result[sentence[index]] = [];
      }
      result[sentence[index]].push(index);
    }
  }
  
  return result;
};

module.exports = letterPositions;
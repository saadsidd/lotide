const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const result = {};
  for (let letter of string.split(' ').join('')) {
    if (result[letter] === undefined) {
      result[letter] = 0;
    }
    result[letter]++;
  }
  return result;
};

// Test cases to check if returned object has correct length
assertEqual(Object.keys(countLetters('lighthouse in the house')).length, 10);
assertEqual(Object.keys(countLetters('foo bar')).length, 5);
assertEqual(Object.keys(countLetters('hey i just coded this')).length, 11);
assertEqual(Object.keys(countLetters('twelve thousand')).length, 12);
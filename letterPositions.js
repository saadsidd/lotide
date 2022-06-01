const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: The arrays are equal`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: The arrays are NOT equal`);
  }
};

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

assertArraysEqual(letterPositions('lighthouse in the house').h, ['3', '5', '15', '18']);
assertArraysEqual(letterPositions('hello').l, ['2', '3']);
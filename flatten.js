// Determines whether two given arrays are equal
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// Calls eqArrays and asserts whether two given arrays are equal
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: The arrays are equal`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: The arrays are NOT equal`);
  }
};

// Converts any nested arrays within passed array into new 1D array
const flatten = function(array) {
  let temp = [];
  for (let item of array) {
    if (Array.isArray(item)) {
      for (let i of item) {
        temp.push(i);
      }
    } else {
      temp.push(item);
    }
  }
  return temp;
};

assertArraysEqual(flatten([[1], [2], [3], [4]]), [1, 2, 3, 4]);
assertArraysEqual(flatten([[1, 2, 3], [4, 5, 6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
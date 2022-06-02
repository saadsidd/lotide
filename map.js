const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const map = function(array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};

// Returns first letter of each word
assertArraysEqual(map(["ground", "control", "to", "major", "tom"], word => word[0]), ['g', 'c', 't', 'm', 't']);

// Returns each number doubled
assertArraysEqual(map([1, 2, 3, 4, 5, 6], num => num * 2), [2, 4, 6, 8, 10, 12]);

// Returns array with any string numbers converted to actual numbers
assertArraysEqual(map(['1', 2, 3, '4', 5, '6', '7', 8, '9'], num => {
  if (typeof num === 'string') return Number(num);
  return num;
}), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
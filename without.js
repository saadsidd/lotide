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

// Removes items from first array that are also in second given array
const without = function(original, itemsToRemove) {
  let source = [...original];
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        source.splice(i, 1);
      }
    }
  }
  return source;
};

let original = [1, 2, 3];
assertArraysEqual(without(original, [1]), original);  // NOT Equal

original = ["1", "2", "3"];
assertArraysEqual(without(original, [1, 2, 3]), original);  // Equal

original = ["1", "2", "3"];
assertArraysEqual(without(original, ['1', '2', 3]), original);  // NOT EQUAL

original = [1, 2, 3, 4, 5, 6, 7, 8, 9];
assertArraysEqual(without(original, [3, 8, '8', '9']), original); // NOT EQUAL

// Test case to ensure original array passed in is not changed
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
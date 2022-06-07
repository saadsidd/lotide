// Converts 2D nested arrays into 1D array
const flatten = function(array) {
  const temp = [];
  for (const item of array) {
    if (Array.isArray(item)) {
      for (const i of item) {
        temp.push(i);
      }
    } else {
      temp.push(item);
    }
  }
  return temp;
};

module.exports = flatten;
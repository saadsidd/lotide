// Return array from start until an element causes callback to return true
const takeUntil = function(array, callback) {
  const result = [];
  for (const item of array) {
    const test = callback(item);
    if (!test) {
      result.push(item);
    } else {
      break;
    }
  }
  return result;
};

module.exports = takeUntil;